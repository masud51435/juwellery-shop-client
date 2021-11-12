import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Service from '../service/Service';
import { Link } from 'react-router-dom';
import Review from '../Home/review/Review';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allreviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (

    <Box sx={{ flexGrow: 1, }}>
      <Container sx={{ marginTop: '80px', marginBottom: '60px' }}>
        <Typography sx={{ color: "#FEB564" }} variant="h6" gutterBottom component="div">
          EXPLORE THE AWESOME
        </Typography>
        <Typography sx={{ fontFamily: 'Segoe Script', marginBottom: '40px', color: '#07274C' }} variant="h4" gutterBottom component="div">
          What Client Says
        </Typography>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {reviews.map((review, index) => <Review
            key={review._id}
            review={review}
          ></Review>)}
        </Grid>
        <Typography variant="h6" gutterBottom component="div">
        </Typography>
        <Link style={{ textDecoration: 'none' }} to='/allservices'>
        </Link>
      </Container>
    </Box>

  );
};

export default Reviews;