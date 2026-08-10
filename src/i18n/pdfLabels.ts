import type { Lang } from "../types";

export const pdfLabels = {
    fr: {
        about: "À propos de moi",
        skills: "Compétences",
        languages: "Langues",
        experience: "Expérience",
        diplomas: "Diplômes",
        hardSkills: "Hard skills",
        softSkills: "Soft skills",
        emptyState: "Complétez les champs pour visualiser votre CV",
    },
    en: {
        about: "About me",
        skills: "Skills",
        languages: "Languages",
        experience: "Experience",
        diplomas: "Diplomas",
        hardSkills: "Hard skills",
        softSkills: "Soft skills",
        emptyState: "Fill in the fields to preview your CV",
    },
} as const satisfies Record<Lang, Record<string, string>>;
