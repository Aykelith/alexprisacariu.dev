import clsx from "clsx";

export default function BlurredSidesImg({
    className,
    src,
    alt,
    imgClassName,
    visibleAlt,
    ...otherProps
}) {
    return (
        <div className={clsx("blurred-sides-img", className)} {...otherProps}>
            <div
                className="img"
                style={{
                    "--bg-img": `url(${src})`,
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    className={clsx("object-contain", imgClassName)}
                />
            </div>
            {!!visibleAlt && <div className="alt">{visibleAlt}</div>}
        </div>
    );
}
