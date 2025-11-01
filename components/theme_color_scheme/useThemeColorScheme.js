// Methods
import { useContext } from "react";

// Constants
import ThemeColorScheme from "./ThemeColorScheme";

export default function useThemeColorScheme() {
    const ctx = useContext(ThemeColorScheme);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
