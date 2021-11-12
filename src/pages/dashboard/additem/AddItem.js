import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/product', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('product added successfully')
          reset();
        }
      })
  };


  return (
    <Box sx={{boxShadow: 2 }}>
      <h1 style={{ fontFamily: "Segoe Script", color: "#E96957" }}>add New product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} placeholder="Enter Product Name" {...register("name", { required: true, maxLength: 20 })} />
        <br />
        <input style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} type='number' placeholder="Enter Product price" {...register("price")} />
        <br />
        <input style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} placeholder="Enter your URL" {...register("img")} />
        <br />
        <input style={{width:'50%', paddingTop:'5px', paddingBottom:'5px', margin:'20px'}} type="submit" />
      </form>
    </Box>
  );
};

export default AddItem;