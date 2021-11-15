import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'8:00AM - 9:00AM',
        price: 20,
        space:10
    },
    
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10:05AM - 11:30AM',
        price: 15,
        space:8
    },
    
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5:00AM - 6:30AM',
        price: 17,
        space:8
    },
    
    {
        id:4,
        name:'Cavity Protection',
        time:'7:00AM - 8:30AM',
        price: 19,
        space:10
    },
    
    {
        id:5,
        name:'Pediatric Dental',
        time:'6:00AM - 07:00AM',
        price: 25,
        space:10
    },
    
    {
        id:6,
        name:'Oral Surgery',
        time:'7:00AM - 8:00AM',
        price: 35,
        space:10
    },
    
]




const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main' ,mb:3  }}  >Available Appointmtent on: {date.toDateString()}</Typography>
            {bookingSuccess && <Alert
       severity="success">Appointment Booked  Successfuly!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
  
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;