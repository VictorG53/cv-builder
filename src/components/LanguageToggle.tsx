import type { Lang } from "../types";

export function LanguageToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            title="Changer la langue / Switch language"
            className="flex items-center justify-center h-10 w-10 rounded border border-gray-300 dark:border-gray-600 text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white cursor-pointer"
        >
            {lang === "fr" ? "EN" : "FR"}
        </button>
    );
}
