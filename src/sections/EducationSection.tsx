import { educationExperience } from "../data/experience";
import Section from "./Section";
import JobCard from "../components/JobCard";
import { educationTab } from "../data/navTab";
import SectionTitle from "./SectionTitle";

export default function EducationSection() {
    const educationCardClass = "education-card";
    return (
        <Section id={educationTab.target} childrenClass={educationCardClass}>
            <div className="flex flex-row flex-wrap">
                <SectionTitle text="Education" />
                <div className="flex-4 flex flex-col min-container">
                    {educationExperience.map((exp, ind) => (
                        <div key={`${exp.company} + ${ind}`} className={educationCardClass}><JobCard {...exp} /></div>
                    ))}
                </div>
            </div>
        </Section>
    )
}