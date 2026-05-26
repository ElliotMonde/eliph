import { useContext, useEffect } from "react"
import TitleCard from "./components/TitleCard"
import WorkExp from "./sections/WorkExp"
import Alert from "./components/Alert"
import { AlertContext } from "./provider/AlertProvider"
import DarkModeButton from "./components/DarkModeButton"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { DarkModeContext } from "./provider/DarkProvider"
import EducationSection from "./sections/Education"
import ToTopButton from "./components/ToTopButton"

export default function App() {
    const { isDark } = useContext(DarkModeContext);
    const { alertDetails, setAlertDetails } = useContext(AlertContext);

    const darkTheme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light'
        }
    })

    useEffect(() => {
        if (alertDetails.isAlert) {
            const timer = setTimeout(() => {
                setAlertDetails({ ...alertDetails, isAlert: false, opacity: 0 })
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [alertDetails.isAlert, setAlertDetails])
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="flex flex-col justify-center w-full h-fit">
                <TitleCard />
                <div className="p-12">
                    <WorkExp />
                    <EducationSection />
                </div>
                {/* Floating components */}
                <div className="fixed z-0 bottom-[10%]">
                    <Alert />
                </div>
                <div className="flex flex-col fixed z-0 bottom-[5%] right-[3%] gap-3">
                    <ToTopButton />
                    <DarkModeButton />
                </div>
                {/*  */}
            </div>
        </ThemeProvider>
    )
}