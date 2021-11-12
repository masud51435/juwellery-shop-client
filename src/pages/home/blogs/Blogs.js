import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Blog from '../blog/Blog';
import img from '../../../img/parallax.png'

const Bg = {
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allBlogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  return (

    <Box sx={{ flexGrow: 1, py:7, my:10 }} style={Bg}>
      <Container >
        <Typography sx={{ color: "#FEB564" }} variant="h6" gutterBottom component="div">
        Recent Story
        </Typography>
        <Typography sx={{ fontFamily: 'Segoe Script', marginBottom: '40px', color: '#07274C' }} variant="h4" gutterBottom component="div">
        From The Blog
        </Typography>
        <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {blogs.map((blog, index) => <Blog
            key={blog._id}
            blog={blog}
          ></Blog>)}
        </Grid>
        <Typography variant="h6" gutterBottom component="div">
        </Typography>
      </Container>
    </Box>

  );
};

export default Blogs;