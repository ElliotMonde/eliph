import { useEffect, useRef, type RefObject } from "react";

interface SectionProp {
    id: string;
    children: React.ReactNode;
}
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const ScrollObserver = (sectionRef: RefObject<HTMLDivElement | null>) => {
    if (!sectionRef.current) return;

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -30% 0px",
        threshold: 0,
    };

    let isScrolling = false;


    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if ((window as any).isAutoScrollingToTop) return;
            if (entry.isIntersecting && !isScrolling) {
                isScrolling = true;

                const elementTop = entry.target.getBoundingClientRect().top + window.scrollY;;

                gsap.to(window, {
                    scrollTo: { y: elementTop },
                    duration: 1,
                    ease: "back.out(0.3)",
                    overwrite: "auto",
                    onComplete: () => {
                        isScrolling = false;
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
}
export default function Section({ id, children }: SectionProp) {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        ScrollObserver(sectionRef);
    }, [id]);

    return (
        <div ref={sectionRef} id={id} className="pl-[5%] pr-[5%] pt-[5%] flex-1 min-h-screen">{children}</div>
    )
}