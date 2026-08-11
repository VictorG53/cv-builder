import { useEffect, useState } from "react";
import { pdf, type DocumentProps } from "@react-pdf/renderer";
import type { ReactElement } from "react";

// Counts "/Type /Page" object markers in the raw PDF bytes (excluding "/Pages"),
// avoiding a heavier dependency like pdf.js just to get a page count.
function countPages(text: string) {
    const matches = text.match(/\/Type\s*\/Page(?!s)/g);
    return matches ? matches.length : 0;
}

export function usePageCount(document: ReactElement<DocumentProps>) {
    const [pageCount, setPageCount] = useState<number | null>(null);

    useEffect(() => {
        let cancelled = false;

        pdf(document)
            .toBlob()
            .then((blob) => blob.text())
            .then((text) => {
                if (!cancelled) setPageCount(countPages(text));
            })
            .catch(() => {
                if (!cancelled) setPageCount(null);
            });

        return () => {
            cancelled = true;
        };
    }, [document]);

    return pageCount;
}
