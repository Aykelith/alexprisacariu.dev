export default function getThemeColorScheme() {
    const stored = localStorage.getItem("theme-color-scheme");
    if (stored) return stored;

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
}
