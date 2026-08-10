import type { Lang } from "../types";

export type Ui = {
    headerReset: string;
    confirmReset: string;
    downloadGenerating: string;
    downloadCta: string;
    sections: {
        general: string;
        about: string;
        diplomas: string;
        experience: string;
        skills: string;
        languages: string;
    };
    fields: {
        name: string;
        namePlaceholder: string;
        subtitle: string;
        subtitlePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        phone: string;
        phonePlaceholder: string;
        aboutText: string;
        aboutPlaceholder: string;
        photo: string;
    };
    diplomas: {
        title: string;
        titlePlaceholder: string;
        years: string;
        yearsPlaceholder: string;
        school: string;
        schoolPlaceholder: string;
        add: string;
    };
    experience: {
        company: string;
        companyPlaceholder: string;
        city: string;
        cityPlaceholder: string;
        role: string;
        rolePlaceholder: string;
        period: string;
        periodPlaceholder: string;
        missions: string;
        missionPlaceholder: string;
        addMission: string;
        add: string;
    };
    skills: {
        hard: string;
        hardPlaceholder: string;
        soft: string;
        softPlaceholder: string;
    };
    languages: {
        name: string;
        namePlaceholder: string;
        level: string;
        levelPlaceholder: string;
        add: string;
    };
};

export const ui: Record<Lang, Ui> = {
    fr: {
        headerReset: "Réinitialiser",
        confirmReset: "Réinitialiser toutes les données du CV ?",
        downloadGenerating: "Génération...",
        downloadCta: "Télécharger le PDF",
        sections: {
            general: "Informations générales",
            about: "À propos",
            diplomas: "Diplômes",
            experience: "Expériences",
            skills: "Compétences",
            languages: "Langues",
        },
        fields: {
            name: "Nom complet",
            namePlaceholder: "John Doe",
            subtitle: "Sous-titre",
            subtitlePlaceholder: "Développeur Full-Stack",
            email: "Email",
            emailPlaceholder: "jean.dupont@email.com",
            phone: "Téléphone",
            phonePlaceholder: "06 12 34 56 78",
            aboutText: "Texte de présentation",
            aboutPlaceholder:
                "Développeur passionné avec 5 ans d'expérience en développement web, curieux et toujours en quête de nouveaux défis...",
            photo: "Photo",
        },
        diplomas: {
            title: "Titre du diplôme",
            titlePlaceholder: "Master en Informatique",
            years: "Années",
            yearsPlaceholder: "2022 — 2023",
            school: "École",
            schoolPlaceholder: "Université de Paris",
            add: "Ajouter un diplôme",
        },
        experience: {
            company: "Entreprise",
            companyPlaceholder: "Google",
            city: "Ville",
            cityPlaceholder: "Paris",
            role: "Poste",
            rolePlaceholder: "Développeur Full-Stack",
            period: "Période",
            periodPlaceholder: "Octobre 2025 — Aujourd'hui",
            missions: "Missions",
            missionPlaceholder:
                "Développement d'une application web avec React et Node.js",
            addMission: "Ajouter une mission",
            add: "Ajouter une expérience",
        },
        skills: {
            hard: "Hard skills",
            hardPlaceholder: "React, Python, Docker...",
            soft: "Soft skills",
            softPlaceholder: "Autonome, Curieux, Rigoureux...",
        },
        languages: {
            name: "Langue",
            namePlaceholder: "Anglais",
            level: "Niveau",
            levelPlaceholder: "Natif, C1, B1...",
            add: "Ajouter une langue",
        },
    },
    en: {
        headerReset: "Reset",
        confirmReset: "Reset all CV data?",
        downloadGenerating: "Generating...",
        downloadCta: "Download PDF",
        sections: {
            general: "General information",
            about: "About",
            diplomas: "Diplomas",
            experience: "Experience",
            skills: "Skills",
            languages: "Languages",
        },
        fields: {
            name: "Full name",
            namePlaceholder: "John Doe",
            subtitle: "Subtitle",
            subtitlePlaceholder: "Full-Stack Developer",
            email: "Email",
            emailPlaceholder: "john.doe@email.com",
            phone: "Phone",
            phonePlaceholder: "555 123 4567",
            aboutText: "About text",
            aboutPlaceholder:
                "Passionate developer with 5 years of experience in web development, curious and always looking for new challenges...",
            photo: "Photo",
        },
        diplomas: {
            title: "Diploma title",
            titlePlaceholder: "Master's in Computer Science",
            years: "Years",
            yearsPlaceholder: "2022 — 2023",
            school: "School",
            schoolPlaceholder: "University of Paris",
            add: "Add a diploma",
        },
        experience: {
            company: "Company",
            companyPlaceholder: "Google",
            city: "City",
            cityPlaceholder: "Paris",
            role: "Role",
            rolePlaceholder: "Full-Stack Developer",
            period: "Period",
            periodPlaceholder: "October 2025 — Now",
            missions: "Missions",
            missionPlaceholder: "Built a web application using React and Node.js",
            addMission: "Add a mission",
            add: "Add an experience",
        },
        skills: {
            hard: "Hard skills",
            hardPlaceholder: "React, Python, Docker...",
            soft: "Soft skills",
            softPlaceholder: "Autonomous, Curious, Rigorous...",
        },
        languages: {
            name: "Language",
            namePlaceholder: "English",
            level: "Level",
            levelPlaceholder: "Native, C1, B1...",
            add: "Add a language",
        },
    },
};
