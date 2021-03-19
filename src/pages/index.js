import Home from "../containers/Home";

export default function Index() {
    return (
        <Home>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center pt-10 text-5xl text-center">
                <h1>Alexandru Prisacariu</h1>
            </div>
            <div className="text-center">
                Some text will come here but not long but also not that short
            </div>
            <section id="projects">
                <h2>Projects</h2>
            </section>
        </Home>
    );
}
