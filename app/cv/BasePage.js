export default function BasePage({ children }) {
    return (
        <div className="w-full lg:w-[210mm] lg:h-[297mm] print:w-[210mm] print:h-[297mm] p-6 lg:p-[1cm] print:p-[1cm] bg-page flex flex-col gap-8 rounded print:rounded-none shadow-lg print:shadow-none">
            {children}
        </div>
    );
}
