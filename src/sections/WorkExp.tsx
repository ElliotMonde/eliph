
import TextType from "../components/typography/TextType"
import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"
import Section from "./Section"
import { workTab } from "../data/navTab"

export default function WorkExpSection() {
    return (
        <Section id={workTab.target}>
            <TextType text="Work Experience" theme={"subheader"} />
            <div id="workTimeline">
                {workExperience.map((exp, ind) => (
                    <JobCard key={ind} {...exp} />
                ))}
            </div>
        </Section>)
}