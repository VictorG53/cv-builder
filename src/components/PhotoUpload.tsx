import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { useLang } from "../hooks/useLang";

type Props = {
    photo: string | null;
    onChange: (photo: string | null) => void;
};

export function PhotoUpload({ photo, onChange }: Props) {
    const { t } = useLang();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);

    function handleFile(file: File) {
        const reader = new FileReader();
        reader.onload = () => onChange(reader.result as string);
        reader.readAsDataURL(file);
    }

    return (
        <div className="text-left">
            <div className="flex items-center justify-between mb-1">
                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400">
                    {t.fields.photo}
                </span>
                {photo && (
                    <button
                        type="button"
                        onClick={() => onChange(null)}
                        className="text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>
            <div className="flex items-center gap-3">
                <div
                    onClick={() => inputRef.current?.click()}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        const file = e.dataTransfer.files?.[0];
                        if (file) handleFile(file);
                    }}
                    className={`relative w-32 h-32 sm:w-48 sm:h-48 rounded border cursor-pointer overflow-hidden flex items-center justify-center text-gray-400 transition-colors ${
                        dragOver
                            ? "border-gray-500 dark:border-gray-300 bg-gray-100 dark:bg-gray-700"
                            : "border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400"
                    }`}
                >
                    {photo ? (
                        <img
                            src={photo}
                            alt="Photo de profil"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Upload size={36} />
                    )}
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFile(file);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
