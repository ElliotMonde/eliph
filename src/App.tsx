import { useContext, useEffect } from "react"
import TitleCard from "./components/TitleCard"
import WorkExp from "./sections/WorkExp"
import Alert from "./components/Alert"
import { AlertContext } from "./provider/AlertProvider"
import DarkModeButton from "./components/DarkModeButton"

export default function App() {
    const { alertDetails, setAlertDetails } = useContext(AlertContext);
    useEffect(() => { 
        if (alertDetails.isAlert) { 
            const timer = setTimeout(() => { 
                setAlertDetails({...alertDetails, isAlert: false, opacity: 0})
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [alertDetails.isAlert, setAlertDetails])
    return (
        <div className="flex flex-wrap justify-center w-full h-[100vh] dark:text-white dark:bg-black text-black bg-white transition duration-600 ease-in-out">
            <TitleCard/>
            <WorkExp />
            <div className="absolute z-0 bottom-[10%]">
                <Alert/>
            </div>
            <div className="absolute z-0 bottom-[5%] right-[3%]">
                <DarkModeButton/>
            </div>
        </div>
    )
}