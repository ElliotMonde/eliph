import { type ProjectProps } from "../../data/experience"
import TextType from "../typography/TextType"

export default function ProjectCard({
    name,
    mediaUrl,
    subtitle,
}: ProjectProps) {

    return (
        <div
            className={`flex flex-col w-full max-w-87.5 justify-end aspect-square rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl`}>
            <img loading="lazy" src={mediaUrl} alt={name} className="absolute w-full h-full z-0 object-cover"/>
            <div className="absolute inset-0 z-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="truncate mx-3 z-1 text-light"><TextType text={name} theme="h3" /></div>
            <div className="truncate mx-3 mb-3 z-1 text-light"><TextType text={subtitle ? subtitle : ""} theme="caption" /></div>
        </div>
    )
}