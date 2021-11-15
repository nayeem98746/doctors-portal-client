import React from 'react';
import Grid from '@mui/material/Grid';

import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container} from '@mui/material';
import { Box } from '@mui/system';
// import bg from '../../../images/'

const bannerbg ={
    background:`url(${bg})`
}

const varticalCenter = {
    display:'flex',
    alignItems:'center',
    height:400

    
}


const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...varticalCenter , textAlign:'left'}} xs={12} md={6}>
           <Box>
           <Typography variant="h3">
            Your New Smile <br />
            Starts Here
            </Typography>
            <Typography variant="h6" sx={{fontSize:14, my:3, fontWeight:300, color:'gray'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum veniam obcaecati, eum inventore quasi vel voluptatem sed excepturi neque?
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>GET APPOINTMENT</Button>
           </Box>
          </Grid>
          <Grid item xs={12} md={6} style={varticalCenter}>
          <img style={{width:'350px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;