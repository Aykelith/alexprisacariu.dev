// Methods
import useThemeColorScheme from "./useThemeColorScheme";

// Components
import Button from "@/components/Button";

// Assets
import MoonSVG from "@/components/icons/moon.svg";
import SunSVG from "@/components/icons/sun.svg";

/**
 * The theme color scheme toggle button
 * 
 * @returns {JSX.Element} the theme color scheme toggle button
 */
export default function ThemeColorSchemeToggleButton() {
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
