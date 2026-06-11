// import { useEffect, useRef } from "react";
import { projects } from "../../data/experience"
import ProjectCard from "./ProjectCard"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function ProjectCarousel() {
    // const containerRef = useRef<HTMLDivElement | null>(null);
    // const gridItemClass = ".project-grid-item";

    // useEffect(() => {
    //     const items = gsap.utils.toArray(gridItemClass);
    //     if (!containerRef.current || items.length == 0) return;

    //     const animation = gsap.fromTo(items, {
    //         y: 60,
    //         opacity: 0,
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         stagger: 0.2,
    //         duration: 1.6,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: containerRef.current,
    //             start: "top bottom",
    //             toggleActions: "play none play none"
    //         }
    //     });

    //     return () => {
    //         animation.scrollTrigger?.kill();
    //     }
    // }, []);

    return (
        <div className="grid grid-cols-3 items-center place-content-center justify-center gap-2">
            {projects.map((project, ind) => (
                <div key={`project-${ind}`} className={"project-grid-item"}>
                    <ProjectCard {...project} />
                </div>
            ))}</div>
    )
}