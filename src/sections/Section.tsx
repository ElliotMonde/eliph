interface SectionProp {
    children: React.ReactNode;
}
export default function Section({ children }: SectionProp) {
    return <div className="pl-[5%] pr-[5%] pt-[5%] flex-1 min-container">{children}</div>
}