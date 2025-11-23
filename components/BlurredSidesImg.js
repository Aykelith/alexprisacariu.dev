import clsx from "clsx";

/**
 * The blurred sides image component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @param {String} props.src - the source of the image
 * @param {String} props.alt - the alt text of the image
 * @param {String} [props.imgClassName] - the class name of the image
 * @param {String} [props.visibleAlt] - the visible alt text
 * @returns {JSX.Element} the blurred sides image component
 */
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
