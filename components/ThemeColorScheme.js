"use client";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from "react";

import Button from "@/components/Button";

//= Assets
// Own
import MoonSVG from "@/components/icons/moon.svg";
import SunSVG from "@/components/icons/sun.svg";

const ThemeColorScheme = createContext(undefined);

function getThemeColorScheme() {
    const stored = localStorage.getItem("theme-color-scheme");
    if (stored) return stored;

    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
}

export function useThemeColorScheme() {
    const ctx = useContext(ThemeColorScheme);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}

export function ThemeColorSchemeProvider({ children }) {
    const [themeColorScheme, setThemeColorScheme] = useState("light");

    useEffect(() => {
        window.getThemeColorScheme = getThemeColorScheme;
        const themeColorScheme = getThemeColorScheme();
        setThemeColorScheme(themeColorScheme);
        document.documentElement.classList.toggle(
            "dark",
            themeColorScheme === "dark",
        );
    }, []);

    const toggleThemeColorScheme = useCallback(() => {
        const next = themeColorScheme === "dark" ? "light" : "dark";
        setThemeColorScheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme-color-scheme", next);
    }, [themeColorScheme]);

    return (
        <ThemeColorScheme.Provider
            value={{ themeColorScheme, toggleThemeColorScheme }}
        >
            {children}
        </ThemeColorScheme.Provider>
    );
}

export function ThemeColorSchemeToggleButton() {
    const { themeColorScheme, toggleThemeColorScheme } = useThemeColorScheme();

    return (
        <Button onClick={toggleThemeColorScheme}>
            {themeColorScheme === "dark" ? (
                <MoonSVG className="w-5 h-5" />
            ) : (
                <SunSVG className="w-5 h-5" />
            )}
        </Button>
    );
}
