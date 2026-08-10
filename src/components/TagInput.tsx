import { useState } from "react";
import { X } from "lucide-react";

type Props = {
    label: string;
    tags: string[];
    onChange: (tags: string[]) => void;
    placeholder?: string;
};

export function TagInput({ label, tags, onChange, placeholder }: Props) {
    const [draft, setDraft] = useState("");

    function addTag() {
        const value = draft.trim();
        if (value && !tags.includes(value)) {
            onChange([...tags, value]);
        }
        setDraft("");
    }

    return (
        <div className="text-left">
            <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                {label}
            </span>
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="flex items-center gap-1 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-2 py-1 text-xs"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => onChange(tags.filter((t) => t !== tag))}
                            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        >
                            <X size={12} />
                        </button>
                    </span>
                ))}
            </div>
            <input
                type="text"
                value={draft}
                placeholder={placeholder}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        addTag();
                    }
                }}
                onBlur={addTag}
                className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
            />
        </div>
    );
}
