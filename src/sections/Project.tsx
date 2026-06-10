import ProjectFlipper from "../components/animation/ProjectFlipper";
import ProjectCarousel from "../components/animation/ProjectCarousel";
import { projectsTab } from "../data/navTab";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
    const projectCardClass = "project-card";
    return (
        <Section id={projectsTab.target} childrenClass={projectCardClass}>
            <SectionTitle text={"Projects"} />
            <p className="my-2 sm:text-center">🚧 This section is a work in progress, check back again soon! 👀</p>
            <div className="flex max-sm:hidden items-center mt-10 w-0.8 justify-around overflow-scroll">
                <ProjectCarousel />
            </div>
            <div className="flex sm:hidden items-center mt-10 w-0.8 justify-around">
                <ProjectFlipper/>
            </div>
        </Section>
    )
}