import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextType from "./typography/TextType";

const photoStyle: React.CSSProperties = {
    background: "none",
    width: "55%"
}

export default function TitleCard() {
    return <div className="flex-row">
        <Card sx={photoStyle}>
            <CardContent>
                <img className=" rounded-full  " src="/src/assets/Elliot.png" />
            </CardContent>
        </Card>
        <div className="ml-5">
            <TextType text="Elliot Phua" theme="header" />
        </div>
    </div>
}