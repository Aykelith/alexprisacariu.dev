"use client";

// Methods
import { useState, useCallback, useEffect } from "react";
import getThemeColorScheme from "./getThemeColorScheme";

// Constants
import ThemeColorScheme from "./ThemeColorScheme";

/**
 * The theme color scheme provider
 * 
 * @param {Object} props - the props of the component
 * @param {JSX.Element} props.children - the children of the component
 * @returns {JSX.Element} the theme color scheme provider
 */
export default function ThemeColorSchemeProvider({ children }) {
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
