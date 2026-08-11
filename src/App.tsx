import { useEffect, useMemo, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Download, RotateCcw, XCircle } from "lucide-react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./hooks/useTheme";
import { useLang } from "./hooks/useLang";
import { usePageCount } from "./hooks/usePageCount";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { Field, TextAreaField } from "./components/Field";
import { TagInput } from "./components/TagInput";
import { PhotoUpload } from "./components/PhotoUpload";
import { DiplomasSection } from "./components/DiplomasSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { LanguagesSection } from "./components/LanguagesSection";
import { CVDocument } from "./pdf/CVDocument";
import { emptyCVData, type CVData } from "./types";
import {
    isAboutValid,
    isDiplomasValid,
    isExperienceValid,
    isGeneralInfoValid,
    isLanguagesValid,
    isSkillsValid,
} from "./validation";

function Section({
    title,
    valid,
    children,
}: {
    title: string;
    valid: boolean;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);

    return (
        <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between text-left cursor-pointer"
            >
                <div className="flex items-center gap-2">
                    {valid ? (
                        <CheckCircle2 size={16} className="text-green-500" />
                    ) : (
                        <XCircle size={16} className="text-red-500" />
                    )}
                    <h2 className="text-lg font-bold">{title}</h2>
                </div>
                <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 ${open ? "" : "-rotate-90"}`}
                />
            </button>
            <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
                <div className="overflow-hidden min-h-0">
                    <div className="space-y-4 mt-4">{children}</div>
                </div>
            </div>
        </section>
    );
}

function App() {
    const { dark, toggle: toggleTheme } = useTheme();
    const { lang, t, toggle: toggleLang } = useLang();
    const [data, setData] = useLocalStorage<CVData>("cv-builder-data", emptyCVData);
    const [previewData, setPreviewData] = useState(data);
    const [showMobilePreview, setShowMobilePreview] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setPreviewData(data), 500);
        return () => clearTimeout(timeout);
    }, [data]);

    // Recreated only when previewData/lang actually change, so PDFViewer/
    // PDFDownloadLink don't regenerate on every keystroke re-render.
    const previewDocument = useMemo(
        () => <CVDocument data={previewData} lang={lang} />,
        [previewData, lang]
    );
    const pageCount = usePageCount(previewDocument);
    const isOverflowing = pageCount !== null && pageCount > 1;

    function patch(update: Partial<CVData>) {
        setData({ ...data, ...update });
    }

    function reset() {
        if (confirm(t.confirmReset)) {
            setData(emptyCVData);
        }
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <header className="shrink-0 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-lg sm:text-xl font-bold leading-tight">CV Builder</h1>
                    <p className="text-xs font-normal text-gray-400 dark:text-gray-500">
                        par FWSZS
                    </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    <LanguageToggle lang={lang} onToggle={toggleLang} />
                    <ThemeToggle dark={dark} onToggle={toggleTheme} />
                    <div className="h-8 sm:h-10 w-px bg-gray-300 dark:bg-gray-600" />
                    <button
                        type="button"
                        onClick={reset}
                        title={t.headerReset}
                        className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-red-400 hover:text-red-500 dark:hover:border-red-400 dark:hover:text-red-400 cursor-pointer"
                    >
                        <RotateCcw size={12} className="sm:hidden" />
                        <RotateCcw size={14} className="hidden sm:block" />
                    </button>
                    <PDFDownloadLink
                        document={previewDocument}
                        fileName={`${data.name || "cv"}.pdf`.replace(/\s+/g, "-").toLowerCase()}
                        className={`flex items-center justify-center h-8 sm:h-10 w-20 sm:w-48 gap-1.5 sm:gap-2 rounded bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 sm:px-4 font-bold hover:bg-gray-700 dark:hover:bg-gray-200 text-xs sm:${lang === "fr" ? "text-xs" : "text-sm"}`}
                    >
                        {({ loading }) => (
                            <>
                                <Download size={14} className="sm:hidden" />
                                <Download size={16} className="hidden sm:block" />
                                <span className="sm:hidden">
                                    {loading ? t.downloadGenerating : t.downloadCtaShort}
                                </span>
                                <span className="hidden sm:inline">
                                    {loading ? t.downloadGenerating : t.downloadCta}
                                </span>
                            </>
                        )}
                    </PDFDownloadLink>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                {/* Form */}
                <div className="h-full p-4 sm:p-6 space-y-8 overflow-y-auto [scrollbar-gutter:stable]">
                    <Section title={t.sections.general} valid={isGeneralInfoValid(data)}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <PhotoUpload
                                photo={data.photo}
                                onChange={(photo) => patch({ photo })}
                            />
                            <div className="flex-1 space-y-4 min-w-0">
                                <Field
                                    label={t.fields.name}
                                    value={data.name}
                                    onChange={(name) => patch({ name })}
                                    placeholder={t.fields.namePlaceholder}
                                />
                                <Field
                                    label={t.fields.subtitle}
                                    value={data.subtitle}
                                    onChange={(subtitle) => patch({ subtitle })}
                                    placeholder={t.fields.subtitlePlaceholder}
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <Field
                                        label={t.fields.email}
                                        value={data.email}
                                        onChange={(email) => patch({ email })}
                                        placeholder={t.fields.emailPlaceholder}
                                    />
                                    <Field
                                        label={t.fields.phone}
                                        value={data.phone}
                                        onChange={(phone) => patch({ phone })}
                                        placeholder={t.fields.phonePlaceholder}
                                    />
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section title={t.sections.about} valid={isAboutValid(data)}>
                        <TextAreaField
                            label={t.fields.aboutText}
                            value={data.about}
                            onChange={(about) => patch({ about })}
                            placeholder={t.fields.aboutPlaceholder}
                            rows={5}
                        />
                    </Section>

                    <Section title={t.sections.diplomas} valid={isDiplomasValid(data)}>
                        <DiplomasSection
                            diplomas={data.diplomas}
                            onChange={(diplomas) => patch({ diplomas })}
                        />
                    </Section>

                    <Section title={t.sections.experience} valid={isExperienceValid(data)}>
                        <ExperienceSection
                            experience={data.experience}
                            onChange={(experience) => patch({ experience })}
                        />
                    </Section>

                    <Section title={t.sections.skills} valid={isSkillsValid(data)}>
                        <TagInput
                            label={t.skills.hard}
                            tags={data.hardSkills}
                            onChange={(hardSkills) => patch({ hardSkills })}
                            placeholder={t.skills.hardPlaceholder}
                        />
                        <TagInput
                            label={t.skills.soft}
                            tags={data.softSkills}
                            onChange={(softSkills) => patch({ softSkills })}
                            placeholder={t.skills.softPlaceholder}
                        />
                    </Section>

                    <Section title={t.sections.languages} valid={isLanguagesValid(data)}>
                        <LanguagesSection
                            languages={data.languages}
                            onChange={(languages) => patch({ languages })}
                        />
                    </Section>
                </div>

                {/* Preview */}
                <div className="hidden lg:block relative h-full bg-gray-100 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                    <PDFViewer width="100%" height="100%" showToolbar={false}>
                        {previewDocument}
                    </PDFViewer>
                    {isOverflowing && (
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-start gap-2 rounded-xl bg-amber-50 dark:bg-amber-900/90 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-xs px-3 py-2 shadow-lg max-w-md">
                            <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                            <span>{t.pageOverflowWarning(pageCount)}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile preview bottom bar / sheet */}
            <button
                type="button"
                onClick={() => setShowMobilePreview(true)}
                className={`lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-bold cursor-pointer transition-transform duration-300 ease-in-out ${
                    showMobilePreview ? "translate-y-full" : "translate-y-0"
                }`}
            >
                <ChevronUp size={16} />
                {t.previewCta}
                {isOverflowing && (
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                )}
            </button>

            <div
                className={`lg:hidden fixed inset-0 z-50 flex flex-col bg-gray-100 dark:bg-gray-800 transition-transform duration-300 ease-in-out ${
                    showMobilePreview ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <button
                    type="button"
                    onClick={() => setShowMobilePreview(false)}
                    className="shrink-0 flex items-center justify-center gap-2 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-bold cursor-pointer"
                >
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${showMobilePreview ? "" : "rotate-180"}`}
                    />
                    {t.previewCta}
                </button>
                <div className="relative flex-1">
                    <PDFViewer width="100%" height="100%" showToolbar={false}>
                        {previewDocument}
                    </PDFViewer>
                    {isOverflowing && (
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-start gap-2 rounded-xl bg-amber-50 dark:bg-amber-900/90 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 text-[11px] px-3 py-2 shadow-lg w-[90vw]">
                            <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                            <span>{t.pageOverflowWarning(pageCount)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
