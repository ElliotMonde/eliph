import { educationExperience } from "../data/experience";
import Section from "./Section";
import JobCard from "../components/JobCard";
import { educationTab } from "../data/navTab";
import SectionTitle from "./SectionTitle";

export default function EducationSection() {
    return (
        <Section id={educationTab.target}>
            <div className="flex flex-row flex-wrap">
                <SectionTitle text="Education" />
                <div className="flex-4 flex flex-col min-container">
                {educationExperience.map((exp, ind) => (
                    <JobCard key={`${exp.company} + ${ind}`} {...exp} />
                ))}
                </div>
            </div>
        </Section>
    )
}