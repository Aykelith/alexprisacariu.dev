use std::time::Duration;
use rand::Rng;
use std::time::{SystemTime, UNIX_EPOCH};

async fn run_with_retry<F, Fut, T, E>(f: F, initial_backoff_ms: u64, max_tries: u32, is_transient_error: fn(&E) -> bool) -> Result<T, E>
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = Result<T, E>>,
{
    let mut current_try: u32 = 1;
    let mut backoff_ms = initial_backoff_ms;

    loop {
        match f().await {
            Ok(value) => return Ok(value),
            Err(err) => {
                if current_try == max_tries || !is_transient_error(&err) {
                    return Err(err);
                }

                let actual_backoff_ms = rand::rng().random_range(0..backoff_ms);
                tokio::time::sleep(Duration::from_millis(actual_backoff_ms)).await;
                backoff_ms *= 2;
                current_try += 1;
            }
        }
    }
}

fn is_redis_error_transient(err: &redis::RedisError) -> bool {
    err.is_timeout()
        || err.is_connection_dropped()
        || err.is_connection_refusal()
        || err.is_io_error()
}

async fn run_redis_with_retry<F, Fut, T>(f: F, initial_backoff_ms: u64, max_tries: u32) -> Result<T, redis::RedisError>
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = Result<T, redis::RedisError>>,
{
    run_with_retry(
        f,
        initial_backoff_ms,
        max_tries,
        is_redis_error_transient
    ).await
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result = run_redis_with_retry::<_, _, i32>(
        || async {
            let now = SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap()
                .as_millis();

            println!("Failed at {}", now);

            // Uncomment for a non-transient error
            // Err(redis::RedisError::from((
            //     redis::ErrorKind::UnexpectedReturnType, 
            //     "Non-transient error"
            // )))

            Err(redis::RedisError::from((
                redis::ErrorKind::Io, 
                "Transient error"
            )))
        },
        100,
        5,
    )
    .await;

    match result {
        Ok(value) => println!("Success {}", value),
        Err(err) => println!("Failed after retries: {}", err),
    }

    Ok(())
}
