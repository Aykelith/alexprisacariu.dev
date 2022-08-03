//= Functions
// Others
import classNames from 'classnames';
import { useRouter } from 'next/router';

//= Types & Enums & Consts
// Own
import { MailAddress, WebsiteAddress, GitHubAddress, GitLabAddress } from '../../general';

//= React components
// Own
import { MenuTagSimple, MenuTag } from '../../tags';
// Others
import Head from 'next/head';

//= Assets
// Own
import MailSVG from '../../../icons/mail.svg';
import GitLabSVG from '../../../icons/gitlab.svg';
import GitHubSVG from '../../../icons/github.svg';
import GlobeSVG from '../../../icons/globe.svg';
import PrintSVG from '../../../icons/print.svg';
import PDFSVG from '../../../icons/pdf.svg';

const HeadItemClasses = 'text-black flex gap-1 items-center';

export default function CVPage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Alexandru Prisacariu | My resume</title>
            </Head>
            <div id="CVPage" className="flex flex-col items-center py-3 gap-3 bg-gray-300 print:bg-transparent print:block print:py-0">
                <div className="px-2 lg:px-0 print:px-0 print:hidden w-full lg:w-[210mm] print:w-[210mm] flex justify-between">
                    <MenuTagSimple onClick={() => router.back()}>{'<'} Go back</MenuTagSimple>
                    <div className="flex gap-2">
                        <MenuTag href="/resume.pdf" className="flex gap-1 items-center">
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
                    <div className="flex flex-col gap-6">
                        <Section title="Skills">
                            <Subsection title="Programming Languages">
                                <div>Typescript, JavaScript (ES6), C++17, SQL, Python, Java, Rust</div>
                            </Subsection>
                            <Subsection title="Libraries & Frameworks">
                                <div>Node.js, React, Express, Next.js, TailwindCSS, Qt</div>
                            </Subsection>
                            <Subsection title="Tools & Platforms & Databases">
                                <div>Git, MongoDB, Redis, Webpack, Babel, NGINX, Docker, Kubernetes, Stripe</div>
                            </Subsection>
                            <Subsection title="OSs">
                                <div>Linux (Debian, Arch, Alpine), Unraid OS</div>
                            </Subsection>
                        </Section>
                        <Section title="Interesting projects">
                            <Subsection title="PanoroCRM">
                                CRM app created for real estate agencies with module for managing offers, publishing them to different
                                portals, analytics, module for managing contacts and other modules. The application is constructed as
                                microservices for easy scaling when required. Created everything but the design.
                            </Subsection>
                            <Subsection title="imocentral.ro">
                                Real estate website optimized for speed and for Googlebot. Having SSR, ISR and a Progressive Web App.
                                Created everything but the design.
                            </Subsection>
                        </Section>
                        <Section title="Education">
                            <Subsection title="Babeș-Bolyai University (UBB)">
                                <div className="text-accent font-semibold">2017-2019 // Cluj-Napoca, RO</div>
                                <div>Bachelor's Degree in Computer Science</div>
                            </Subsection>
                        </Section>
                        <Section title="Interests">
                            <div>Audio engineering, hiking, playing ukulele and electric guitar</div>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}

type SectionProps = React.PropsWithChildren<{
    title: string;
    className?: string;
}>;

function Section({ className, title, children }: SectionProps) {
    return (
        <div className={classNames('flex flex-col gap-2', className)}>
            <div className="font-bold text-blue-600 font-accent text-lg">{title}</div>
            {children}
        </div>
    );
}

type SubsectionProps = React.PropsWithChildren<{
    title: string;
    className?: string;
}>;

function Subsection({ className, title, children }: SubsectionProps) {
    return (
        <div className={classNames('flex flex-col', className)}>
            <div className="font-bold">{title}</div>
            {children}
        </div>
    );
}
