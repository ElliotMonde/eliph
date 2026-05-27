interface SectionProp {
    id: string;
    children: React.ReactNode;
}
export default function Section({ id, children }: SectionProp) {
    return <div id={id} className="pl-[5%] pr-[5%] pt-[5%] flex-1">{children}</div>
}