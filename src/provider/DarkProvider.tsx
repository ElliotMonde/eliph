import { createContext, useEffect, useState } from "react";

export interface DarkModeContextType {
    isDark: boolean;
    toggleDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
}

interface DarkProviderProp {
    children: React.ReactNode;
}
const deviceDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const DarkModeContext = createContext<DarkModeContextType>({ isDark: deviceDarkPreference, toggleDarkMode: () => { } })

export function DarkModeProvider({ children }: DarkProviderProp) {
    const [isDark, setIsDark] = useState<boolean>(deviceDarkPreference);
    const toggleDarkMode = () => {
        setIsDark(!isDark);
    }
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark])
    return (
        <DarkModeContext.Provider value={{ isDark: isDark, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}