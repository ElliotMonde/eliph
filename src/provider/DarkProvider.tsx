import { createContext, useEffect, useState } from "react";

export interface DarkModeContextType {
    isDark: boolean;
    toggleDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const DarkModeContext = createContext<DarkModeContextType>({ isDark: true, toggleDarkMode: () => { } })

export function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useState<boolean>(true);
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