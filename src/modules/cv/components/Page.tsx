export type PageProps = React.PropsWithChildren<{}>;

export default function Page({ children }: PageProps) {
    return (
        <div className="w-full lg:w-[210mm] lg:h-[297mm] print:w-[210mm] print:h-[297mm] p-6 lg:p-[1cm] print:p-[1cm] bg-white flex flex-col gap-8 shadow-lg print:bg-transparent print:shadow-none">
            {children}
        </div>
    );
}
