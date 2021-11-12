import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Service from '../service/Service';
import { Link } from 'react-router-dom';


const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (

    <Box sx={{ flexGrow: 1, }}>
      <Container sx={{ marginTop: '80px', marginBottom: '60px' }}>
        <Typography sx={{ color: "#FEB564" }} variant="h6" gutterBottom component="div">
          Exclusive Products
        </Typography>
        <Typography sx={{ fontFamily: 'Segoe Script', marginBottom: '40px', color: '#07274C' }} variant="h4" gutterBottom component="div">
          Treading Products
        </Typography>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {products.map((product, index) => <Service
            key={product._id}
            product={product}
          ></Service>)}
        </Grid>
        <Typography variant="h6" gutterBottom component="div">
        </Typography>
        <Link style={{ textDecoration: 'none' }} to='/allservices'>
        </Link>
      </Container>
    </Box>

  );
};

export default Services;