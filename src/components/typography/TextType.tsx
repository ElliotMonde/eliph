export interface TypographyProp {
    theme: string;
    text: string;
}

export default function TextType({ text, theme }: TypographyProp) {
    return (
        <p className={`${theme}`}>{text}</p>
    )
}