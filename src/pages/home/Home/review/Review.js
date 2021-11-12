import { Grid, IconButton } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '../../../dashboard/Dashboard/rating/Rating'

const Review = (props) => {
  const { name, email, title, _id } = props.review;
  return (

    <Grid item xs={4} sm={4} md={6}>
      <Card sx={{ minWidth: 275, mx: 'auto' }}>
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <IconButton>
            <Rating></Rating>
          </IconButton>
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {email}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;