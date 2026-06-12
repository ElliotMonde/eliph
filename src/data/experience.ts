export enum month {
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
}

export interface FormattedDate {
    month: month;
    year: number;
}

export interface Experience {
    company: string;
    role: string;
    startDate: FormattedDate;
    endDate: FormattedDate | string;
    location: string;
    description: string[];
    logo: string;
}

export const workExperience: Experience[] = [
    {
        company: "Visa Inc.",
        role: "Software Engineer",
        startDate: {
            month: 6,
            year: 2026
        },
        endDate: "Present",
        location: "Singapore",
        description: [""],
        logo: "/visa_logo.svg",
    },
    {
        company: "FCC Lab",
        role: "AI Research Assistant",
        startDate: {
            month: 9,
            year: 2025
        },
        endDate: {
            month: 11,
            year: 2025
        },
        location: "Singapore",
        description: [""],
        logo: "/fcc_logo.webp",
    },
    {
        company: "Knovel Engineering",
        role: "Software Engineering Intern",
        startDate: {
            month: 5,
            year: 2025
        },
        endDate: {
            month: 9,
            year: 2025
        },
        location: "Singapore",
        description: [""],
        logo: "/knovel_logo.webp",
    },
    {
        company: "Activate Interactive",
        role: "Software Engineering Intern",
        startDate: {
            month: 8,
            year: 2024
        },
        endDate: {
            month: 1,
            year: 2025
        },
        location: "Singapore",
        description: [""],
        logo: "/Activate_logo.svg",
    },
    {
        company: "HTX",
        role: "Software Developer Intern",
        startDate: {
            month: 5,
            year: 2023
        },
        endDate: {
            month: 8,
            year: 2023
        },
        location: "Singapore",
        description: [""],
        logo: "/htx_logo.webp",
    },
]

export const educationExperience: Experience[] = [
    {
        company: "Singapore University of Technology and Design (SUTD)",
        role: "Bachelor of Engineering in Computer Science (Hons)",
        startDate: {
            month: 9,
            year: 2022,
        },
        endDate: {
            month: 5,
            year: 2026,
        },
        location: "Singapore",
        description: [""],
        logo: "",
    },
    {
        company: "National University of Singapore (NUS)",
        role: "Bachelor of Arts in Achitecture (Hons)",
        startDate: {
            month: 9,
            year: 2020,
        },
        endDate: {
            month: 4,
            year: 2022,
        },
        location: "Singapore",
        description: ["^Dropped out of Architecture school to pursue CS at SUTD."],
        logo: "",
    },
    {
        company: "Military Service",
        role: "Detachment Commander",
        startDate: {
            month: 2,
            year: 2018,
        },
        endDate: {
            month: 2,
            year: 2020,
        },
        location: "Singapore",
        description: [""],
        logo: "",
    },
    {
        company: "Victoria Junior College",
        role: "A-Levels",
        startDate: {
            month: 1,
            year: 2016,
        },
        endDate: {
            month: 12,
            year: 2017,
        },
        location: "Singapore",
        description: [""],
        logo: "",
    },
    {
        company: "Victoria School",
        role: "Integrated Programme (IP), Year 3 & 4",
        startDate: {
            month: 1,
            year: 2014,
        },
        endDate: {
            month: 12,
            year: 2015,
        },
        location: "Singapore",
        description: [""],
        logo: "",
    },
    {
        company: "Victoria School",
        role: "O-Levels, Year 1 & 2",
        startDate: {
            month: 1,
            year: 2012,
        },
        endDate: {
            month: 12,
            year: 2013,
        },
        location: "Singapore",
        description: [""],
        logo: "",
    },
]

export interface ProjectProps {
    name: string;
    mediaUrl: string;
    subtitle?: string;
    link?: string;
    date: FormattedDate;
    description: string[];
}

export const projects: ProjectProps[] = [
    {
        name: "PoliSense AI",
        subtitle: "Fine-tuned LLM Political Bias Detection In News Article",
        mediaUrl: "project-polisense.webp",
        link: "https://github.com/ElliotMonde/PoliSense",
        date: {
            month: 9,
            year: 2025,
        },
        description: [""],
    },
    {
        name: "AI MRI Segmentation",
        mediaUrl: "project-biobot.webp",
        subtitle: "AI Segmentation Tool For Prostate MRI",
        link: "https://github.com/ElliotMonde/ProSeg_GUI",
        date: {
            month: 9,
            year: 2025
        },
        description: [""],
    },
    {
        name: "Bulkify",
        mediaUrl: "project-bulkify-2.webp",
        subtitle: "Group-Buy E-commerce App",
        link: "",
        date: {
            month: 1,
            year: 2024
        },
        description: [""],
    }, {
        name: "Transit House",
        mediaUrl: "project-transithouse.webp",
        subtitle: "Architecture Project: Exploration Of Public & Private Spaces",
        link: "",
        date: {
            month: 1,
            year: 2021
        },
        description: [""],
    },
    {
        name: "Lilypad Project",
        mediaUrl: "project-lilypad.webp",
        subtitle: "Programmable Light Installation",
        link: "",
        date: {
            month: 1,
            year: 2023
        },
        description: [""],
    },
    {
        name: "Vega & Altair",
        mediaUrl: "project-vegaaltair.webp",
        subtitle: "Web Game About Star-Crossed Lovers Using Javascript",
        link: "",
        date: {
            month: 6,
            year: 2023
        },
        description: [""],
    },
    {
        name: "Holographic Projector",
        mediaUrl: "project-holographic.webp",
        subtitle: "Holographic Projector & 3D Model Viewer App For SUTD Night Fiesta 2024",
        link: "",
        date: {
            month: 1,
            year: 202
        },
        description: [""],
    },
    {
        name: "GuardAIn",
        mediaUrl: "project-guardain.webp",
        subtitle: "Gen-AI Health Companion For Accenture University Innovation Challenge",
        link: "",
        date: {
            month: 12,
            year: 2023
        },
        description: [""],
    },
    {
        name: "Eternal Sunshine",
        mediaUrl: "project-eternalsunshine.webp",
        subtitle: "Computational Design For NUS Architecture Design Studio 1",
        link: "",
        date: {
            month: 10,
            year: 2020
        },
        description: [""],
    },
    {
        name: "Assistive Painting Device | Tech4Good & MDAS",
        mediaUrl: "project-t4g.webp",
        subtitle: "Art Tool For People With Muscular Dystrophy",
        link: "",
        date: {
            month: 6,
            year: 2023
        },
        description: [""],
    },
    {
        name: "EnableID",
        mediaUrl: "project-enableid.webp",
        subtitle: "",
        link: "",
        date: {
            month: 5,
            year: 2024
        },
        description: [""],
    },
    {
        name: "Toke UX Design",
        mediaUrl: "project-toke.webp",
        subtitle: "",
        link: "",
        date: {
            month: 10,
            year: 2021
        },
        description: [""],
    },
    {
        name: "Async Distributed OCR Processing Pipeline",
        mediaUrl: "project-async.webp",
        subtitle: "",
        link: "",
        date: {
            month: 2,
            year: 2026
        },
        description: [""],
    },
    {
        name: "FlushFlow IoT",
        mediaUrl: "project-flushflow.webp",
        subtitle: "Real-time Facilities Analytics and Restroom Occupancy Display",
        link: "",
        date: {
            month: 9,
            year: 2025
        },
        description: [""],
    },
]