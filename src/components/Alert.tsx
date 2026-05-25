import { AlertContext } from "../provider/AlertProvider";
import Card from "@mui/material/Card";
import { useContext, useEffect, useState } from "react";

export interface AlertProp { 
    icon: React.ComponentType | null;
    text: string;
    isAlert: boolean;
    opacity: number;
}

export default function Alert() { 
    const { alertDetails } = useContext(AlertContext);
    const [visible, setVisible] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (alertDetails.isAlert) {
            setRender(true);
            const timer = setTimeout(() => setVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
            const timer = setTimeout(() => setRender(false), 500);
            return () => clearTimeout(timer);
        }
    }, [alertDetails.isAlert]);

    if (!render) {
        return null;
    }

    const IconComponent = alertDetails.icon;
    
    const alertStyle: React.CSSProperties = {
        transition: "opacity 0.5s ease-in-out",
        opacity: visible ? 1 : 0,
        padding: 1,
        borderRadius: 2,
    };

    return (
        <Card sx={alertStyle}>
                <div className="flex flex-row items-center gap-2 p-0">
                    {IconComponent && <IconComponent />}
                    <span>{alertDetails.text}</span>
                </div>
        </Card>
    )
}