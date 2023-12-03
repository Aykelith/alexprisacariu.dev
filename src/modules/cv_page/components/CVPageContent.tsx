//= Functions
// Others
import classNames from 'classnames';

//= React components
// Own
import { CVPage, Page, CVHeader } from '../../cv';
// Others
import Head from 'next/head';

export default function CVPageContent() {
    return (
        <>
            <Head>
                <title>Alexandru Prisacariu | My resume</title>
            </Head>
            <CVPage id="CVPage" pdfHref="/resume.pdf">
                <Page>
                    <CVHeader/>
                    <div className="flex flex-col gap-6">
                        <Section title="Skills">
                            <Subsection title="Programming Languages">
                                <ExpertizeSection title="Expert:">JavaScript, Typescript, C++, HTML, CSS</ExpertizeSection>
                                <ExpertizeSection title="Proficient:">Go, SQL, Java, Lua</ExpertizeSection>
                                <ExpertizeSection title="Familiar with:">C#, Python, Rust</ExpertizeSection>
                            </Subsection>
                            <Subsection title="Libraries & Frameworks">
                                <ExpertizeSection title="Expert:">Node.js, React, Express, Next.js, TailwindCSS, Qt</ExpertizeSection>
                                <ExpertizeSection title="Proficient:">SolidJS</ExpertizeSection>
                            </Subsection>
                            <Subsection title="Tools & Platforms & Databases">
                                <ExpertizeSection title="Expert:">Git, Webpack, Babel, NGINX, Docker, Kubernetes, MongoDB</ExpertizeSection>
                                <ExpertizeSection title="Proficient:">Azure Pipelines</ExpertizeSection>
                            </Subsection>
                            <Subsection title="OSs">
                                <ExpertizeSection title="Proficient:">Linux, Windows</ExpertizeSection>
                            </Subsection>
                        </Section>
                        <Section title="Work">
                            <Subsection title="Senior Web Developer" company="Rubrikk Group AS">
                                <div className="text-accent font-semibold">2022 - Present</div>
                                <ul>
                                    <li className="list-disc list-inside">
                                        Implemented a complex module system into the project, making it easier for the whole team to add new features
                                        and work on them in parallel; also reduced the complexity and clutter of some files because code was moved to their
                                        own modules;
                                    </li>
                                    <li className="list-disc list-inside">
                                        Working on the company's portals: adding new features and maintaining them. Assuring that the performance of the
                                        websites is maximized in Google's Lighthouse tool.
                                    </li>
                                </ul>
                            </Subsection>
                            <Subsection title="Freelancer">
                                <div className="text-accent font-semibold">2017 - Present</div>
                                <ul>
                                    <li className="list-disc list-inside">
                                        Created {' '}
                                        <a href="https://alexprisacariu.dev/project/002_panorocrm" target="_blank" rel="noreferrer noopener" className="underline">
                                            PanoroCRM
                                        </a>
                                        , a CRM application created for real estate agencies with modules for managing offers, publishing them to
                                        different portals, analytics, module for managing contacts, and other modules. The application's backend
                                        is constructed as microservices for easy scaling when required;
                                    </li>
                                    <li className="list-disc list-inside">
                                        Created different web applications for real estate agenciesm, providing complete solutions from backend
                                        and frontend to releasing and maintaining applications like{' '}
                                        <a href="https://alexprisacariu.dev/project/001_imocentral.ro" target="_blank" rel="noreferrer noopener" className="underline">
                                            imocentral.ro
                                        </a>{' '}
                                        and{' '}
                                        <a href="https://alexprisacariu.dev/project/003_panoro.ro" target="_blank" rel="noreferrer noopener" className="underline">
                                            panoro.ro
                                        </a>
                                        .
                                    </li>
                                </ul>
                            </Subsection>
                        </Section>
                        <Section title="Education">
                            <Subsection title="Babeș-Bolyai University (UBB)">
                                <div className="text-accent font-semibold">2017-2019 // Cluj-Napoca, RO</div>
                                <div>Bachelor's Degree in Computer Science</div>
                            </Subsection>
                        </Section>
                    </div>
                </Page>
            </CVPage>
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
    company?: string;
    className?: string;
}>;

function Subsection({ className, title, company, children }: SubsectionProps) {
    return (
        <div className={classNames('flex flex-col', className)}>
            <div className="font-bold">
                {title}
                {company ? `  •  ${company}` : ''}
            </div>
            {children}
        </div>
    );
}

type ExpertizeSection = React.PropsWithChildren<{
    title: string;
    className?: string;
}>;

function ExpertizeSection({ className, title, children }: SectionProps) {
    return (
        <div>
            <span className={classNames("underline mr-2", className)}>{title}</span>
            <span>{children}</span>
        </div>
    );
}
