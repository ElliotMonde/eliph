import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"
import Section from "./Section"
import { workTab } from "../data/navTab"
import SectionTitle from "./SectionTitle"

export default function WorkExpSection() {

    return (
        <Section id={workTab.target}>
            <div className="flex flex-row flex-wrap">
<SectionTitle text="Work Experience" />
                <div id="workTimeline" className="flex-4 min-container flex flex-col">
                    {workExperience.map((exp, ind) => (
                        <JobCard key={ind} {...exp} />
                    ))}
                </div>
            </div>
        </Section>)
}