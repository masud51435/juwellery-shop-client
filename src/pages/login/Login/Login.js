import { Button, Container, TextField, Typography, Alert, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginImg from '../../../img/undraw_Login_re_4vu2.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';
import UseAuth from '../../../context/UseAuth';

const Login = () => {

  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, error } = UseAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value)
  }

  const handleLogin = e => {
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault();
  }

  return (
    <>
      <Navbar></Navbar>
      <Container sx={{ mt: 15 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ my: 9, py: 6, boxShadow: 1, borderRadius: '20px' }} item xs={12} md={6} lg={6}>
              <Typography sx={{ fontWeight: 700, color: '#6C63FF', marginTop: '50px', marginBottom: '40px' }} variant="h5" gutterBottom component="div">
                Login
              </Typography>
              {!isLoading && <form onSubmit={handleLogin}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  name='email'
                  onChange={handleOnChange}
                  variant="standard"
                  sx={{ width: '70%' }}
                />
                <br />
                <TextField
                  id="standard-password-input"
                  label="Your Password"
                  type="password"
                  name='password'
                  onChange={handleOnChange}
                  autoComplete="current-password"
                  variant="standard"
                  sx={{ width: '70%', mb: 3 }}
                />
                <Button type='submit' sx={{ width: '70%', backgroundColor: '#6C63FF' }} variant='contained'>Log In</Button>
                <br />
                <NavLink style={{ textDecoration: 'none', marginBottom: '10px' }} to='/register'>
                  <Button variant='text'>New User? Please Register</Button>
                </NavLink>
              </form>}
              {isLoading && <LinearProgress color="secondary" />}
              {user?.email && <Alert severity="success">Log in sucessfully !!</Alert>}
              {error && <Alert severity="error">{error}</Alert>}
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <img style={{ width: '100%', marginTop: "50px" }} src={loginImg} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Login;