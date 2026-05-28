import TextType from "../components/typography/TextType";
import { projectsTab } from "../data/navTab";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
    return (
        <Section id={projectsTab.target}>
            <SectionTitle text={ "Projects" } />
            <div className="flex sm:justify-center mt-10">
                <TextType theme="body" text="Check back again soon! 👀" />
            </div>
        </Section>
    )
}