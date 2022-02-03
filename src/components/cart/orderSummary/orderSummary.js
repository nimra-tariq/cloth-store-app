import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from '../styles';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

export default function OrderSummary() {
  const classes = useStyles();
  const products = useSelector(state => state.productReducer);
  const totalItems = products.filter(item => item.isSelected === true);
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
                Total Items:{totalItems.length  }
                <br />
              </Typography>
              <Typography variant="h5" className={classes.pPrice} component="div">
                Total Amount:
              </Typography>
              <Button className={classes.btn} align='center' sx={{ my: 2,backgroundColor:'#233dff' ,color: '#ffffff', fontWeight: '400', fontSize: 16 }}>
                Proceed To checkOut
              </Button>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </>
  );
}