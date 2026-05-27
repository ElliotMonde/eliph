import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';

export default function ToTopButton() { 
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <button className="scale-[1.3] cursor-pointer" onClick={toTop} aria-description='Scroll to top button'><KeyboardCapslockIcon/></button>
    )
}