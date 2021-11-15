import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Testimonial = (props) => {
    console.log(props)
    const {description, name, img, place}=props.testmonial
    return (
        <CardContent>
            <Typography variant="h5" component="div">
                {description}
            </Typography>
        </CardContent>
    );
};

export default Testimonial;