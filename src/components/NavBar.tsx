import { useEffect, useState } from "react";
import { navTab, type NavTabProp } from "../data/navTab";
import ToTopButton from "./ToTopButton";
import DarkModeButton from "./DarkModeButton";

export default function NavBar() {
    const [currentSection, setCurrentSection] = useState(navTab[0].target)
    const scrollToTab = (target: string) => {
        (window as any).isAutoScrollingToTop = true;
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        const checkArrival = setInterval(() => {
            if (window.scrollY === 0) {
                (window as any).isAutoScrollingToTop = false;
                clearInterval(checkArrival);
            }
        }, 100);
        setCurrentSection(target);
    }
    const tab = ({ name, target }: NavTabProp, ind: number) => (
        <span key={`${target}-${ind}`} onClick={() => scrollToTab(target)} className={`
            ${currentSection == target ? "font-black" : ""}
            cursor-pointer hover-underline`}>{name}</span>
    );

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -80% 0px",
            threshold: 0.2,
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        navTab.forEach((tab) => {
            const element = document.getElementById(tab.target);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (<div className={`caption flex flex-row max-md:justify-center gap-6 py-2 max-md:mx-0 mx-4 w-full`} >
        {navTab.map((t: NavTabProp, ind: number) => tab(t, ind))}
        <div className="absolute right-5 flex flex-row gap-2 max-sm:hidden">
            <ToTopButton />
            <DarkModeButton />
        </div>
    </div >
    )
}