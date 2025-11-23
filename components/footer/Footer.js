// Methods
import clsx from "clsx";

/**
 * The footer component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the footer component
 */
export default function Footer({ className }) {
    return (
        <div className={clsx("box", className)}>
            <div className="border-t py-3">
                <div>© {new Date().getFullYear()} Alexandru Prisacariu</div>
            </div>
        </div>
    );
}
