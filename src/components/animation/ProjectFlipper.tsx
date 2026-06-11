import { projects } from "../../data/experience";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function ProjectFlipper() {
    // const maxLength = projects.length;
    // const [count, setCount] = useState<number>(0);

    // const clickNext = () => { 
    //     setCount((count + 1) % maxLength);
    // }
    // const clickPrev = () => { 
    //     setCount((count > 0 ? count : maxLength) - 1);
    // }

    return (
        <div className="flex flex-col justify-around gap-3">
            {projects.map((_, count) =>
                <ProjectCard key={ `${count}`} {...projects[count]} />)
            }
        </div>
    )

}