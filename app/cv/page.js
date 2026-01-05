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
                            <ExpertiseSection title="Expert:">
                                JavaScript, Typescript, Go, HTML, CSS
                            </ExpertiseSection>
                            <ExpertiseSection title="Proficient:">
                                SQL, Java, Lua, PHP, C++
                            </ExpertiseSection>
                            <ExpertiseSection title="Familiar with:">
                                C#, Python, Rust
                            </ExpertiseSection>
                        </Subsection>
                        <Subsection title="Libraries & Frameworks">
                            <ExpertiseSection title="Expert:">
                                Node.js, React, Express, Next.js, TailwindCSS
                            </ExpertiseSection>
                            <ExpertiseSection title="Proficient:">
                                SolidJS, Qt, Laravel, Meteor, SFML
                            </ExpertiseSection>
                        </Subsection>
                        <Subsection title="Tools, Platforms & Data">
                            <ExpertiseSection title="Expert:">
                                Git, NGINX, Docker, Kubernetes, MongoDB
                            </ExpertiseSection>
                            <ExpertiseSection title="Proficient:">
                                Protobuf, ChatGPT API, Azure Pipelines, PostgreSQL,
                                Binance API
                            </ExpertiseSection>
                            <ExpertiseSection title="Familiar with:">
                                Microsoft SQL Server, GitLab CI/CD, Godot Engine
                            </ExpertiseSection>
                        </Subsection>
                    </Section>
                    <Section title="Work">
                        <Subsection
                            title="Principal Software Engineer (formerly Senior FullStack Developer)"
                            company="AirportLabs"
                        >
                            <div className="text-accent font-semibold">
                                2024 - Present
                            </div>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    Architected the transition of the main application from
                                    a multi-tenant modular monolith architecture to
                                    a partitioned multi-tenancy hub-and-spoke
                                    modular monolith architecture; developed custom
                                    inter-server communication protocols, cross-database user routing,
                                    and a centralized server management orchestration system;
                                </li>
                                <li className="list-disc! list-inside!">
                                    Engineered an extensible, version-controlled plugin framework from the ground up,
                                    enabling seamless third-party and internal integrations through a
                                    bespoke deployment and versioning pipeline.
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
                                    Developed a LLM-powered content generation tool using ChatGPT to automate
                                    portal copy; implemented custom validation logic for link integrity,
                                    character encoding, and region-specific currency formatting;
                                </li>
                                <li className="list-disc! list-inside!">
                                    Introduced a modular system architecture that facilitated parallel development
                                    across the engineering team, significantly reducing code complexity and
                                    technical debt by decoupling monolithic files into specialized modules.
                                </li>
                            </ul>
                        </Subsection>
                        <Subsection title="Freelancer">
                            <div className="text-accent font-semibold">
                                2017 - Present
                            </div>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    Developed{" "}
                                    <a
                                        href="https://alexprisacariu.dev/project/002_panorocrm"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="underline black"
                                    >
                                        PanoroCRM
                                    </a>
                                    , a comprehensive real estate CRM featuring automated multi-portal
                                    listing distribution, lead management, and advanced analytics.
                                    Architected the backend using a microservices-based approach to
                                    ensure high availability and horizontal scalability;
                                </li>
                            </ul>
                        </Subsection>
                    </Section>
                </div>
            </BasePage>
            <BasePage>
                <div className="flex flex-col gap-6">
                    <Section>
                        <Subsection>
                            <ul>
                                <li className="list-disc! list-inside!">
                                    Delivered end-to-end full-stack implementations for real estate agencies,
                                    translating complex UI/UX designs into high-performance web applications.
                                    Managed the full technical lifecycle, including backend architecture,
                                    frontend development, deployment, and ongoing maintenance for platforms
                                    including{" "}
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
                <div className="font-bold text-foreground-accent font-accent text-lg">
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
                {title ? title : ""}
                {company ? `  •  ${company}` : ""}
            </div>
            {children}
        </div>
    );
}

function ExpertiseSection({ className, title, children }) {
    return (
        <div>
            <span className={classNames("underline mr-2", className)}>
                {title}
            </span>
            <span>{children}</span>
        </div>
    );
}
