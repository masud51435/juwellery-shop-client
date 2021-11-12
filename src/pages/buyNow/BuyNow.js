import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../home/footer/Footer';
import BookingModal from '../bookingModal/BookingModal';

const BuyNow = () => {
  const { buyId } = useParams();

  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = React.useState([]);
  

  useEffect(() => {
    fetch('http://localhost:5000/allProducts')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);


  useEffect(() => {
    const foundItem = items.find(item => item._id == buyId)
    setSingleItem(foundItem)
  }, [items]);


  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Card sx={{ maxWidth: 345, my: 10, mt: 20, mx:'auto' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={singleItem?.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {singleItem?.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                $ {singleItem?.price}.00
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Link style={{ textDecoration: 'none' }} to='/home'>
                      <Button variant="outlined">Go Back <i style={{ paddingLeft: '5px', textAlign: 'left' }} className="fas fa-arrow-right"></i></Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6} md={6}>
                      <Button onClick={handleBookingOpen} variant="outlined">Add cart <i style={{ paddingLeft: '5px' }} className="fas fa-arrow-right"></i></Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <Footer></Footer>
      <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        singleItem={singleItem}
      ></BookingModal>
    </>
  );
};

export default BuyNow;