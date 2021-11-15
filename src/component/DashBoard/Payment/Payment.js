import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51JvlaCChr92zkNjDrq9IWsxbTHEmS5eMDZnIvcG3Wiy9oG8JkUv2J7q7M6mLKoQEBB394VvhgLsJvlbjyRfvaATm00Plhjbli4')


const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect( () => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    } ,[appointmentId])
    return (
        <div>
            <h2>Please pay for :{appointment.patientName}for {appointment.serviceName} </h2>
            <h4>pay : ${appointment.price}</h4>
            {/* <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements> */}
            
        </div>
    );
};

export default Payment;