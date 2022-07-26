//= Functions & Modules
// Others
import { useState } from "react";

export function useConstructor(callback = () => {}) {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callback();
    setHasBeenCalled(true);
}
