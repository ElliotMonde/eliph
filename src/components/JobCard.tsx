import { month, type Experience } from '../data/experience'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextType from './typography/TextType'

const cardStyle: React.CSSProperties = {
    background: 'none',
    color: 'white',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: '0px',
}

export default function JobCard({
    company,
    role,
    startDate,
    endDate,
    location,
    description,
}: Experience) {
    return (
        <Card style={cardStyle}>
            <CardContent className='ml-[2%] mr-[2%] w-[80%]'>
                <TextType text={company} theme='h3' />
                <TextType text={role} theme="caption" />
                <TextType text={`${month[startDate.month]} ${startDate.year} - ${typeof endDate == "string" ? endDate : `${month[endDate.month]} ${endDate.year}`}`} theme="date" />
                <TextType text={location} theme="date" />
                {description.map((txt, ind) =>
                    <TextType key={company + ind} text={txt} theme="body" />
                )}
            </CardContent>
        </Card>
    )
}