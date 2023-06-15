import { workExperience } from "./workExperence";

export type LanguageDictionary = {
    ES: Language,
    FR: Language,
    EN: Language
}

type laguageText = {
    key: string; value: string;
}

export type Language = {
        key: string;
        laguages: laguageText[],
        general: {
            language: string;
            languages: string;
            jobTitle: string;
            native: string;
            workExperience: string;
            goals: string;
        },
        profile: {
            cellPhone: string;
        },
        workExperience: DataCompany[]
}

export type DataCompany = {
    post: string;
    initialDate: string;
    finalDate: string;
    company: string;
    pageWeb: string;
    goals: Goal[]
}

type Goal = {
    description: string;
    technologies: string;
}

export const languageDictionary: LanguageDictionary  = {
    ES: {
        key: 'ES',
        laguages: [  
            { key: 'ES', value: 'Español' },
            { key: 'FR', value: 'Frances' }, 
            { key: 'EN', value: 'Ingles' }
        ],
        general: {
            language: 'Idioma',
            languages: 'Idiomas',
            jobTitle: 'Software developer (FullStack)',
            native: 'Idioma nativo',
            workExperience: 'Experiencia Laboral',
            goals: 'Logros'
        },
        profile: {
            cellPhone: 'Celular'
        },
        workExperience: workExperience.ES  
    },
    FR: {
        key: 'FR',
        laguages: [  
            { key: 'ES', value: 'Espagnol' },
            { key: 'FR', value: 'Français' }, 
            { key: 'EN', value: 'Anglais' }
        ],
        general: {
            language: 'Langage',
            languages: 'Langages',
            jobTitle: 'Développeur logiciel',
            native: 'Langue maternelle',
            workExperience: 'Expérience de travail',
            goals: 'Buts'
        },
        profile: {
            cellPhone: 'Téléphone portable'
        },
        workExperience: workExperience.ES  
    },
    EN: {
        key: 'EN',
        laguages: [  
            { key: 'ES', value: 'Spanish' },
            { key: 'FR', value: 'English' }, 
            { key: 'EN', value: 'French' }
        ],
        general: {
            language: 'Language',
            languages: 'Langages',
            jobTitle: 'Software developer',
            native: 'Native',
            workExperience: 'Work Esperience',
            goals: 'Goals'
        },
        profile: {
            cellPhone: 'Cell Phone'
        },
        workExperience: workExperience.ES   
    }
}

