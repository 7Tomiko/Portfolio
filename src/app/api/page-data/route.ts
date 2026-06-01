import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/portfolio/images/icon/asana-icon.svg",
        role: "Développeur Application, LoyalTeam",
        location: "Luxembourg, Luxembourg",
        startYear: "5 janvier 2026",
        endYear: "20 février 2026",
        bulletPoints: [
            "Apprendre la vie en entreprise et les processus de développement logiciel",
            "S'adapter à la demande client qui évolue et livrer des fonctionnalités dans des délais serrés",
            "Respecter les normes de code et les meilleures pratiques pour assurer l'intégrité des données et la sécurité de l'application"
        ]
    },
    {
        icon: "/portfolio/images/icon/tailwind-icon.svg",
        role: "Développeur Web, Coeur à Pattes",
        location: "Le Havre, France",
        startYear: "12 mai 2025",
        endYear: "13 juin 2025",
        bulletPoints: [
            "Être à l'écoute des besoins des clients et proposer des solutions adaptées pour améliorer leur présence en ligne",
            "Renforcer les compétences en développement web déjà aquises et apprendre de nouvelles technologies",
            "Apprendre à utiliser des API pour intégrer des fonctionnalités tierces et améliorer l'expérience utilisateur du site web de l'association"
        ]
    },
    {
        icon: "/portfolio/images/icon/trillium-icon.svg",
        role: "Infographiste, HAC Football",
        location: "Le Havre, France",
        startYear: "2019",
        endYear: "2019",
        bulletPoints: [
            "Plonger dans le monde du sport et les exigences spécifiques en matière de design pour les clubs sportifs",
            "Découvrir les outils et processus menant à la création de supports visuels pour les événements sportifs, les campagnes de marketing et les réseaux sociaux",
            "Apprendre à travailler en collaboration avec les équipes de marketing et de communication pour créer des visuels qui renforcent la marque du club et engagent les fans"
        ]
    },
]

const parcoursData = [
    {
        date: "Sep 2025 - Actuellement",
        title: "SIO2 SLAM",
        subtitle: "StJoSup - Le Havre, France"
    },
    {
        date: "Sep 2024 - Jun 2025",
        title: "SIO1 SLAM",
        subtitle: "StJoSup - Le Havre, France"
    },
    {
        date: "Sep 2023 - Mai 2024",
        title: "L1 Informatique",
        subtitle: "Université du Havre - Le Havre, France"
    },
    {
        date: "Sep 2022 - Jun 2023",
        title: "Terminale Générale, Spécialités Mathématiques et Physique-Chimie",
        subtitle: "Lycée Saint Joseph - Le Havre, France"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "TomiCar - Application de gestion de trajets", url: "#" },
        { name: "Coeur à Pattes - Site Web de l'association", url: "https://coeurapattes.com" },
    ],
    sideProjects: [
        { name: "HaerinBOT (Bot Discord)", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        parcoursData,
        projectOverview
    });
};