# Theme Color Scheme

A robust light/dark mode management system for Next.js applications.

## Components

### `ThemeColorSchemeProvider`
The context provider that initializes and manages the theme state.
- **Initialization**: Checks `localStorage` for a saved preference. If none exists, it checks the system preference using `window.matchMedia('(prefers-color-scheme: dark)')`.
- **State Management**: Updates the `theme-color-scheme` in `localStorage` and toggles the `dark` class on `document.documentElement`.
- **Context**: Provides `themeColorScheme` ('light' or 'dark') and `toggleThemeColorScheme` function to the component tree.

### `ThemeColorSchemeToggleButton`
A ready-to-use button component that toggles the theme when clicked. It displays a Sun icon for light mode and a Moon icon for dark mode.

## Hooks

### `useThemeColorScheme`
A custom hook to consume the theme context.
- Returns: `{ themeColorScheme, toggleThemeColorScheme }`.
- Throws an error if used outside of `ThemeColorSchemeProvider`.

## Utilities

### `getThemeColorScheme`
A helper function to retrieve the current theme preference synchronously.
- Checks `localStorage` first.
- Falls back to system preference.

## Usage

1.  Wrap your application in `app/layout.js`:
    ```jsx
    import ThemeColorSchemeProvider from "@/components/theme_color_scheme/ThemeColorSchemeProvider";

    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            <ThemeColorSchemeProvider>
              {children}
            </ThemeColorSchemeProvider>
          </body>
        </html>
      );
    }
    ```

2.  Use the toggle button or the hook in your components:
    ```jsx
    import ThemeColorSchemeToggleButton from "@/components/theme_color_scheme/ThemeColorSchemeToggleButton";

    export default function Header() {
      return (
        <header>
          <ThemeColorSchemeToggleButton />
        </header>
      );
    }
    ```
