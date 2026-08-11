import type { ReactElement } from "react";
import { usePDF, type DocumentProps } from "@react-pdf/renderer";

// The browser's native PDF viewer (used inside the iframe) defaults to a
// zoom level that's too large for a compact preview panel, and PDF Open
// Parameters like #zoom= are honored inconsistently across browsers. A CSS
// scale on the iframe itself is a reliable, cross-browser way to zoom out:
// we render the iframe larger than its container and shrink it visually.
export function PdfFrame({
    document,
    scale = 0.6,
}: {
    document: ReactElement<DocumentProps>;
    scale?: number;
}) {
    const [instance] = usePDF({ document });
    const src = instance.url ? `${instance.url}#toolbar=0` : undefined;

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                boxSizing: "border-box",
                padding: 16,
            }}
        >
            <iframe
                src={src}
                title="CV preview"
                style={{
                    width: `${100 / scale}%`,
                    height: `${100 / scale}%`,
                    border: "none",
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                }}
            />
        </div>
    );
}
