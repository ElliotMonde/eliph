import { educationExperience } from "../data/experience";
import TextType from "../components/typography/TextType";
import Section from "./Section";
import JobCard from "../components/JobCard";

export default function EducationSection() { 
    return (
        <Section>
            <TextType text="Education" theme={"subheader"} />
            {educationExperience.map((exp, ind) => (
                <JobCard key={ `${exp.company} + ${ind}`} {...exp} />
            ))}
        </Section>
    )
}