import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { ui } from "../i18n/ui";
import type { Lang } from "../types";

type LangContextValue = {
    lang: Lang;
    t: typeof ui.fr;
    toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useLocalStorage<Lang>("cv-builder-lang", "fr");

    const value: LangContextValue = {
        lang,
        t: ui[lang],
        toggle: () => setLang(lang === "fr" ? "en" : "fr"),
    };

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within a LangProvider");
    return ctx;
}
