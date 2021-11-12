import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { name, price, img, _id } = props.product;
  return (

      <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, textAlign:'center', mx:'auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{width:"100%", height:'auto'}}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              $ {price}.00
            </Typography>
            <Link style={{textDecoration:'none'}} to={`/buynow/${_id}`}>
            <Button variant="outlined">BUY NOW <i style={{ paddingLeft: '5px' }} className="fas fa-arrow-right"></i></Button>
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Service;