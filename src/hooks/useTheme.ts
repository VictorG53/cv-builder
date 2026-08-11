import { useEffect, useState } from "react";

export function useTheme() {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");

        // Safari can leave the html/body background painted with the old
        // theme's color (stale compositor layer) after a transform-animated
        // overlay (like the mobile PDF sheet) is opened/closed on top of it.
        // Setting it inline forces an immediate repaint instead of relying
        // on the .dark class rule alone.
        const bg = dark ? "#111827" : "#ffffff";
        document.documentElement.style.backgroundColor = bg;
        document.body.style.backgroundColor = bg;

        // Safari also tints its own chrome (status bar / dynamic island area,
        // address bar, bottom toolbar) from the theme-color meta tag, but it
        // doesn't reliably re-read the tag just because its `content`
        // attribute changed. Removing and re-inserting the element forces
        // Safari to pick up the new color immediately.
        document
            .querySelectorAll("meta[name='theme-color']")
            .forEach((el) => el.remove());
        const themeColorMeta = document.createElement("meta");
        themeColorMeta.name = "theme-color";
        themeColorMeta.content = bg;
        document.head.appendChild(themeColorMeta);

        // Nudge Safari into re-evaluating chrome color: it's largely tied to
        // navigation events and often ignores runtime meta tag changes
        // otherwise (a known iOS limitation, not fully fixable from JS).
        history.replaceState(null, "", location.href);

        // Also nudge via a scroll event, since Safari's chrome-tint heuristic
        // appears to re-sample on scroll and can get stuck after the mobile
        // preview sheet's fixed/transform overlay changes the scroll context.
        window.scrollTo(0, 1);
        requestAnimationFrame(() => window.scrollTo(0, 0));

        const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
        if (favicon) {
            favicon.href = dark ? "/favicon-dark.svg" : "/favicon-light.svg";
        }
    }, [dark]);

    return { dark, toggle: () => setDark((d) => !d) };
}
