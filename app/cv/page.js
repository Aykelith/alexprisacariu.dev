//= Functions
// Others
import classNames from "clsx";

//= React components
// Own
import CVPage from "./CVPage";
import BasePage from "./BasePage";
import CVHeader from "./CVHeader";

export const metadata = {
    title: "Alexandru Prisacariu | My resume",
    description: "The CV page of Alexandru Prisacariu",
};

export default function CVPageContent() {
    return (
        <CVPage id="CVPage" pdfHref="/resume.pdf">
            <BasePage>
                <CVHeader />
                <div className="flex flex-col gap-6">
                    <Section title="Skills">
                        <Subsection title="Programming Languages">
                            <ExpertizeSection title="Expert:">
                                JavaScript, Typescript, C++, HTML, CSS
                            </ExpertizeSection>
                            <ExpertizeSection title="Proficient:">
                                Go, SQL, Java, Lua, PHP
                            </ExpertizeSection>
                            <ExpertizeSection title="Familiar with:">
                                C#, Python, Rust
                            </ExpertizeSection>
                        </Subsection>
                        <Subsection title="Libraries & Frameworks">
                            <ExpertizeSection title="Expert:">
                                Node.js, React, Express, Next.js, TailwindCSS
                            </ExpertizeSection>
                            <ExpertizeSection title="Proficient:">
                                SolidJS, Qt, Laravel, Meteor, SFML
                            </ExpertizeSection>
                        </Subsection>
                        <Subsection title="Tools & Platforms & Databases">
                            <ExpertizeSection title="Expert:">
                                Git, NGINX, Docker, Kubernetes, MongoDB
                            </ExpertizeSection>
                            <ExpertizeSection title="Proficient:">
                                ChatGPT API, Azure Pipelines, PostgreSQL,
                                Binance API
                            </ExpertizeSection>
                            <ExpertizeSection title="Familiar with:">
                                Microsoft SQL Server, GitLab CI/CD, Godot Engine
                            </ExpertizeSection>
                        </Subsection>
                        <Subsection title="OSs">
                            <ExpertizeSection title="Proficient:">
                                Linux (Debian/Ubuntu, RedHat), Windows
                            </ExpertizeSection>
                        </Subsection>
                    </Section>
                    <Section title="Work">
                        <Subsection
                            title="Senior FullStack Developer"
                            company="AirportLabs"
                        >
                            <div className="text-accent font-semibold">
                                2024 - Present
                            </div>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    Working on porting the main application from
                                    a multi-tenant to single-tenant with a
                                    centralized control plane. It involved
                                    creating from scratch a system for
                                    communicating between servers, the ability
                                    for users to switch between servers and
                                    databases, handling sync issues and managing
                                    all the servers from a central server;
                                </li>
                                <li className="list-disc! list-inside!">
                                    Working on adding a plugins system to the
                                    main application where the company and the
                                    clients could create plugins that would be
                                    integrated into the application. It involves
                                    creating from scratch the plugin framework,
                                    the integration into the application and
                                    constructing a deploying framework where
                                    each plugin is versioned and can be deployed
                                    to the application.
                                </li>
                            </ul>
                        </Subsection>
                        <Subsection
                            title="Senior FullStack Developer"
                            company="Rubrikk Group AS"
                        >
                            <div className="text-accent font-semibold">
                                2022 - 2024
                            </div>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    I created an application that worked with
                                    ChatGPT to generate texts for various
                                    sections of the portals. It had the
                                    capability to check for dead links, bad
                                    characters, and also to format currencies
                                    that ChatGPT would not format according to
                                    our instructions;
                                </li>
                                <li className="list-disc! list-inside!">
                                    Implemented a complex module system into the
                                    project, making it easier for the whole team
                                    to add new features and work on them in
                                    parallel; also reduced the complexity and
                                    clutter of some files because code was moved
                                    to their own modules;
                                </li>
                            </ul>
                        </Subsection>
                    </Section>
                </div>
            </BasePage>
            <BasePage>
                <div className="flex flex-col gap-6">
                    <Section>
                        <Subsection title="Freelancer">
                            <div className="text-accent font-semibold">
                                2017 - Present
                            </div>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    Created{" "}
                                    <a
                                        href="https://alexprisacariu.dev/project/002_panorocrm"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline black"
                                    >
                                        PanoroCRM
                                    </a>
                                    , a CRM application created for real estate
                                    agencies with modules for managing offers,
                                    publishing them to different portals,
                                    analytics, module for managing contacts, and
                                    other modules. The application's backend is
                                    constructed as microservices for easy
                                    scaling when required;
                                </li>
                                <li className="list-disc! list-inside!">
                                    Created different web applications for real
                                    estate agenciesm, providing complete
                                    solutions from backend and frontend to
                                    releasing and maintaining applications like{" "}
                                    <a
                                        href="https://alexprisacariu.dev/project/001_imocentral.ro"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline black"
                                    >
                                        imocentral.ro
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="https://alexprisacariu.dev/project/003_panoro.ro"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline black"
                                    >
                                        panoro.ro
                                    </a>
                                    .
                                </li>
                            </ul>
                        </Subsection>
                    </Section>
                    <Section title="Education">
                        <Subsection title="Babeș-Bolyai University (UBB)">
                            <div className="text-accent font-semibold">
                                2016-2019 // Cluj-Napoca, RO
                            </div>
                            <div>Bachelor's Degree in Computer Science</div>
                        </Subsection>
                    </Section>
                </div>
            </BasePage>
        </CVPage>
    );
}

function Section({ className, title, children }) {
    return (
        <div className={classNames("flex flex-col gap-2", className)}>
            {title !== null && (
                <div className="font-bold text-blue-600 font-accent text-lg">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
}

function Subsection({ className, title, company, children }) {
    return (
        <div className={classNames("flex flex-col", className)}>
            <div className="font-bold">
                {title}
                {company ? `  •  ${company}` : ""}
            </div>
            {children}
        </div>
    );
}

function ExpertizeSection({ className, title, children }) {
    return (
        <div>
            <span className={classNames("underline mr-2", className)}>
                {title}
            </span>
            <span>{children}</span>
        </div>
    );
}
