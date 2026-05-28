import { createContext, useState } from "react";
import { navTab, type NavTabProp } from "../data/navTab";

export interface NavContextType {
    currentSection: NavTabProp;
    setCurrentSection: React.Dispatch<React.SetStateAction<NavTabProp | null>>;
}

export const observerListener = (id) => { 
    const target = document.getElementById(id);
    const observerCallback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) return entry.target.id;
        });
    }
    const observer = new IntersectionObserver(observerCallback, { root: null, threshold: 0.1 })
    observer.observe(target)
}

// export const NavContext = createContext<NavContextType>({ currentSection: navTab[0], setCurrentSection: () => { } });
// export function NavProvider({ children }: { children: React.ReactNode }) {
//     const [currentNav, setCurrentNav] = useState<NavTabProp>(navTab[0]);
//     const setCurrentSection = (currentTab: NavTabProp) => {
//         setCurrentNav(currentTab);
//     }
//     return (
//         <NavContext.Provider value={{ currentSection: currentNav, setCurrentSection }}>
//             {children}
//         </NavContext.Provider>
//     )
// }
