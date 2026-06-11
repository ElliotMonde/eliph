import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"
import Section from "./Section"
import { workTab } from "../data/navTab"
import SectionTitle from "./SectionTitle"

export default function WorkExpSection() {
    const workCardClass = "work-card";
    return (
        <Section id={workTab.target} childrenClass={workCardClass}>
            <div className="flex flex-row flex-wrap">
                <SectionTitle text="Work Experience"/>
                <div id="workTimeline" className="flex-4 min-container flex flex-col">
                    {workExperience.map((exp, ind) => (
                        <div key={`work-${ind}`} className={workCardClass}><JobCard key={ind} {...exp} /></div>
                    ))}
                </div>
            </div>
        </Section>)
}