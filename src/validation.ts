import type { CVData } from "./types";

function filled(value: string) {
    return value.trim() !== "";
}

export function isGeneralInfoValid(data: CVData) {
    return (
        filled(data.name) &&
        filled(data.subtitle) &&
        filled(data.email) &&
        filled(data.phone)
    );
}

export function isAboutValid(data: CVData) {
    return filled(data.about);
}

export function isDiplomasValid(data: CVData) {
    return (
        data.diplomas.length > 0 &&
        data.diplomas.every(
            (d) => filled(d.title) && filled(d.years) && filled(d.school)
        )
    );
}

export function isExperienceValid(data: CVData) {
    return (
        data.experience.length > 0 &&
        data.experience.every(
            (e) =>
                filled(e.company) &&
                filled(e.period) &&
                filled(e.role) &&
                filled(e.city) &&
                e.description.length > 0 &&
                e.description.every(filled)
        )
    );
}

export function isSkillsValid(data: CVData) {
    return data.hardSkills.length > 0 && data.softSkills.length > 0;
}

export function isLanguagesValid(data: CVData) {
    return (
        data.languages.length > 0 &&
        data.languages.every((l) => filled(l.name) && filled(l.level))
    );
}
