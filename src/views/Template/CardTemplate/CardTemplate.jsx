import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import placeholder from '../../../assets/placeholder/placeholder.jpg';

const CardTemplate = (props) => {
    const { image, name } = props
    const images = {
        placeholder
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={images[image]}
                    alt="sofware developer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <a href="http://www.freepik.com">Designed by studiogstock / Freepik</a>
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardTemplate