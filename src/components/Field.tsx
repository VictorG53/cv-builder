type FieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
};

export function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
    return (
        <label className="block text-left">
            <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                {label}
            </span>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
            />
        </label>
    );
}

type TextAreaProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
};

export function TextAreaField({ label, value, onChange, placeholder, rows = 3 }: TextAreaProps) {
    return (
        <label className="block text-left">
            <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                {label}
            </span>
            <textarea
                value={value}
                placeholder={placeholder}
                rows={rows}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
            />
        </label>
    );
}
