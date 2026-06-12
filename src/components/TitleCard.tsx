import Card from "@mui/material/Card";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import { useContext, useEffect, useRef } from "react";
import { AlertContext } from "../provider/AlertProvider";
import ChangingText from "./animation/ChangingText";
import { aboutTab } from "../data/navTab";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollObserver } from "../sections/Section";

gsap.registerPlugin(ScrollToPlugin);

const photoStyle: React.CSSProperties = {
    background: "none",
    borderRadius: "50%",
    width: "50%",
    maxWidth: "255px",
    minWidth: "100px",
    overflow: "hidden",

}

const email: string = "elliotphua@gmail.com";

interface SocialProp {
    link: string;
    icon: React.ReactNode;
}
function Social({ link, icon }: SocialProp) {
    return (
        <div className="border-b-3 border-transparent hover:border-inherit transition-colors duration-350 ease-in-out pb-1">
            <a target="_blank" href={link} aria-label="social-media-label">
                {icon}
            </a>
        </div>
    )
}

export default function TitleCard() {
    const { setAlertDetails } = useContext(AlertContext);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        setAlertDetails({ icon: CheckIcon, text: "Successfully copied email. ", isAlert: true, opacity: 100 })
    }

    useEffect(() => { 
        ScrollObserver(titleRef);
    },[titleRef.current])

    return (
        <div ref={ titleRef} id={ aboutTab.target} className={`flex flex-1 flex-row flex-wrap items-center justify-center w-full min-h-screen`}>
            {/* Profile photo */}
            <div className="flex flex-3 justify-center min-container" aria-description='Picture of Elliot Phua'>
                <Card sx={photoStyle}>
                    <img className="w-full h-full object-cover" src="/Elliot.webp" alt="Elliot Phua" />
                </Card>
            </div>
            {/* Name */}
            <div className="flex flex-5 flex-col w-full min-container max-sm:justify-center ml-5 mr-5 text-balance">
                <div className="max-sm:self-center">{ <ChangingText/> }</div>
                {/* Socials */}
                <div className="flex flex-row gap-3 mt-2 max-sm:justify-center">
                    <Social aria-description="Redirect to Elliot's Linkedin" link="https://www.linkedin.com/in/elliotphua/" icon=<LinkedInIcon /> />
                    <Social aria-description="Redirect to Elliot's GitHub" link="https://github.com/ElliotMonde" icon=<GitHubIcon /> />
                    <div onClick={copyEmail}><Social aria-description="Send email to Elliot or copy email address" link={`mailto:${email}`} icon=<EmailIcon /> /></div>
                </div>
                <div className="max-w-[80%] mt-5 max-sm:self-center">
                    <span className="body">
                        Hi, my name is <h1 className="inline"><b>Elliot Phua</b></h1>. I'm a Software Engineer at <a target="_blank" href="https://www.visa.com/" className="decoration-dotted underline">Visa</a>, specializing in building functional and highly-scalable systems. My background in Arts, Design and Technology has taught me to approach challenges with systematic thinking and a designer's eye.
                        <br /><br />
                        I enjoy tinkering, solving challenges and creating positive impacts in the world. This is my journey so far and I am always learning and growing.
                        <br /><br />
                        Thanks for checking out my website! :)
                    </span>
                </div>
            </div>
        </div>)
}