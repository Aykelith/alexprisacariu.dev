use std::time::Duration;
use std::time::{SystemTime, UNIX_EPOCH};

async fn run_with_retry<F, Fut, T, E>(f: F, initial_backoff_ms: u64, max_tries: u32) -> Result<T, E>
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
                if current_try == max_tries {
                    return Err(err);
                }

                tokio::time::sleep(Duration::from_millis(backoff_ms)).await;
                backoff_ms *= 2;
                current_try += 1;
            }
        }
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result: Result<i32, Box<dyn std::error::Error>> = run_with_retry(|| async {
        let now = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_millis();

        println!("Failed at {}", now);
        Err::<i32, Box<dyn std::error::Error>>("Failed".into())
    }, 100, 5)
    .await;

    match result {
        Ok(value) => println!("Success {}", value),
        Err(err) => println!("Failed after retries: {}", err),
    }

    Ok(())
}