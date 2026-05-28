import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';

export default function ToTopButton() {
    const toTop = () => {
        (window as any).isAutoScrollingToTop = true;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        const checkArrival = setInterval(() => {
            if (window.scrollY === 0) {
                (window as any).isAutoScrollingToTop = false;
                clearInterval(checkArrival);
            }
        }, 100);
    }
    return (
        <button className="scale-[1.3] cursor-pointer" onClick={toTop} aria-description='Scroll to top button'><KeyboardCapslockIcon /></button>
    )
}