import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {IProductProps} from "./CardTypes";
export default function MultiActionAreaCard(props: IProductProps) {
    const {product} = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={`uploads/${product.imageUrl}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="success">
                    Buy for {product.price}$
                </Button>
                <Button size="small" color="warning">
                    Edit
                </Button>
                <Button size="small" color="error">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}