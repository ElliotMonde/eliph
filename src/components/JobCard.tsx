import { month, type Experience } from '../data/experience'
import Card from '@mui/material/Card'
import TextType from './typography/TextType'
import { useState } from 'react'

export default function JobCard({
    company,
    role,
    startDate,
    endDate,
    location,
    description,
    logo,
}: Experience) {
    const [isHover, setIsHover] = useState<boolean>(false);
    const cardStyle: React.CSSProperties = {
        background: 'none',
        border: "none",
        display: "flex",
        flex: "flex-col",
        paddingLeft: "3%",
        paddingTop: "2%",
        paddingBottom: "2%",
        gap: 10,
        transition: "translate 0.5s ease-in-out",
        translate: isHover? "0px -8px" : "",
    }
    const logoStyle: React.CSSProperties = {
        background: 'none',
        borderRadius: "10%",
        maxWidth: "60px",
        maxHeight: "60px",
        overflow: "hidden",
        alignSelf: "top",
        marginTop: "1%",
    }
    return (
        <Card elevation={isHover ? 1 : 0 } style={cardStyle} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false)}}>
            <Card style={logoStyle}>
                <img className="aspect-1/1 object-cover w-full h-full drop-shadow-sm" src={logo} />
            </Card>
            <div className='flex flex-col ml-[2%] mr-[2%] w-[80%]'>
                <TextType text={company} theme='h3' />
                <TextType text={role} theme="caption" />
                <TextType text={`${month[startDate.month]} ${startDate.year} - ${typeof endDate == "string" ? endDate : `${month[endDate.month]} ${endDate.year}`}`} theme="date" />
                <TextType text={location} theme="date" />
                {description.map((txt, ind) =>
                    <TextType key={company + ind} text={txt} theme="body" />
                )}
            </div>
        </Card>
    )
}