export type Diploma = {
    title: string;
    years: string;
    school: string;
};

export type Experience = {
    company: string;
    period: string;
    role: string;
    city: string;
    description: string[];
};

export type Language = {
    name: string;
    level: string;
};

export type CVData = {
    name: string;
    subtitle: string;
    email: string;
    phone: string;
    photo: string | null;
    about: string;
    diplomas: Diploma[];
    experience: Experience[];
    hardSkills: string[];
    softSkills: string[];
    languages: Language[];
};

export const emptyCVData: CVData = {
    name: "",
    subtitle: "",
    email: "",
    phone: "",
    photo: null,
    about: "",
    diplomas: [],
    experience: [],
    hardSkills: [],
    softSkills: [],
    languages: [],
};

export type Lang = "fr" | "en";
