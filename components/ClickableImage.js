export default function ClickableImage({ className, ...otherProps }) {
    return (
        <div className="clickable-img">
            <img className={className} {...otherProps} />
        </div>
    );
}
