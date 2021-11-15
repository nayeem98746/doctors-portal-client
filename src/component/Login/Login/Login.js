import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../Hooks/UseAuth'

const Login = () => {
    const [loginData, setLoginData ] = useState({})
    const {user, loginUser, isLoading,singInWithGoogle, authError} = useAuth()

    const location = useLocation();
    const history = useHistory()



    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        console.log(newLoginData)
        newLoginData[field] = value
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSingIn = () => {
        singInWithGoogle(location, history)
    }


    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item sx={{mt:10}}  xs={12} md={6}>
  <Typography variant="body1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField
      sx={{width: '75%' , m:1}}
       id="standard-basic"
        label="Your Email"
        name="email"
        onChange={handleOnChange}
         variant="standard"
          />
      <TextField
       sx={{width: '75%' , m:1}}
       id="standard-basic"
        label="Your Password"
        type="password"
        name="password"
        onChange={handleOnChange}
         variant="standard"
          />
          
          <Button sx={{width:'75%' }} type="submit"
          variant="contained" >Login</Button>
        <NavLink style={{textDecoration:'none'}} to="/register">
          <Button variant="text">New user? Please Register</Button>

          </NavLink>
          {isLoading && <CircularProgress/>}
      {user?.email && <Alert
       severity="success">User Created Successfuly!</Alert>}
      
      {authError && <Alert severity="error">{authError}</Alert>
 }
      </form>
      <p>---------------------</p>
      <Button onClick={handleGoogleSingIn}  variant="contained">Google Sign In</Button>
  </Grid>
  <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={login} alt="" />
  </Grid>
</Grid>
        </Container>

    );
};

export default Login;
