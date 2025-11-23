# Modals System

A global, event-driven modal management system. It allows opening modals from anywhere in the application (even outside React components) using standard JavaScript functions.

## Components

### `ModalsSystem`
The container component that renders all active modals.
- Should be placed once in the root layout (e.g., `app/layout.js`).
- Listens for `xal-ui-modals-system` events to mount/unmount modals.
- Manages the stack of open modal IDs.
- Renders each modal wrapped in a `Background` component.

## Methods

### `openModal(options)`
Opens a new modal.
- **options**: Object containing configuration:
    - `id` (optional): Custom ID. If not provided, one is generated.
    - `renderModal`: Function returning the JSX to render. Receives `onClose` as an argument.
    - `allowCloseFromBackground`: Boolean.
    - `backgroundProps`: Props passed to the `Background` component.
- **Returns**: The `id` of the opened modal.

### `closeModal(id)`
Closes the modal with the specified ID.

### `waitForModal(id)`
Returns a Promise that resolves when the specified modal is closed. Useful for awaiting user action in a modal.

## Architecture

The system uses a custom `Event` (`ModalsSystemEvent`) dispatched on the `window` object to communicate between the imperative API (`openModal`, `closeModal`) and the declarative React component (`ModalsSystem`).

- **Storage**: Modal options are stored in a global window variable (`window.xal_modals_storage`) to be accessible by the `ModalsSystem` component when it renders.
- **Events**:
    - `OPEN`: Triggers `ModalsSystem` to add the ID to its state.
    - `CLOSE`: Triggers `ModalsSystem` to remove the ID.

## Usage

1.  Add `ModalsSystem` to your layout:
    ```jsx
    import ModalsSystem from "@/components/modals_system/ModalsSystem";

    export default function RootLayout({ children }) {
      return (
        <html>
          <body>
            {children}
            <ModalsSystem className="z-50" />
          </body>
        </html>
      );
    }
    ```

2.  Open a modal from anywhere:
    ```jsx
    import { openModal } from "@/components/modals_system/methods";

    function handleOpen() {
      openModal({
        renderModal: (onClose) => (
          <div className="bg-white p-4 rounded">
            <h1>Hello World</h1>
            <button onClick={onClose}>Close</button>
          </div>
        ),
        allowCloseFromBackground: true,
      });
    }
    ```
