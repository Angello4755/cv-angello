
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
        },
        profile: {
            cellPhone: string;
        },
        workExperience: {
            title: string;
        }    
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
            native: 'Idioma nativo'
        },
        profile: {
            cellPhone: 'Celular'
        },
        workExperience: {
            title: 'Experiencia Laboral'
        }    
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
            native: 'Langue maternelle'
        },
        profile: {
            cellPhone: 'Téléphone portable'
        },
        workExperience: {
            title: 'Expérience de travail'
        }    
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
            native: 'Native'
        },
        profile: {
            cellPhone: 'Cell Phone'
        },
        workExperience: {
            title: 'Work Experience'
        }    
    }
}
