import { month, type Experience } from '../data/experience'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const cardStyle: React.CSSProperties = {
    background: 'none',
    color: 'white',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: '0px'
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
            <CardContent>
                <Typography>
                    <h2>{company}</h2>
                </Typography>
                <Typography>
                    <p>{role}</p>
                </Typography>
                <Typography>
                    <span>{`${month[startDate.month]} ${startDate.year} - ${endDate}`}</span>
                </Typography>
                <Typography>
                    <span>{location}</span>
                </Typography>
                <Typography>
                    <span>{description}</span>
                </Typography>
            </CardContent>
        </Card>
    )
}