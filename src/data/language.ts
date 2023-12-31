import { TECNOLOGIE, workExperience, TECHNICALSKILLS, TRANSVERSALSKILLS } from './workExperence';
import { projects } from './projects';
import { educations } from "./educations";

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
            projects: string;
            skills: string;
            LabelNationality: string;
            nationality: string;
            education: string;
            transversalSkills: string;
            technicalSkills: string;
        },
        profile: {
            cellPhone: string;
        },
        workExperience: DataCompany[],
        projects: Project[]
        educations: Education[]
}

export type Education = {
    title: string;
    initialDate: string;
    finalDate: string;
    localization: string;
    url?: string
    
}

export type Project = {
    name: string;
    urlDeploy: string;
    description: string;
    tecnologies: TECNOLOGIE[]
    github: string;
    mainImage: string;
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
    technologies: (TECNOLOGIE | TECHNICALSKILLS | TRANSVERSALSKILLS )[];
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
            goals: 'Logros',
            projects: 'Proyectos',
            skills: 'Habilidades',
            LabelNationality: 'Nacionalidad',
            nationality: 'Colombiano',
            education: 'Educacion',
            transversalSkills: 'Habilidades transversales',
            technicalSkills: 'Habilidades tecnicas'
        },
        profile: {
            cellPhone: 'Celular'
        },
        workExperience: workExperience.ES,
        projects:  projects.ES,
        educations: educations.ES 
    },
    FR: {
        key: 'FR',
        laguages: [  
            { key: 'ES', value: 'Espagnol' },
            { key: 'FR', value: 'Français' }, 
            { key: 'EN', value: 'Anglais' }
        ],
        general: {
            language: 'Langue',
            languages: 'Langues',
            jobTitle: 'Développeur logiciel',
            native: 'Langue maternelle',
            workExperience: 'Expérience de travail',
            goals: 'Buts',
            projects: 'Projets',
            skills: 'Compétences',
            LabelNationality: 'Nationalité',
            nationality: 'Colombien',
            education: 'Éducation',
            transversalSkills: 'Compétences transversales',
            technicalSkills: 'Compétences techniques'
        },
        profile: {
            cellPhone: 'Téléphone portable'
        },
        workExperience: workExperience.FR,
        projects:  projects.FR,
        educations: educations.FR 
    },
    EN: {
        key: 'EN',
        laguages: [  
            { key: 'ES', value: 'Spanish' },
            { key: 'FR', value: 'French' }, 
            { key: 'EN', value: 'English' }
        ],
        general: {
            language: 'Language',
            languages: 'Languages',
            jobTitle: 'Software developer',
            native: 'Native',
            workExperience: 'Work Esperience',
            goals: 'Goals',
            projects: 'Projects',
            skills: 'Skills',
            LabelNationality: 'Nationality',
            nationality: 'Colombian',
            education: 'Education',
            transversalSkills: 'Transversal skills',
            technicalSkills: 'Technical skills'
        },
        profile: {
            cellPhone: 'Cell Phone'
        },
        workExperience: workExperience.EN,
        projects:  projects.EN,
        educations: educations.EN  
    }
}

