export interface TypographyProp {
    theme: string;
    text: string;
}

export default function TextType({ text, theme }: TypographyProp) {
    return (
        <span className={theme}>{text}</span>
    )
}