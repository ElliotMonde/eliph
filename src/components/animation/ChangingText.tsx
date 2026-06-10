import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

export default function ChangingText() {
    const wordsRef = useRef<HTMLSpanElement>(null);
    const activeTlRef = useRef<gsap.core.Timeline | null>(null);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const name = "Elliot!";
    const occupations = ["a SWE!", "an Artist!", "a Designer!", "an Explorer!", "Elliot!"];

    const triggerAnimation = (roles: string[]) => {

        if (isAnimating) return;
        setIsAnimating(true);
        const tl = gsap.timeline({
            onComplete: () => {
                setIsAnimating(false);
            }
        });
        activeTlRef.current = tl;
        tl.set(wordsRef.current, { text: "" });

        roles.slice(0, -1).forEach((word, _) => {
            tl
                .to(wordsRef.current, {
                    duration: word.length * 0.06,
                    text: { value: word, delimiter: "" },
                    ease: "none"
                })
                .to({}, { duration: 1.6 })
                .to(wordsRef.current, {
                    duration: word.length * 0.04,
                    text: { value: "", delimiter: "" },
                    ease: "none"
                })

        });
        tl
            .to(wordsRef.current, {
                duration: name.length * 0.06,
                text: { value: name, delimiter: "" },
                ease: "none"
            })
            .to({}, { duration: 1.6 })
    };

    const triggerIntroAnimation = () => {
        const introSequence = [name, ...occupations];
        triggerAnimation(introSequence);
    };

    useEffect(() => {
        triggerIntroAnimation();
        // Cleanup reference bounds on unmount
        return () => {
            if (activeTlRef.current) activeTlRef.current.kill();
        }
    }, [])

    return (
        <span className="header">
            Hi, I'm{" "}
            <span className={`header cursor-crosshair transition-all duration-300 ${isAnimating ? " text-indigo-400" : "text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 hover:brightness-125"}`} onMouseEnter={() => {
                if (isAnimating) return;
                triggerAnimation(occupations);
            }}>
                <span ref={wordsRef}></span>
            </span>
        </span>
    )
}