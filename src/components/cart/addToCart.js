import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from './styles'
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
export default function Cart() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ minWidth: 275 }} className={classes.box} >
        <Card variant="outlined">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography className={classes.pTitle} variant="h6">
                Order Summary
                <br />
              </Typography>
              <Typography className={classes.pTitle} variant="h6">
                Total Items:
                <br />
              </Typography>
              <Typography variant="h5" className={classes.pPrice} component="div">
                Total Amount:
              </Typography>
              <div><Button align='center' sx={{ my: 2, color: '#233dff', fontWeight: '400', fontSize: 16, display: 'block' }}>
                Proceed To checkOut
              </Button></div>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </>
  );
}