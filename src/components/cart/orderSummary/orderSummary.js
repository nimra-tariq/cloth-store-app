import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from '../styles';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function OrderSummary() {
  const classes = useStyles();
  const products = useSelector(state => state.productReducer);
  const netBill = useSelector(state => state.netBillReducer)
  // total item selected
  const totalItems = products.filter(item => item.isSelected === true);

  return (
    <>
      <Box sx={{ minWidth: 230 }} className={classes.box} >
        <Card variant="outlined">
          <Card sx={{ minWidth: 230 }}>
            <CardContent>
              <Typography className={classes.pTitle} variant="h4">
                Order Summary
                <br />
              </Typography>
              <Typography className={classes.pTitle} variant="h6">
                Total Items: {totalItems.length}
                <br />
              </Typography>
              <Typography variant="h6" className={classes.pPrice} component="div">
                Total Amount: {netBill.totalBill}.00$
              </Typography>
              {(totalItems.length !== 0) ?
                <Link to='/checkOut'>
                  <Button className={classes.btn} align='center' sx={{ my: 2, backgroundColor: '#233dff', color: '#ffffff', fontWeight: '400', fontSize: 16 }}>
                    Proceed To checkOut
                  </Button>
                </Link> : null
              }
            </CardContent>
          </Card>
        </Card>
      </Box>
    </>
  );
}