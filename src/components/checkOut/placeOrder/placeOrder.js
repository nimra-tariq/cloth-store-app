
import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from '../styles'
import { useSelector } from 'react-redux';


const PlaceOrder = () => {
  const classes = useStyles();
  const products = useSelector(state => state.productReducer);
  const netBill = useSelector(state => state.netBillReducer)
  const user=useSelector(state=>state.userReducer)
  const productSelected = products.filter(p => p.isSelected === true);

  return <div className='container'>
    <Box sx={{ minWidth: 275 }} className={classes.box} >
      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography className={classes.title} variant="h4">
              Place Order
              <br />
            </Typography>
            <table className="table table table-hover table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"><h6>#</h6></th>
                  <th scope="col"><h6>Product Name</h6></th>
                  <th scope="col"><h6>Quantity</h6></th>
                  <th scope="col"><h6>Price</h6></th>
                </tr>
              </thead>
              <tbody >
                {productSelected.map((product, i) => {
                  return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{product.productTitle}</td>
                    <td>{product.quantity}</td>
                    <td>{product.productPrice}</td>
                  </tr>
                })
                }
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <div>Delivery Charges</div><div>Free</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>Total</div><div>$ {netBill.totalBill}.00</div>
            </div>
          </CardContent>
        </Card>
      </Card>

      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }} >
          <CardContent>
            <Typography className={classes.title} variant="h5">
              Shipping Details
              <br />
            </Typography>
            <div className={classes.pTitle}  >
              Payment Method:Cash on delivery
            </div>
            <div>{user.uname} {user.uaddress} {user.country} {user.uemail}</div>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </div>;
};

export default PlaceOrder;
