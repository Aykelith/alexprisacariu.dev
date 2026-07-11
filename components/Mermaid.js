"use client";

// Methods
import { useEffect, useId, useRef } from "react";
import useThemeColorScheme from "@/components/theme_color_scheme/useThemeColorScheme";

/**
 * Renders a Mermaid diagram from a chart definition string
 *
 * @param {Object} props - the props of the component
 * @param {string} props.chart - the mermaid diagram definition
 * @returns {JSX.Element} the mermaid component
 */
export default function Mermaid({ chart }) {
  const containerRef = useRef(null);
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const { themeColorScheme } = useThemeColorScheme();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        theme: themeColorScheme === "dark" ? "dark" : "default",
        htmlLabels: false,
        flowchart: { htmlLabels: false },
      });

      const { svg } = await mermaid.render(`mermaid-${id}`, chart);
      if (!cancelled && containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id, themeColorScheme]);

  return <div className="mermaid-diagram my-6" ref={containerRef} />;
}
