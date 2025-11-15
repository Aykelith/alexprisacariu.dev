import { visit } from "unist-util-visit";

export function transformerLineNumbers() {
    return {
        name: "line-numbers",
        root(node) {
            visit(node, "element", (n) => {
                if (n.tagName === "pre" && n.children?.length) {
                    n.properties = n.properties || {};
                    n.properties.className = [
                        ...(n.properties.className || []),
                        "shiki-pre",
                    ];

                    const codeNode = n.children.find(
                        (c) => c.tagName === "code",
                    );

                    if (codeNode?.children) {
                        codeNode.children = codeNode.children.map((line, i) => {
                            // If Shiki already wrapped the line
                            if (
                                line.type === "element" &&
                                line.properties?.className?.includes("line")
                            ) {
                                line.properties["data-line-number"] = i + 1;
                                return line; // don't wrap again
                            }

                            // Otherwise wrap it
                            return {
                                type: "element",
                                tagName: "span",
                                properties: {
                                    className: ["line"],
                                    "data-line-number": i + 1,
                                },
                                children: [line],
                            };
                        });
                    }
                }
            });
        },
    };
}

export function transformerAutoLink() {
    return {
        name: "autolink",
        root(node) {
            visit(node, "text", (t) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                if (!urlRegex.test(t.value)) return;

                const parts = t.value.split(urlRegex);
                const newNodes = parts.map((part) =>
                    urlRegex.test(part)
                        ? {
                              type: "element",
                              tagName: "a",
                              properties: { href: part, target: "_blank" },
                              children: [{ type: "text", value: part }],
                          }
                        : { type: "text", value: part },
                );

                Object.assign(t, {
                    type: "element",
                    tagName: "span",
                    children: newNodes,
                });
            });
        },
    };
}
