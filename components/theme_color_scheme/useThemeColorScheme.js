// Methods
import { useContext } from "react";

// Constants
import ThemeColorScheme from "./ThemeColorScheme";

/**
 * The use theme color scheme hook
 * 
 * @returns {Object} the use theme color scheme hook
 */
export default function useThemeColorScheme() {
    const ctx = useContext(ThemeColorScheme);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
