import { projects } from "../../data/experience"
import ProjectCard from "./ProjectCard"
export default function ProjectCarousel() {
    return (
        <section className="grid grid-cols-3 items-center place-content-center justify-center gap-2">
            {projects.map((project, ind) => (
                <ProjectCard key={`project-${ind}`}{...project} />
            ))}
        </section>
    )
}