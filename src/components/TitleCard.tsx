import Card from "@mui/material/Card";
import TextType from "./typography/TextType";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import { useContext } from "react";
import { AlertContext } from "../provider/AlertProvider";

const photoStyle: React.CSSProperties = {
    background: "none",
    borderRadius: "50%",
    width: "50%",
    maxWidth: "255px",
    overflow: "hidden",
}

const email = "elliotphua@gmail.com";

export default function TitleCard() {
    const { setAlertDetails } = useContext(AlertContext);
    const copyEmail = () => { 
        navigator.clipboard.writeText(email)
        setAlertDetails({icon: CheckIcon, text: "Successfully copied email. ", isAlert: true, opacity: 100})
    }

    return <div className="flex flex-1 flex-col ml-5 items-center gap-6">
        {/* Profile photo */}
        <Card sx={photoStyle}>
            <img className="w-full h-full object-cover" src="/src/assets/Elliot.png" alt="Elliot Phua" />
        </Card>
        {/* Name */}
        <div className="flex-col w-fit">
            <TextType text="Elliot Phua" theme="header" />
            {/* Socials */}
            <div className="flex flex-row items-left gap-3">
                <a target="_blank" href="https://www.linkedin.com/in/elliotphua/"><LinkedInIcon /></a>
                <a target="_blank" href="https://github.com/ElliotMonde"><GitHubIcon /></a>
                <a target="_blank" className="cursor-pointer" onClick={copyEmail}><EmailIcon /></a>
            </div>
        </div>
    </div>
}