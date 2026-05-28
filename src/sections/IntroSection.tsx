import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ChangingText from "../components/animation/ChangingText";
import CheckIcon from '@mui/icons-material/Check';
import { useContext } from "react";
import { AlertContext } from "../provider/AlertProvider";
const email: string = "elliotphua@gmail.com";

interface SocialProp {
    link: string;
    icon: React.ReactNode;
}
function Social({ link, icon }: SocialProp) {
    return (
        <div className="border-b-3 border-transparent hover:border-inherit transition-colors duration-350 ease-in-out pb-1">
            <a target="_blank" href={link}>
                {icon}
            </a>
        </div>
    )
}

export default function IntroSection() {
    const { setAlertDetails } = useContext(AlertContext);
    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        setAlertDetails({ icon: CheckIcon, text: "Successfully copied email. ", isAlert: true, opacity: 100 })
    }
    return <div className="flex flex-5 flex-col w-full min-container max-sm:justify-center ml-5 mr-5 text-balance">
        <div className="max-sm:self-center">{<ChangingText />}</div>
        {/* Socials */}
        <div className="flex flex-row gap-3 mt-2 max-sm:justify-center">
            <Social aria-description="Redirect to Elliot's Linkedin" link="https://www.linkedin.com/in/elliotphua/" icon=<LinkedInIcon /> />
            <Social aria-description="Redirect to Elliot's GitHub" link="https://github.com/ElliotMonde" icon=<GitHubIcon /> />
            <div onClick={copyEmail}><Social aria-description="Send email to Elliot or copy email address" link={`mailto:${email}`} icon=<EmailIcon /> /></div>
        </div>
        <div className="max-w-[80%] mt-5 max-sm:self-center">
            <span className="body">
                Hi, my name is <b>Elliot Phua</b>. I'm a Software Engineer at <a target="_blank" href="https://www.visa.com/" className="decoration-dotted underline">Visa</a>, specializing in building functional and highly-scalable systems. My background in Arts, Design and Technology has taught me to approach challenges with systematic thinking and a designer's eye.
                <br /><br />
                I enjoy tinkering, solving challenges and creating positive impacts in the world. This is my journey so far and I am always learning and growing.
                <br /><br />
                Thanks for checking out my website! :)
            </span>
        </div>
    </div>
}