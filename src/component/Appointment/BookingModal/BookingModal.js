import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/UseAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose , booking, date, setBookingSuccess}) => {
    const {name, time, price} = booking
    const {user} = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.emial, phone: ''}
    const [bookingInfo, setbookingInfo]= useState(initialInfo)

    const handleOnBlur= e => {
      const field = e.target.name
      const value = e.target.value
      const newInfo = { ...bookingInfo };
      newInfo[field] = value;
      console.log(newInfo)
      setbookingInfo(newInfo)

    }

    const handleBookingSubmit = e => {
      e.preventDefault();
        // collect data
        const appointment = {
          ...bookingInfo,
          time,
          price,
          serviceName : name,
          date : date.toLocaleDateString()
        }
        
        console.log(appointment)

        // send to the server
        fetch('http://localhost:5000/appointments', {
          method: 'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body : JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            setBookingSuccess(true);
            handleBookingClose()
          }
        });


        // alert('submiting')
        
       
    }
      
    return (
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <form onSubmit={handleBookingSubmit} >
           
        <TextField
        disabled
        sx={{width: '90%', m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
        <TextField 
        sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
        <TextField 
        sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
        <TextField 
        sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          defaultValue="Phone Number"
          size="small"
        />
        <TextField 
        disabled
        sx={{width: '90%', m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="contained">Submit</Button>

           </form>
          </Typography>
        </Box>
      </Modal>
    );
};

export default BookingModal;