import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import appointment from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

const appointmentBanner ={
    background : `url(${appointment }`,
    backgroundColor:`rgba(45, 58, 74, .9)`,
    backgroundBlendMode:`darken, luminosity`,
    marginTop:175
}

const AppointmentBanner = () => {
    return (
      <Container>
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:400, marginTop:"-110px"}}
            src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={
            
            {display:'flex',
             justifyContent: 'flex-start', 
            textAlign:'left', 
            alignItems:'center'
          }}>
          <Box>
          <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
              Appointment

          </Typography>
          <Typography variant="h4" style={{color:'white'}} >
             Make an  Appointment Today

          </Typography>
          <Typography variant="h6"  sx={{mb:5}} style={{color:'white', fontSize:14, fontWeight:300}}>
            It is a long established fact that  a rander will be distractedby the readable content of a page when looking at it's

          </Typography>
          <Button  variant="contained" style={{backgroundColor:'#5CE7ED'}} >Learn More</Button>
          </Box>
         </Grid>
          
        </Grid>
      </Box>
      </Container>
    );
};

export default AppointmentBanner;