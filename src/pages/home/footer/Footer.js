import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#F9F9F9', py: 11 }}>
        <Container>
          <img src="https://cdn.shopify.com/s/files/1/0051/9159/8198/files/ghona-logo_125x.png?v=1622866351" alt="" />
          <Typography sx={{ py: 2 }} variant="subtitle1" gutterBottom>
          Find Best Jewelry Stores In Usa. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.The online shop proves that extravagant jewellery and watches do not have to be unaffordable.
          </Typography>
          <Box>
            <i style={{ margin: "15px" }} className="fab fa-facebook-square fa-lg"></i>
            <i style={{ margin: "15px" }} className="fab fa-twitter-square fa-lg"></i>
            <i style={{ margin: "15px" }} className="fab fa-pinterest-square fa-lg"></i>
            <i style={{ margin: "15px" }} className="fab fa-instagram-square fa-lg"></i>
          </Box>
        </Container>
      </Box>
      <Box sx={{ width: '100%', backgroundColor: 'black', py: 2, color: 'white' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} lg={6}>
              <Typography variant="body1" gutterBottom component="div">
                Copyright © 2021 Sahariyar Project
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box>
            <img alt="" src="https://img.icons8.com/color/48/000000/visa.png"/>
            <img alt="" src="https://img.icons8.com/color/48/000000/mastercard.png"/>
            <img alt="" src="https://img.icons8.com/color-glass/48/000000/paypal.png"/>
              <img alt="" src="https://img.icons8.com/fluency/48/000000/amex.png" />
          
          </Box>
            </Grid>
          </Grid>
        </Box>
    </>
  );
};

export default Footer;