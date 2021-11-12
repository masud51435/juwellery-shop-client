import { Button, Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../img/Na_June_69.jpg'

const NotFound = () => {
  return (
    <Container>
      <img style={{ width: '100%', marginTop: "50px" }} src={notFound} alt="" />
      <NavLink to='/home'><Button variant="outlined">Home</Button></NavLink>
    </Container>
  );
};

export default NotFound;