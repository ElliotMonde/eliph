import { DarkModeContext } from "../provider/DarkProvider";
import { useContext } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';

export default function DarkModeButton() {
    const { toggleDarkMode } = useContext(DarkModeContext);

    return (
        <button className="cursor-pointer" onClick={() => toggleDarkMode(null)}>
            <Brightness4Icon />
        </button>
    )
}