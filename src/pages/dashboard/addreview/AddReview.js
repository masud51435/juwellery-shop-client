import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import UseAuth from '../../../context/UseAuth';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuth();
  console.log(user)

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/reviews', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('review added successfully')
          reset();
        }
      })
  };
 

  return (
    <Box sx={{boxShadow: 2 }}>
      <h1 style={{ fontFamily: "Segoe Script", color: "#E96957" }}>add New Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
        <br />
        <input style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })} />
        <br />
        <textarea style={{width:'50%', paddingTop:'10px', paddingBottom:'10px', margin:'20px'}} placeholder="Enter Your Experience" {...register("title")} />
        <br />
        <input style={{width:'50%', paddingTop:'5px', paddingBottom:'5px', margin:'20px'}} type="submit" />
      </form>
    </Box>
  );
};

export default AddReview;