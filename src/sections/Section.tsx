import { useEffect, useRef, type RefObject } from "react";

interface SectionProp {
    id: string;
    childrenClass: string;
    children: React.ReactNode;
}
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const ScrollObserver = (sectionRef: RefObject<HTMLDivElement | null>, childrenClass?: string, id?: string) => {
    if (!sectionRef.current) return;

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -30% 0px",
        threshold: 0,
    };

    let isScrolling = false;


    const targets = sectionRef.current.querySelectorAll(`.${childrenClass}`);
    if (targets && id) {
        gsap.to(targets, {
            delay: 0.3,
            y: 10,
            duration: 0.3,
            yoyo: true,
            stagger: 0.05,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                toggleActions: "restart restart restart restart",
            },
        });
    };

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
export default function Section({ id, childrenClass, children }: SectionProp) {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        ScrollObserver(sectionRef, childrenClass, id);
    }, [id]);

    return (
        <div ref={sectionRef} id={id} className="pl-[5%] pr-[5%] pt-[5%] flex-1 min-h-screen">{children}</div>
    )
}