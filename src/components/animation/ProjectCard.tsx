import { type ProjectProps } from "../../data/experience"
import TextType from "../typography/TextType"

export default function ProjectCard({
    name,
    mediaUrl,
    subtitle,
}: ProjectProps) {
    return (
        <div
            style={{ backgroundImage: `url(/${mediaUrl})` }}
            className={`flex flex-col w-full max-w-87.5 justify-end aspect-square rounded-2xl overflow-hidden bg-cover bg-center relative group cursor-pointer shadow-2xl`}>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="truncate mx-3 z-20 text-light"><TextType text={name} theme="h3" /></div>
            <div className="truncate mx-3 mb-3 z-20 text-light"><TextType text={subtitle} theme="caption" /></div>
        </div>
    )
}