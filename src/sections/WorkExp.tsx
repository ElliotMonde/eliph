import JobCard from "../components/JobCard"
import { workExperience } from "../data/experience"

export default function WorkExp() {
    return (
        <div>
            {workExperience.map((exp, ind) => (
                <JobCard key={ ind } {...exp} />
            ))}
        </div>)
}