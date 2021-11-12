import React from 'react';
import Navbar from '../../shared/navbar/Navbar';
import Banner from '../banner/Banner';
import Blog from '../blog/Blog';
import Blogs from '../blogs/Blogs';
import Footer from '../footer/Footer';
import Reviews from '../reviews/Reviews';
import Services from '../services/Services';

const Home = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Blogs></Blogs>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;