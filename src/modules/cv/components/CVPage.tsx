//= Functions
// Others
import { useRouter } from 'next/router';

//= Types & Enums & Consts
// Own
import { MailAddress, WebsiteAddress, GitHubAddress, GitLabAddress } from '../../general';

//= React components
// Own
import { MenuTagSimple, MenuTag } from '../../tags';

//= Assets
// Own
import MailSVG from '../../../icons/mail.svg';
import GitLabSVG from '../../../icons/gitlab.svg';
import GitHubSVG from '../../../icons/github.svg';
import GlobeSVG from '../../../icons/globe.svg';
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
                <div className="w-full lg:w-[210mm] lg:h-[297mm] print:w-[210mm] print:h-[297mm] p-6 lg:p-[1cm] print:p-[1cm] bg-white flex flex-col gap-8 shadow-lg print:bg-transparent print:shadow-none">
                    <div className="flex flex-col gap-3">
                        <div className="text-5xl font-bold font-accent text-blue-600">Alexandru Prisacariu</div>
                        <div className="flex gap-4 flex-col lg:flex-row print:flex-row">
                            <a className={HeadItemClasses} href={`mailto:${MailAddress}`}>
                                <MailSVG className="w-4 h-4" />
                                {MailAddress}
                            </a>
                            <a className={HeadItemClasses} href={WebsiteAddress}>
                                <GlobeSVG className="w-4 h-4" />
                                {WebsiteAddress}
                            </a>
                            <a className={HeadItemClasses} href={GitLabAddress}>
                                <GitLabSVG className="w-4 h-4" />
                                @AlexxanderX
                            </a>
                            <a className={HeadItemClasses} href={GitHubAddress}>
                                <GitHubSVG className="w-4 h-4" />
                                Aykelith
                            </a>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
    );
}
