import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="flex items-center justify-center h-10 w-10 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white cursor-pointer"
            title="Toggle theme"
        >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
