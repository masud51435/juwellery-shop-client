import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';
import login from '../../../img/Mobile-login.jpg'
import UseAuth from '../../../context/UseAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, error } = UseAuth();
  

  const history = useHistory();


  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    console.log(newLoginData)
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLogin = e => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password didn't match")
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name, history)
    e.preventDefault();
  }
  return (
    <>
      <Navbar></Navbar>
      <Container sx={{ mt: 13 }}>
        <Grid container spacing={2}>
          <Grid sx={{ my: 9, py: 6, boxShadow: 1, borderRadius: '20px' }} item xs={12} md={6}>
            <Typography sx={{ fontWeight: 700, color: '#FF4F5A', marginTop: '50px', marginBottom: '40px' }} variant="h5" gutterBottom component="div">
              Register
            </Typography>
            {!isLoading && <form onSubmit={handleLogin}>
              <TextField
                id="standard-basic"
                label="Your Name"
                type='text'
                name='name'
                onBlur={handleOnChange}
                variant="standard"
                sx={{ width: '70%' }}
              />
              <br />
              <TextField
                id="standard-basic"
                label="Your Email"
                type='email'
                name='email'
                onBlur={handleOnChange}
                variant="standard"
                sx={{ width: '70%' }}
              />
              <br />
              <TextField
                id="standard-password-input"
                label="Your Password"
                type="password"
                name='password'
                onBlur={handleOnChange}
                autoComplete="current-password"
                variant="standard"
                sx={{ width: '70%' }}
              />
              <br />
              <TextField
                id="standard-password-input"
                label="Retype Your Password"
                type="password"
                name='password2'
                onBlur={handleOnChange}
                autoComplete="current-password"
                variant="standard"
                sx={{ width: '70%', mb: 3 }}
              />
              <br />
              <Button type='submit' sx={{ width: '70%', backgroundColor: '#FF4F5A' }} variant='contained'>Register</Button>
              <br />
              <NavLink style={{ textDecoration: 'none', marginBottom: '10px' }} to='/login'>
                <Button variant='text'>Already Register ?Please Login</Button>
              </NavLink>
            </form>}
            {isLoading && <LinearProgress color="secondary" />}
            {user?.email && <Alert severity="success">Sign in sucessfully !!</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={login} style={{ width: '100%', }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;