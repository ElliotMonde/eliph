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
        logo: "src/assets/visa_logo.svg",
    },
    {
        company: "FCC Lab",
        role: "AI Reserach Assistant",
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
        logo: "src/assets/fcc_logo.svg",
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
        logo: "src/assets/knovel_logo.svg",
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
        logo: "src/assets/Activate_logo.svg",
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
        logo: "src/assets/htx_logo.svg",
    },
]