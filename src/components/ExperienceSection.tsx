import { Plus, X } from "lucide-react";
import { Field } from "./Field";
import { useLang } from "../hooks/useLang";
import type { Experience } from "../types";

type Props = {
    experience: Experience[];
    onChange: (experience: Experience[]) => void;
};

export function ExperienceSection({ experience, onChange }: Props) {
    const { t } = useLang();

    function update(i: number, patch: Partial<Experience>) {
        onChange(
            experience.map((e, idx) => (idx === i ? { ...e, ...patch } : e))
        );
    }

    function remove(i: number) {
        onChange(experience.filter((_, idx) => idx !== i));
    }

    function add() {
        onChange([
            ...experience,
            { company: "", period: "", role: "", city: "", description: [] },
        ]);
    }

    function updateMission(i: number, j: number, value: string) {
        const description = experience[i].description.map((line, idx) =>
            idx === j ? value : line
        );
        update(i, { description });
    }

    function addMission(i: number) {
        update(i, { description: [...experience[i].description, ""] });
    }

    function removeMission(i: number, j: number) {
        update(i, {
            description: experience[i].description.filter((_, idx) => idx !== j),
        });
    }

    return (
        <div className="space-y-4">
            {experience.map((e, i) => (
                <div key={i} className="rounded border border-gray-200 dark:border-gray-700 p-3 space-y-2 relative">
                    <button
                        type="button"
                        onClick={() => remove(i)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                        <X size={14} />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Field
                            label={t.experience.company}
                            value={e.company}
                            onChange={(v) => update(i, { company: v })}
                            placeholder={t.experience.companyPlaceholder}
                        />
                        <Field
                            label={t.experience.city}
                            value={e.city}
                            onChange={(v) => update(i, { city: v })}
                            placeholder={t.experience.cityPlaceholder}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Field
                            label={t.experience.role}
                            value={e.role}
                            onChange={(v) => update(i, { role: v })}
                            placeholder={t.experience.rolePlaceholder}
                        />
                        <Field
                            label={t.experience.period}
                            value={e.period}
                            onChange={(v) => update(i, { period: v })}
                            placeholder={t.experience.periodPlaceholder}
                        />
                    </div>
                    <div className="text-left space-y-2">
                        <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                            {t.experience.missions}
                        </span>
                        {e.description.map((line, j) => (
                            <div key={j} className="flex items-center gap-2">
                                <span className="text-gray-400 text-sm">
                                    &gt;
                                </span>
                                <input
                                    type="text"
                                    value={line}
                                    placeholder={t.experience.missionPlaceholder}
                                    onChange={(ev) =>
                                        updateMission(i, j, ev.target.value)
                                    }
                                    className="flex-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeMission(i, j)}
                                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addMission(i)}
                            className="flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white"
                        >
                            <Plus size={14} /> {t.experience.addMission}
                        </button>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={add}
                className="flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-gray-500 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white"
            >
                <Plus size={16} /> {t.experience.add}
            </button>
        </div>
    );
}
