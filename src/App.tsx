import { useContext, useEffect } from "react"
import TitleCard from "./components/TitleCard"
import WorkExpSection from "./sections/WorkExp"
import Alert from "./components/Alert"
import { AlertContext } from "./provider/AlertProvider"
import DarkModeButton from "./components/DarkModeButton"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { DarkModeContext } from "./provider/DarkProvider"
import EducationSection from "./sections/Education"
import ToTopButton from "./components/ToTopButton"
import { Helmet, HelmetProvider } from "react-helmet-async"
import NavBar from "./components/NavBar"
import ProjectSection from "./sections/Project"

export default function App() {
    const { isDark } = useContext(DarkModeContext);
    const { alertDetails, setAlertDetails } = useContext(AlertContext);

    const darkTheme = () => createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
            background: {
                default: isDark ? "#171000" : "#fffae8",
                paper: isDark ? "#fff" : "#000",
            },
            text: {
                primary: isDark ? "#fffae8" : "#171000",
            }
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
        <HelmetProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {/* seo */}
                <Helmet>
                    <title>eliph | Elliot Phua</title>
                    <meta name="description" content="Elliot Phua's Portfolio Site" />
                </Helmet>
                {/* Hero */}
                <div className="flex flex-col justify-center w-full h-fit pb-7">
                    <TitleCard />
                    <div className="flex flex-row flex-wrap bg-inherit">
                        <div className="flex-1 min-container" >
                        </div>
                        <div className="flex-2 min-container max-sm:pl-12">
                            <WorkExpSection />
                            <EducationSection />
                            <ProjectSection />
                        </div>
                    </div>
                    {/* Floating components */}
                    <div className="fixed z-1 bottom-[10%] self-center">
                        <Alert />
                    </div>
                    <div className="flex flex-col fixed z-1 bottom-[6%] right-[3%] gap-3 sm:hidden">
                        <ToTopButton />
                        <DarkModeButton />
                    </div>
                    {/*  */}
                </div>
                <div className="fixed bottom-0 z-1 w-full dark:bg-(--dark-bg) bg-(--bg) border-t-[0.1px]">
                    <NavBar />
                </div>
            </ThemeProvider>
        </HelmetProvider>
    )
}