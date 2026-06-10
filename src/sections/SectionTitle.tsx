import TextType from "../components/typography/TextType"

export interface SectionTitleProp {
    text: string;
}
export default function SectionTitle({ text }: SectionTitleProp) {
    return (
        <div className="sticky top-0 flex-2 h-fit min-container bg-default z-3 flex sm:justify-center">
            <div className="pt-3 pb-3 max-w-fit border-b overflow-hidden">
               <TextType text={text} theme={"subheader"} />
            </div>
        </div>)
}