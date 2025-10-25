import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { ProgressBar } from "@/components/ProgressBar";

const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: "700",
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Alexandru Priscariu: The Website",
    description: "Place where Alexandru Prisacariu post things",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${lato.variable} ${roboto.variable} antialiased`}>
                <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 inset-0 z-9999">
                    <header className="print:hidden sticky top-0 flex h-16 items-center gap-4 bg-background mx-auto w-full max-w-screen-xl px-6 md:px-20 z-50">
                        <Nav />
                    </header>
                    {children}
                </ProgressBar>
            </body>
        </html>
    );
}
