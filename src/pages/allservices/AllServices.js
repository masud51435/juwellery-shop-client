import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import AllService from '../allservice/AllService';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../home/footer/Footer';

const AllServices = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allProducts')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <>
      <Container sx={{ marginTop: '120px', marginBottom: '60px', textAlign: "center" }}>
        <Box><Navbar></Navbar></Box>
        <Typography sx={{ color: "#FEB564" }} variant="h6" gutterBottom component="div">
          Exclusive Products
        </Typography>
        <Typography sx={{ fontFamily: 'Segoe Script', marginBottom: '40px', color: '#07274C' }} variant="h4" gutterBottom component="div">
          Treading Products
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((product, index) => <AllService
              key={product._id}
              product={product}
            ></AllService>)}
          </Grid>
          <Typography variant="h6" gutterBottom component="div">
          </Typography>

        </Box>
      </Container>
      <Box><Footer></Footer></Box>
    </>
  );
};

export default AllServices;