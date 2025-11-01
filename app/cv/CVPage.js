"use client";

//= Functions
// Others
import { useRouter } from "next/navigation";

//= React components
// Own
import MenuTag from "@/components/tags/MenuTag";
import MenuTagSimple from "@/components/tags/MenuTagSimple";

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
            <div className="print:px-0 print:hidden w-full lg:w-[210mm] print:w-[210mm] flex justify-between">
                <div className="flex gap-2">
                    <MenuTag
                        href={pdfHref}
                        className="flex gap-1 items-center text-black!"
                    >
                        <PDFSVG className="w-4 h-4" />
                        PDF
                    </MenuTag>
                    <MenuTagSimple
                        onClick={() => window?.print()}
                        className="flex gap-1 items-center"
                    >
                        <PrintSVG className="w-4 h-4" />
                        Print
                    </MenuTagSimple>
                </div>
            </div>
            {children}
        </div>
    );
}
