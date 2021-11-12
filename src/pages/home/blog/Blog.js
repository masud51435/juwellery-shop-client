import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const Blog = (props) => {
  const { name, title, img, by } = props.blog;
  return (

    <Grid item xs={4} sm={4} md={4}>
      <Box sx={{ maxWidth: 345, mx:'auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: "100%", height: 'auto' }}
            image={img}
            alt="green iguana"
          />
          <CardContent style={{textAlign:'left'}}>
          <Typography sx={{color:'#8F8E8D'}} variant="body1" gutterBottom>
             by: {by}
            </Typography>
            <Typography sx={{fontWeight:'700'}} gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{color:'#8F8E8D'}} gutterBottom variant="body2" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Grid>
  );
};

export default Blog;