//= Functions
// Others
import { useRouter } from 'next/router';

//= React components
// Own
import { MenuTagSimple, MenuTag } from '../../tags';

//= Assets
// Own
import PrintSVG from '../../../icons/print.svg';
import PDFSVG from '../../../icons/pdf.svg';

const HeadItemClasses = 'text-black flex gap-1 items-center';

export type CVPageProps = React.PropsWithChildren<{
    id: string;
    pdfHref: string;
}>;

export default function CVPage({ id, pdfHref, children }: CVPageProps) {
    const router = useRouter();

    return (
            <div id={id} className="flex flex-col items-center py-3 gap-3 bg-gray-300 print:bg-transparent print:block print:py-0">
                <div className="px-2 lg:px-0 print:px-0 print:hidden w-full lg:w-[210mm] print:w-[210mm] flex justify-between">
                    <MenuTagSimple onClick={() => router.back()}>{'<'} Go back</MenuTagSimple>
                    <div className="flex gap-2">
                        <MenuTag href={pdfHref} className="flex gap-1 items-center">
                            <PDFSVG className="w-4 h-4" />
                            PDF
                        </MenuTag>
                        <MenuTagSimple onClick={() => window?.print()} className="flex gap-1 items-center">
                            <PrintSVG className="w-4 h-4" />
                            Print
                        </MenuTagSimple>
                    </div>
                </div>
                {children}
            </div>
    );
}
