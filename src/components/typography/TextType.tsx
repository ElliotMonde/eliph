import { DarkModeContext } from "../../provider/DarkProvider";
import Typography from "@mui/material/Typography";
import { useContext } from "react";


export interface TypographyProp {
    theme: string;
    text: string;
}
export interface TextStyle {
    fontFamily: string;
    color: string;
    fontWeight: number | string;
    fontStyle?: string;
    fontSize: string;
}

function selectTextStyle(theme: string) {
    const { isDark } = useContext(DarkModeContext);
    const headerStyle: TextStyle = {
        fontFamily: ["Averia Serif Libre", "Georgia", "system-ui", "Segoe UI", "Roboto", "serif"].join(", "),
        color: isDark ? "white" : "black",
        fontWeight: 500,
        fontSize: "2rem",
    }

    const subheaderStyle: TextStyle = {
        fontFamily: ["Averia Serif Libre", "Georgia", "system-ui", "Segoe UI", "Roboto", "serif"].join(", "),
        color: isDark ? "white" : "black",
        fontWeight: 400,
        fontSize: "1.5rem",
    }

    const h3Style: TextStyle = {
        fontFamily: ["Averia Serif Libre", "Georgia", "system-ui", "Segoe UI", "Roboto", "serif"].join(", "),
        color: isDark ? "white" : "black",
        fontWeight: 400,
        fontSize: "1.3rem",
    }

    const captionStyle: TextStyle = {
        fontFamily: ["Gothic A1", "sans-serif"].join(", "),
        color: isDark ? "white" : "black",
        fontWeight: 300,
        fontSize: "1rem",
    }

    const bodyStyle: TextStyle = {
        fontFamily: ["Gothic A1", "sans-serif"].join(", "),
        color: isDark ? "white" : "black",
        fontWeight: 300,
        fontSize: "1rem",
    }

    const dateStyle: TextStyle = {
        fontFamily: ["Gothic A1", "sans-serif"].join(", "),
        color: isDark ? "#DADADA": "080808" ,
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "0.8rem",
    }

    const styles: Record<string, TextStyle> = {
        "header": headerStyle,
        "subheader": subheaderStyle,
        "h3": h3Style,
        "caption": captionStyle,
        "body": bodyStyle,
        "date": dateStyle,
    }
    return styles[theme]
}

export default function TextType({ text, theme }: TypographyProp) {
    return (
        <Typography sx={selectTextStyle(theme)}>{text}</Typography>
    )
}