import TextType from "../components/typography/TextType";
import { projectsTab } from "../data/navTab";
import Section from "./Section";

export default function ProjectSection() {
    return (
        <Section id={projectsTab.target}>
            <TextType text="Projects" theme={"subheader"} />
            <div>work in progress</div>
        </Section>
    )
}