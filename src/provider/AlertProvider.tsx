import type { AlertProp } from "../components/Alert";
import { createContext, useState, type ReactNode } from "react";

export interface AlertContextType {
    alertDetails: AlertProp;
    setAlertDetails: React.Dispatch<React.SetStateAction<AlertProp>>;
}

export const AlertContext = createContext<AlertContextType>({
    alertDetails: { icon: null, text: "", isAlert: false, opacity: 0 },
    setAlertDetails: () => {}
});

export function AlertProvider({ children }: { children: ReactNode }) { 
    const [alertDetails, setAlertDetails] = useState<AlertProp>({ icon: null, text: "", isAlert: false, opacity: 0 })
    return (
        <AlertContext.Provider value={{ alertDetails, setAlertDetails }}>
            { children}
        </AlertContext.Provider>
    )
}
