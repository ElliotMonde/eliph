import { educationExperience } from "../data/experience";
import TextType from "../components/typography/TextType";
import Section from "./Section";
import JobCard from "../components/JobCard";
import { educationTab } from "../data/navTab";

export default function EducationSection() { 
    return (
        <Section id={ educationTab.target}>
            <TextType text="Education" theme={"subheader"} />
            {educationExperience.map((exp, ind) => (
                <JobCard key={ `${exp.company} + ${ind}`} {...exp} />
            ))}
        </Section>
    )
}