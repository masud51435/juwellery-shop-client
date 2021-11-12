import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../img/home.png'

const bannerBg = {
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}

const Banner = () => {
  return (
    <Box style={bannerBg}>
      <Container  sx={{mt:8, py:31}}>
      <Box style={{textAlign:'left'}}>
      <Typography variant="h6" gutterBottom component="div" sx={{fontFamily: 'Segoe Script', color:"#FEB564"}}>
        Jewelry Design For Love
        </Typography>
        <Typography variant="h3" gutterBottom component="div" sx={{fontFamily: 'Segoe Script', color:'#07274C'}}>
        Smart Goldshop
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div" sx={{color:"#07274C" ,mb:4}}>
        Experience the decibles like ears deserve to.Safe for the ears, <br /> Very for heart.A treat to your ears.
      </Typography>
        <Button sx={{color:'#FEB564', backgroundColor:'#07274C', borderRadius:'30px', py:2}} variant="contained" size="large">
          Explore More  <i style={{paddingLeft:'10px'}} className="fab fa-opencart"></i>
        </Button>
      </Box>
    </Container>
    </Box>
  );
};

export default Banner;