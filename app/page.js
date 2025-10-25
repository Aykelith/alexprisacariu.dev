export default function Home() {
    return (
        <div id="HomePage" className="page">
            <div className="box">
                <div className="flex flex-col font-normal">
                    <main className="flex flex-col space-y-8">
                        <h1>
                            Hello. Prisacariu Alexandru providing performant
                            solutions to your needs
                        </h1>
                        <div className="">A developer from Romania.</div>
                    </main>
                </div>
                <div>
                    <h2>Projects showcase</h2>
                </div>
            </div>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!-- Website inspired by https://swajp.me/ -->`,
                }}
            ></span>
        </div>
    );
}
