
import TextType from "../components/typography/TextType"
import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"

export default function WorkExp() {
    return (
        <div className="pl-[5%] pr-[5%] w-full flex-1">
          <TextType text="Work Experience" theme={"subheader"}/>
            <div id="workTimeline">
            {workExperience.map((exp, ind) => (
                <JobCard key={ ind } {...exp} />
            ))}
            </div>
        </div>)
}