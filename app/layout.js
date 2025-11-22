import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { ProgressBar } from "@/components/progress_bar";
import { ThemeColorSchemeProvider } from "@/components/theme_color_scheme";
import { Footer } from "@/components/footer";
import { ModalsSystem } from "@/components/modals_system";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script id="load-theme">{`
                (function() {
                                function getInitialTheme() {
                                  const stored = localStorage.getItem("theme-color-scheme");
                                  if (stored) {
                                    return stored;
                                  }
                                  const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
                                  if (userMedia.matches) {
                                    return 'dark';
                                  }
                                  return 'light';
                                }
                                const theme = getInitialTheme();
                                if (theme === 'dark') {
                                  document.documentElement.classList.add('dark');
                                } else {
                                  document.documentElement.classList.remove('dark');
                                }
                              })();
            `}</script>
      </head>
      <body className={`${lato.variable} ${roboto.variable} antialiased`}>
        <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 inset-0 z-9999">
          <ThemeColorSchemeProvider>
            <header className="print:hidden sticky top-0 flex h-16 items-center gap-4 bg-background z-50 box">
              <Nav />
            </header>
            {children}
            <Footer className="print:hidden" />
            <ModalsSystem />
          </ThemeColorSchemeProvider>
        </ProgressBar>
      </body>
    </html>
  );
}
