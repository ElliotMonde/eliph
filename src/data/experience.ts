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
        logo: "/fcc_logo.svg",
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
        logo: "/knovel_logo.svg",
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
        logo: "/htx_logo.svg",
    },
]

export const educationExperience: Experience[] = [
    {
        company: "Singapore University of Technology and Design (SUTD)",
        role: "Bachelor of Engineering in Computer Science (Hons)" ,
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