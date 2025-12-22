# Progress Bar

Inspired by [Global Progress with Next.js](https://github.com/builduilabs/2024-03-14-global-progress-with-nextjs).

This directory contains a custom implementation of a global progress bar for Next.js App Router, handling both link navigation and browser history events (back/forward).

## Components

### `ProgressBar`
The main container component that should be placed in the root layout. It:
- Provides the `ProgressBarContext`.
- Renders the `GlobalProgressForBrowserNavigation` component.
- Renders the actual visual progress bar using `motion.div`.
- Handles the exit animation using `AnimatePresence`.

### `ProgressBarLink`
A wrapper around the standard Next.js `Link` component. It:
- Triggers the progress bar start animation on click.
- Uses `React.startTransition` to handle the navigation, ensuring the progress bar completes when the new route is ready.
- Randomizes the bar color on each click.

### `GlobalProgressForBrowserNavigation`
A component that listens to the `popstate` event (browser back/forward buttons) to trigger the progress bar animation during history navigation.

## Hooks

### `useProgress`
The core logic hook that manages the progress state and value.
- Uses `framer-motion`'s `useSpring` for smooth physics-based animation.
- Manages states: `initial`, `in-progress`, `completing`, `complete`.
- `start()`: Sets state to `in-progress` and increments the value randomly.
- `done()`: Sets state to `completing`, forcing the value to 100%.
- `reset()`: Resets state to `initial` after animation completes.

### `useProgressBar`
A simple hook to consume the `ProgressBarContext`.

## How It Works

1.  **Initialization**: The `ProgressBar` component wraps the application and provides the progress context.
2.  **Navigation Start**:
    - When a `ProgressBarLink` is clicked, it calls `progress.start()`.
    - The bar appears and starts animating towards 99% using a spring simulation.
    - `startTransition` is used to wrap the router push, which tells React to prioritize the update.
3.  **Navigation End**:
    - When the route change completes (the transition finishes), `progress.done()` is called.
    - The bar animates to 100%.
4.  **Cleanup**:
    - `AnimatePresence` detects the completion and unmounts the bar.
    - The `onExitComplete` callback triggers `progress.reset()`, preparing it for the next navigation.

## Usage

1.  Wrap your application in the `ProgressBar` component in `app/layout.js`:
    ```jsx
    import ProgressBar from "@/components/progress_bar/ProgressBar";

    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            <ProgressBar className="fixed top-0 h-1 z-50 w-full">
              {children}
            </ProgressBar>
          </body>
        </html>
      );
    }
    ```

2.  Use `ProgressBarLink` instead of `Link` for internal navigation:
    ```jsx
    import ProgressBarLink from "@/components/progress_bar/ProgressBarLink";

    <ProgressBarLink href="/about">About</ProgressBarLink>
    ```
