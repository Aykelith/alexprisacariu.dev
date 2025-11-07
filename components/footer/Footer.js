// Methods
import clsx from "clsx";

export default function Footer({ className }) {
    return (
        <div className={clsx("box", className)}>
            <div className="border-t py-3">
                <div>© {new Date().getFullYear()} Alexandru Prisacariu</div>
            </div>
        </div>
    );
}
