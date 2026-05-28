import WorkExpSection from "./WorkExp"
import EducationSection from "./EducationSection"
import ProjectSection from "./Project"

export default function MainBody() {

    return (
        <div className="flex flex-row flex-wrap bg-inherit">
            <div className="flex-2 min-container">
                <WorkExpSection />
                <EducationSection />
                <ProjectSection />
            </div>
        </div>
    )
}