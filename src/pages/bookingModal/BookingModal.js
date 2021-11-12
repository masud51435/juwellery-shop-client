import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import UseAuth from '../../context/UseAuth';

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

const BookingModal = ({ openBooking, handleBookingClose, singleItem }) => {

  const { user } = UseAuth();

  const initialOrder = { name: user.displayName, email: user.email, phone: '' }

  const [order, setOrder] = useState(initialOrder);


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrder = { ...order };
    newOrder[field] = value;
    setOrder(newOrder);
  }


  const handleBookSubmit = e => {
    const placeOrder = {
      ...order,
      status: 'pending',
      itemName: singleItem.name,
      price: singleItem.price
    }
    fetch('http://localhost:5000/placeOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(placeOrder)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          handleBookingClose();
        }
    })
    e.preventDefault();
  }


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', borderRadius: '20px', border: 'none' }}>
          <Typography id="transition-modal-title" variant="h6" style={{ fontWeight: 700, color: '#13CEDF' }} component="h2">
            {singleItem?.name}
          </Typography>

          <form onSubmit={handleBookSubmit}>
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              defaultValue={singleItem?.price}
              size="small"
            />
            <TextField

              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='name'
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField

              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='email'
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField

              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name='phone'
              onBlur={handleOnBlur}
              defaultValue='Phone Number'
              size="small"
            />

            <Button type="submit" sx={{ width: '40%', m: 1, backgroundColor: '#13CEDF' }} variant="contained">SUBMIT</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;