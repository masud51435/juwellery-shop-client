import React, { useEffect, useState } from 'react';
import UseAuth from '../../../context/UseAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MyOrder = () => {
  const { user } = UseAuth();
  const [myorder, setMyorder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myorder?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyorder(data));
  }, [myorder]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete');
    if (proceed) {
      fetch((`http://localhost:5000/order/${id}`), {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount) {
            const remaining = myorder.filter(order => order._id !== id)
            setMyorder(remaining);
          }
        })
    }
  }


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  

  return (
    <>
      <Typography variant="h4" gutterBottom component="div" sx={{fontFamily: 'Segoe Script', color:'#07274C', mx:2}}>
        My Order List 
      </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ mx:'auto' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Buyer</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Order Cancel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myorder.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell component="th" scope="row">
                {order.itemName}
              </StyledTableCell>
              <StyledTableCell align="right">{order.name}</StyledTableCell>
              <StyledTableCell align="right">$ {order.price}.00</StyledTableCell>
              <StyledTableCell align="right">{order.email}</StyledTableCell>
              <StyledTableCell align="right">{order.status}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() => handleDelete(order._id)}
              ><DeleteIcon />CANCEL</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </>
  );
};

export default MyOrder;