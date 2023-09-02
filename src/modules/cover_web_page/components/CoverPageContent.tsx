//= React components
// Own
import { CVPage, Page, CVHeader } from '../../cv';
// Others
import Head from 'next/head';

export default function CoverPageContent() {
    return (
        <>
            <Head>
                <title>Alexandru Prisacariu | Cover</title>
            </Head>
            <CVPage id="CoverPage" pdfHref="/cover-web.pdf">
                <Page>
                    <CVHeader/>
                    <div className="flex flex-col gap-6">
                        <div>
                            As a programmer with over 7 years experience, I have worked on numerous projects ranging from desktop applications to
                            web applications and many CLI aps of different complexity and size.
                        </div>
                        <div>
                            I have worked in MERN stack for the last years developing from simple websites like real estate presentations
                            websites (like imocentral.ro or panoro.ro) to working on very complex applications like a CRM that is composed of
                            multiple modules interconnected and using microservices architecture for the backend.
                        </div>
                        <div>
                            Other than the MERN stack I have a deep knowledge of building/compiling tools like Webpack and Babel and also worked
                            a long time with Docker and Kubernetes. I'm capable of doing a project from the beginning to the end having a good
                            expertize in all the processes.
                        </div>
                        <div>
                            Right now I'm helping the current company I work for (Rubrikk) to optimize and squeeze out every drop of performance
                            from our NodeJS services. 
                        </div>
                        <div>
                            I'm confident that my skills developed over the years satisfy the job requirements and make me an excellent candidate
                            for the job.
                        </div>
                    </div>
                </Page>
            </CVPage>
        </>
    );
}
