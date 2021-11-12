import { Alert, Button, Container, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UseAuth from '../../../context/UseAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [sucess, setSucess] = useState(false);
  const { isLoading } = UseAuth();

  const handleOnChange = e => {
    setEmail(e.target.value);
    
  }

  const handleAdmin = e => {
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {       
          e.target.reset();
          setSucess(true);
          

        }

      })

    e.preventDefault();
  }
  return (
    <Container sx={{ boxShadow: 1, py: 2, my: 3 }}>
      <Typography variant="h4" gutterBottom component="div" sx={{fontFamily: 'Segoe Script', fontWeight: 'bold'}}>Admin Panel</Typography>
      {!isLoading && <form onSubmit={handleAdmin}>
        <TextField
          id="standard-basic"
          label="Your Email"
          type="email"
          name='email'
          onChange={handleOnChange}
          variant="standard"
          sx={{ width: '60%' }}
        />
        <Button type='submit' sx={{ width: '60%', my: 2, backgroundColor: '#6C63FF' }} variant='contained'>Make Admin</Button>
      </form>}
      {isLoading && <LinearProgress color="secondary" />}
      {sucess && <Alert severity="success">Admin create sucessfully !!</Alert>}
    </Container>
  );
};

export default MakeAdmin;