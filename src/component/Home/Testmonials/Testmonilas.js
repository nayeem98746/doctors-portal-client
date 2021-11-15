import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../images/people-1.png'
import img2 from '../../../images/people-2.png'
import img3 from '../../../images/people-3.png'
import Testimonial from '../Testimonial/Testimonial';

const testmonialData = [
    {
        description:'It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal distribu to using Content here , content',
        img:{img1},
        name:'Winson Herry',
        place:'California'
    },
    {
        description:'It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal distribu to using Content here , content',
        img:{img2},
        name:'Winson Herry',
        place:'California'
    },
    {
        description:'It is a long established fact that by the readable content of a lot layout . The point of using lorem a more-or-less normal distribu to using Content here , content',
        img:{img3},
        name:'Winson Herry',
        place:'California'
    },
]



const Testmonilas = () => {
    return (
      <Container  style={{marginTop:'100px'}} >
          <Typography style={{textAlign:'left'}} sx={{ fontWeight: 'bold' }} variant="h6">
            TESTMONIAL
          </Typography>
          <Typography style={{textAlign:'left'}} sx={{ fontWeight: '300' }} variant="h4">
            What's Our Patients Says
          </Typography>
            <Grid container spacing={{xs: 2, md: 3}}
            columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                  testmonialData?.map(testmonial => <Testimonial
                    key = {testmonial.key}
                    testmonial= {testmonial}
                    ></Testimonial>)
                }

            </Grid>

      </Container>
    );
};

export default Testmonilas;