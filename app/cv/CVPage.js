"use client";

//= Functions
// Others
import { useRouter } from "next/navigation";

//= React components
// Own
import MenuTag from "@/components/tags/MenuTag";
import MenuTagSimple from "@/components/tags/MenuTagSimple";
import AccentButton from "@/components/AccentButton";

//= Assets
// Own
import PrintSVG from "@/components/icons/print.svg";
import PDFSVG from "@/components/icons/pdf.svg";

export default function CVPage({ id, pdfHref, children }) {
    const router = useRouter();

    return (
        <div
            id={id}
            className="h-full flex flex-col items-center py-3 px-2 lg:px-0 print:px-0 gap-3 print:bg-transparent print:block print:py-0"
        >
            <div className="print:px-0 print:hidden w-full lg:w-[210mm] print:w-[210mm] flex gap-2 justify-center">
                <AccentButton
                    href={pdfHref}
                    className="flex gap-1 items-center"
                    rel="noopener"
                    target="_blank"
                >
                    <PDFSVG className="w-4 h-4 text-white" />
                    PDF
                </AccentButton>
                <AccentButton
                    onClick={() => window?.print()}
                    className="flex gap-1 items-center"
                >
                    <PrintSVG className="w-4 h-4 text-white" />
                    Print
                </AccentButton>
            </div>
            {children}
        </div>
    );
}
