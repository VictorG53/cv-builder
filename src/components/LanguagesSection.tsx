import { Plus, X } from "lucide-react";
import { Field } from "./Field";
import { useLang } from "../hooks/useLang";
import type { Language } from "../types";

type Props = {
    languages: Language[];
    onChange: (languages: Language[]) => void;
};

export function LanguagesSection({ languages, onChange }: Props) {
    const { t } = useLang();

    function update(i: number, patch: Partial<Language>) {
        onChange(
            languages.map((l, idx) => (idx === i ? { ...l, ...patch } : l))
        );
    }

    function remove(i: number) {
        onChange(languages.filter((_, idx) => idx !== i));
    }

    function add() {
        onChange([...languages, { name: "", level: "" }]);
    }

    return (
        <div className="space-y-3">
            {languages.map((l, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="flex-1">
                        <Field
                            label={t.languages.name}
                            value={l.name}
                            onChange={(v) => update(i, { name: v })}
                            placeholder={t.languages.namePlaceholder}
                        />
                    </div>
                    <div className="flex-1">
                        <Field
                            label={t.languages.level}
                            value={l.level}
                            onChange={(v) => update(i, { level: v })}
                            placeholder={t.languages.levelPlaceholder}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => remove(i)}
                        className="text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                        <X size={14} />
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={add}
                className="flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white"
            >
                <Plus size={16} /> {t.languages.add}
            </button>
        </div>
    );
}
