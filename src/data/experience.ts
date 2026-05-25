export enum month { 
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
        description: [""]
    },
    {
        company: "Knovel Engineering",
        role: "Software Engineering Intern",
        startDate: {
            month: 6,
            year: 2026
        },
        endDate: "Present",
        location: "Singapore",
        description: [""]
    }
]