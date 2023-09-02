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
                                <ExpertizeSection title="Expert (over 5 years):">JavaScript/ECMAScript (ES6), Typescript, C++17, HTML, CSS, SCSS</ExpertizeSection>
                                <ExpertizeSection title="Proficient (over 3 years):">SQL, Java</ExpertizeSection>
                                <ExpertizeSection title="Familiar with:">C#, Python, Rust, Go</ExpertizeSection>
                            </Subsection>
                            <Subsection title="Libraries & Frameworks">
                                <ExpertizeSection title="Expert (over 5 years):">Node.js, React, Express, Next.js, TailwindCSS, Qt</ExpertizeSection>
                            </Subsection>
                            <Subsection title="Tools & Platforms & Databases">
                                <ExpertizeSection title="Expert (over 5 years):">Git, Webpack, Babel, NGINX, Docker, Kubernetes, MongoDB</ExpertizeSection>
                                <ExpertizeSection title="Familiar with:">Stripe</ExpertizeSection>
                            </Subsection>
                            <Subsection title="OSs">
                                <div>Linux (Debian, Arch, Alpine), Unraid OS</div>
                            </Subsection>
                        </Section>
                        <Section title="Work">
                            <Subsection title="Senior Web Developer" company="Rubrikk Group AS">
                                <div className="text-accent font-semibold">2022 - Present</div>
                                <ul>
                                    <li className="list-disc list-inside">
                                        Worked on the{' '}
                                        <a href="https://www.laikado.es" target="_blank" rel="noreferrer noopener" className="underline">
                                            Laikado.es
                                        </a>, a spanish real estate and vehicles aggregator portal. My part was implementing the whole design,
                                        optimizing the backend (written in NodeJS) so we deliver excelent performance when visited by users and
                                        also by Google;
                                    </li>
                                    <li className="list-disc list-inside">
                                        Working on the company's portals, improving and maintaining them. Assuring that the performance of the
                                        websites are maximum in the Google's Lighthouse tool.
                                    </li>
                                </ul>
                            </Subsection>
                            <Subsection title="Freelancer">
                                <div className="text-accent font-semibold">2017 - Present</div>
                                <ul>
                                    <li className="list-disc list-inside">
                                        Working on{' '}
                                        <a href="https://beta.crm.panoro.ro" target="_blank" rel="noreferrer noopener" className="underline">
                                            PanoroCRM
                                        </a>
                                        , a CRM application created for real estate agencies with module for managing offers, publishing them to
                                        different portals, analytics, module for managing contacts and other modules. The application's backend
                                        is constructed as microservices for easy scaling when required;
                                    </li>
                                    <li className="list-disc list-inside">
                                        Created different web applications for real estate agencies providing complete solutions from backend
                                        and frontend to releasing and maintaining the applications like{' '}
                                        <a href="https://imocentral.ro" target="_blank" rel="noreferrer noopener" className="underline">
                                            imocentral.ro
                                        </a>{' '}
                                        and{' '}
                                        <a href="https://panoro.ro" target="_blank" rel="noreferrer noopener" className="underline">
                                            panoro.ro
                                        </a>
                                        .
                                    </li>
                                </ul>
                            </Subsection>
                        </Section>
                    </div>
                </Page>
                <Page>
                    <Section title="Education">
                        <Subsection title="Babeș-Bolyai University (UBB)">
                            <div className="text-accent font-semibold">2017-2019 // Cluj-Napoca, RO</div>
                            <div>Bachelor's Degree in Computer Science</div>
                        </Subsection>
                    </Section>
                    <Section title="Interests">
                        <div>Audio engineering, hiking, playing ukulele and electric guitar</div>
                    </Section>
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