//= Functions
// Others
import classNames from 'classnames';

//= React components
// Own
import { CVPage } from '../../cv';
// Others
import Head from 'next/head';

export default function CVPageContent() {
    return (
        <>
            <Head>
                <title>Alexandru Prisacariu | My resume</title>
            </Head>
            <CVPage id="CVPage" pdfHref="/resume.pdf">
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
                            CRM app created for real estate agencies with module for managing offers, publishing them to different portals,
                            analytics, module for managing contacts and other modules. The application is constructed as microservices for
                            easy scaling when required. Created everything but the design.
                        </Subsection>
                        <Subsection title="imocentral.ro">
                            Real estate website optimized for speed and for Googlebot. Having SSR, ISR and a Progressive Web App. Created
                            everything but the design.
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
