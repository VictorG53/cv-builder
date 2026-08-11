import { Plus, X } from "lucide-react";
import { Field } from "./Field";
import { useLang } from "../hooks/useLang";
import type { Diploma } from "../types";

type Props = {
    diplomas: Diploma[];
    onChange: (diplomas: Diploma[]) => void;
};

export function DiplomasSection({ diplomas, onChange }: Props) {
    const { t } = useLang();

    function update(i: number, patch: Partial<Diploma>) {
        onChange(diplomas.map((d, idx) => (idx === i ? { ...d, ...patch } : d)));
    }

    function remove(i: number) {
        onChange(diplomas.filter((_, idx) => idx !== i));
    }

    function add() {
        onChange([...diplomas, { title: "", years: "", school: "" }]);
    }

    return (
        <div className="space-y-4">
            {diplomas.map((d, i) => (
                <div key={i} className="rounded border border-gray-200 dark:border-gray-700 p-3 space-y-2 relative">
                    <button
                        type="button"
                        onClick={() => remove(i)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                        <X size={14} />
                    </button>
                    <Field
                        label={t.diplomas.title}
                        value={d.title}
                        onChange={(v) => update(i, { title: v })}
                        placeholder={t.diplomas.titlePlaceholder}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Field
                            label={t.diplomas.years}
                            value={d.years}
                            onChange={(v) => update(i, { years: v })}
                            placeholder={t.diplomas.yearsPlaceholder}
                        />
                        <Field
                            label={t.diplomas.school}
                            value={d.school}
                            onChange={(v) => update(i, { school: v })}
                            placeholder={t.diplomas.schoolPlaceholder}
                        />
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={add}
                className="flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white"
            >
                <Plus size={16} /> {t.diplomas.add}
            </button>
        </div>
    );
}
