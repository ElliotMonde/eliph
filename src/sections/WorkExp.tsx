
import TextType from "../components/typography/TextType"
import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"
import Section from "./Section"

export default function WorkExp() {
    return (
        <Section>
            <TextType text="Work Experience" theme={"subheader"} />
            <div id="workTimeline">
                {workExperience.map((exp, ind) => (
                    <JobCard key={ind} {...exp} />
                ))}
            </div>
        </Section>)
}