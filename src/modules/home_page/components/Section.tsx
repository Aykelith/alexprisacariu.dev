type Props = React.PropsWithChildren<{
    title: string;
}>;

export default function Section({ title, children }: Props) {
    return (
        <div className="flex flex-col space-y-3">
            <h2 className="text-2xl font-bold">{title}</h2>
            {children}
        </div>
    );
}

