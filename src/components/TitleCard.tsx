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
    minWidth: "100px",
    overflow: "hidden",

}

const email: string = "elliotphua@gmail.com";
const introduction: string[] = [
    `Hi, my name is Elliot Phua. I'm a Software Engineer at Visa, specializing in building functional and highly-scalable systems. My background in Arts, Design and Technology has taught me to approach challenges with an engineering precision and a designer's eye.`,
    `I enjoy tinkering, solving challenges and creating positive impacts in the world. This is my journey so far and I am always learning and growing.`,
    `Thanks for checking out my website! :)`]
interface SocialProp {
    link: string;
    icon: React.ReactNode;
}
function Social({ link, icon }: SocialProp) {
    return (
        <div className="hover:border-b-3 transition-all duration-150 ease-in pb-1">
            <a target="_blank" href={link}>
                {icon}
            </a>
        </div>
    )
}

export default function TitleCard() {
    const { setAlertDetails } = useContext(AlertContext);
    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        setAlertDetails({ icon: CheckIcon, text: "Successfully copied email. ", isAlert: true, opacity: 100 })
    }

    return (
        <div className={`flex flex-1 flex-row flex-wrap items-center pt-[5%] w-full mb-5`}>
            {/* Profile photo */}
            <div className="flex flex-3 justify-center min-container">
                <Card sx={photoStyle}>
                    <img className="w-full h-full object-cover" src="/Elliot.png" alt="Elliot Phua" />
                </Card>
            </div>
            {/* Name */}
            <div className="flex flex-5 flex-col w-fit min-container max-sm:justify-center ml-5 mr-5 text-balance">
                <div className="max-sm:self-center"><TextType text="Hi, I'm Elliot!" theme="header" /></div>
                {/* Socials */}
                <div className="flex flex-row gap-3 max-sm:justify-center">
                    <Social link="https://www.linkedin.com/in/elliotphua/" icon=<LinkedInIcon /> />
                    <Social link="https://github.com/ElliotMonde" icon=<GitHubIcon /> />
                    <div onClick={copyEmail}><Social link={`mailto:${email}`} icon=<EmailIcon /> /></div>
                </div>
                <div className="max-w-[80%] mt-5 max-sm:self-center">
                    {introduction.map((s) => <span className="body">{s}<br/><br/></span>)}
                </div>
            </div>
        </div>)
}