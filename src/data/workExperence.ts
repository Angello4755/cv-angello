export enum TECNOLOGIE {
    CSS = 'Css',
    HTML = 'Html',
    WCAG = 'WCAG (Accessibility Guidelines)',
    JAVASCRIPT = 'JavaScript',
    JESTAXE = 'jest-axe',
    PHP = "PHP",
    PLSQL = "PLSQL",
    GENEXUS = "GENEXUS",
    WEBSERVICE = "WEBSERVICE",
    GAMS = "GAMS",
    MYSQL = "MYSQL",
    JAVA = "JAVA",
    SIG = "SIG",
    NEXTJS = "NEXTJS",
    REACT = "REACT",
    MONGODB = "MONGODB",
    TDD = "TDD (Test Driven Development)",
    JEST_TEST = "JEST_TEST"
}

export const workExperience = {
    ES: [{
        post:'Desarrollador de software senior',
        initialDate: '01/12/2018',
        finalDate: 'Actualidad',
        company: 'Veritran',
        pageWeb: "https://www.veritran.com/",
        goals: [
           {
               description: 'Accessibilidad: Adaptacion de las aplicaciones web y mobile para que los usuarios con diferentes discapacidades (Visuales, auditivas) puedan acceder a las diferentes funcionalidades  ',
               technologies: [ TECNOLOGIE.WCAG, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.JESTAXE, TECNOLOGIE.TDD, TECNOLOGIE.JEST_TEST  ]
           }
        ]
    },
    {
    post:'Analista y desarrollador de software Senior',
    initialDate: '01/01/2014',
    finalDate: '28/11/2018',
    company: 'Media Commerce SAS',
    pageWeb: "https://mc.net.co/",
    goals: [
       {
           description: 'Maquetacion e implementacion web sistema facturacion',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
       },
       {
           description: 'Modulo especializado reporteria sistema de tickets',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
       },
       {
           description: 'Modulo especializado reporteria sistema de recaudo y facturacion',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
       },
       {
           description: 'Dashboard de analisis de informacion de grandes clientes',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
       },
       {
           description: 'Generación reconocimiento de ingresos(Fr), cálculos correctos de Días de servicio del cliente, calculo automático diario de intereses de mora, tipificación de periodicidad de facturación, tipificación de cuentas contables niif',
           technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
       },
       {
           description: 'Generacion por la web del plano dataCredito',
           technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
       },
       {
           description: 'Dashboard indicadores proyecto Fonade',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
       },
       {
           description: 'Proyecto radius integrado con sistema de tickets, permite el mejoramiento del sistema en los procesos de Desconexiones y Reconexiones de clientes inalámbricos, con el fin de reducir el tiempo en que se realizan estos, brindándole así una mejor calidad al cliente y adicionalmente un costo beneficio a la compañía.',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
       },
       {
           description: 'Proyecto efecty: Integración asociado al consumo de los servicios web Media Commerce. Creación de procesos relacionados con la integración de efecty con el sistema actual de la compañía ; se crean mecanismos de consulta o consumo, las posibles respuestas o devolución de información y poder así llevar a cabo el proceso de aplicación de pagos en la compañía.',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL, TECNOLOGIE.WEBSERVICE ]
       },
       {
           description: 'Proyecto Facturacion electronica: Reporte diario automatico a la Dian de todos los documentos financieros exigidos según su nueva resolucion. Tecnologias utilizadas: Web services, pl/sql.',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
       },
    ]
},{
    post:'Analista y desarrollador de sofware Junior',
    initialDate: '01/01/2010',
    finalDate: '28/11/2013',
    company: 'Universidad del Quindio',
    pageWeb: "https://www.uniquindio.edu.co/",
    goals: [
       {
           description: 'Modelos Hidros-Ecomicos para la Gestión de control de la contaminación del DBO y Fosforo en la cuenca hidrografía del Rio Serpis. Estos modelos permitirán realizar una optimización económica para alcanzar objetivos medio ambientales para el DBO y fosforo en la Cuenca Hidrográfica del Rio Serpis.',
           technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.GAMS ]
       },
       {
           description: 'Desarrollo de una herramienta informatica soporta en SIG para la determinacion de caudales ecologicos en la cuenta del Rio Quindio.',
           technologies: [ TECNOLOGIE.MYSQL, TECNOLOGIE.JAVA, TECNOLOGIE.GAMS, TECNOLOGIE.SIG, TECNOLOGIE.CSS, TECNOLOGIE.HTML ]
       },
    ]
}, ],
FR: [{
    post:'Développeur de logiciel Senior',
    initialDate: '01/12/2018',
    finalDate: 'Current',
    company: 'Veritran',
    pageWeb: "https://www.veritran.com/",
    goals: [
       {
           description: 'Adapter les applications web et mobiles pour que les utilisateurs atteints de différentes incapacités (visuelles, auditives) puissent accéder aux différentes fonctionnalités.',
           technologies: [ TECNOLOGIE.WCAG, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.JESTAXE, TECNOLOGIE.TDD, TECNOLOGIE.JEST_TEST  ]
       }
    ]
},
{
post:'Développeur de logiciel Senior',
initialDate: '01/01/2014',
finalDate: '28/11/2018',
company: 'Media Commerce SAS',
pageWeb: "https://mc.net.co/",
goals: [
   {
       description: 'Conception et mise en œuvre web du système de facturation',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Module de reporting spécialisé pour le système de gestion des tickets',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: 'Module de reporting spécialisé pour le système de collecte des revenus et de facturation.',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: "Tableau de bord pour l'analyse des informations des clients importants",
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: 'Génération de la reconnaissance des revenus, calculs précis des jours de service client, calcul automatique quotidien des intérêts de retard, catégorisation de la périodicité de facturation, catégorisation des comptes comptables conformes aux normes NIIF',
       technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Génération en ligne du rapport dataCredito',
       technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Tableau de bord des indicateurs du projet Fonade',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: "Projet Radius intégré au système de gestion des tickets, permettant l'amélioration du système dans les processus de déconnexion et reconnexion des clients sans fil, dans le but de réduire le temps nécessaire pour effectuer ces opérations, offrant ainsi une meilleure qualité au client et des avantages économiques supplémentaires à l'entreprise.",
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: "Projet Efecty: Intégration associée à la consommation des services web Media Commerce. Création de processus liés à l'intégration d'Efecty avec le système actuel de l'entreprise ; création de mécanismes de consultation ou de consommation, ainsi que de possibles réponses ou de retour d'informations, afin de mener à bien le processus d'application des paiements dans l'entreprise.",
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL, TECNOLOGIE.WEBSERVICE ]
   },
   {
       description: 'Projet de Facturation électronique : Rapport quotidien automatique à la DIAN de tous les documents financiers requis selon leur nouvelle résolution.',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
]
},{
post:'Développeur de logiciel Junior',
initialDate: '01/01/2010',
finalDate: '28/11/2013',
company: 'Université del Quindío',
pageWeb: "https://www.uniquindio.edu.co/",
goals: [
   {
       description: "Modèles Hydros-Économiques pour la Gestion du contrôle de la pollution de la DBO et du phosphore dans le bassin hydrographique de la rivière Serpis. Ces modèles permettront d'effectuer une optimisation économique afin d'atteindre des objectifs environnementaux pour la DBO et le phosphore dans le bassin hydrographique de la rivière Serpis.",
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.GAMS ]
   },
   {
       description: "Développement d'un outil informatique basé sur les SIG pour la détermination des débits écologiques dans le bassin de la rivière Quindio.",
       technologies: [ TECNOLOGIE.MYSQL, TECNOLOGIE.JAVA, TECNOLOGIE.GAMS, TECNOLOGIE.SIG, TECNOLOGIE.CSS, TECNOLOGIE.HTML ]
   },
]
}, ],
EN: [{
    post:'Senior Software Developer',
    initialDate: '01/12/2018',
    finalDate: 'Actualité',
    company: 'Veritran',
    pageWeb: "https://www.veritran.com/",
    goals: [
       {
           description: 'Adapting web and mobile applications for users with different disabilities (visual, auditory) to access various functionalities.',
           technologies: [ TECNOLOGIE.WCAG, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.JESTAXE, TECNOLOGIE.TDD, TECNOLOGIE.JEST_TEST  ]
       }
    ]
},
{
post:'Senior Software Developer',
initialDate: '01/01/2014',
finalDate: '28/11/2018',
company: 'Media Commerce SAS',
pageWeb: "https://mc.net.co/",
goals: [
   {
       description: 'Web layout and implementation of the billing system',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Specialized reporting module for the ticketing system',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: 'Specialized reporting module for the revenue and billing system',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: 'Dashboard for analyzing information of major clients',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP ]
   },
   {
       description: 'Generation of revenue recognition, accurate calculations of customer service days, daily automatic calculation of late payment interest, categorization of billing periodicity, categorization of NIIF',
       technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Web-based generation of the dataCredito report',
       technologies: [ TECNOLOGIE.GENEXUS, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Fonade project indicators dashboard',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: 'Radius project integrated with ticketing system, enables system improvement in the processes of wireless customer disconnections and reconnections, aiming to reduce the time it takes to perform these actions, thus providing better quality to the customer and additional cost benefits to the company.',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
   {
       description: "Efecty Project: Integration associated with the consumption of Media Commerce web services. Creation of processes related to the integration of Efecty with the company's current system; mechanisms for querying or consuming are created, along with possible responses or information feedback, in order to carry out the payment application process in the company.",
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL, TECNOLOGIE.WEBSERVICE ]
   },
   {
       description: 'Electronic Invoicing Project: Daily automatic reporting to DIAN of all required financial documents according to their new resolution',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.JAVASCRIPT, TECNOLOGIE.PHP, TECNOLOGIE.PLSQL ]
   },
]
},{
post:'Junior Software Developer',
initialDate: '01/01/2010',
finalDate: '28/11/2013',
company: 'University of Quindío',
pageWeb: "https://www.uniquindio.edu.co/",
goals: [
   {
       description: 'Hydro-Economic Models for Pollution Control and Management of BOD and Phosphorus in the hydrographic basin of the Serpis River. These models will enable economic optimization to achieve environmental objectives for BOD and phosphorus in the hydrographic basin of the Serpis River.',
       technologies: [ TECNOLOGIE.CSS, TECNOLOGIE.HTML, TECNOLOGIE.GAMS ]
   },
   {
       description: 'Development of a computer tool supported by GIS for the determination of ecological flows in the Quindio River basin.',
       technologies: [ TECNOLOGIE.MYSQL, TECNOLOGIE.JAVA, TECNOLOGIE.GAMS, TECNOLOGIE.SIG, TECNOLOGIE.CSS, TECNOLOGIE.HTML ]
   },
]
}, ]      
}