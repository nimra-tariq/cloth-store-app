
import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from '../../cart/styles';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

const PlaceOrder = (props) => {

  const classes = useStyles();
  const products = useSelector(state => state.productReducer);
  const netBill = useSelector(state => state.netBillReducer)
  const user = useSelector(state => state.userReducer)
  const productSelected = products.filter(p => p.isSelected === true);

  return <div >
    <Box sx={{ minWidth: 230 }}  >
      <Card variant="outlined">
        <Card sx={{ minWidth: 230 }}>
          <CardContent>
            <Typography className={classes.title} variant="h4">
              Place Order
              <br />
            </Typography>
            <table className="table table table-hover table-striped">
              <thead className="thead-dark">
                <tr className={classes.pPrice} >
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
            <div className="d-flex justify-content-between mt-20" >
              <div>Delivery Charges</div><div>Free</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className={classes.pPrice}>Total</div><div className={classes.pPrice}>$ {netBill.totalBill}.00</div>
            </div>
          </CardContent>
        </Card>
      </Card>

      <Card variant="outlined">
        <Card sx={{ minWidth: 230 }} >
          <CardContent>
            <Typography className={classes.title} variant="h5">
              Shipping Details
              <br />
            </Typography>
            <div className={classes.pTitle}  >
              Payment Method : <span className={classes.pPrice}>Cash on delivery</span>
            </div>
            <div>{user.uname} {user.uaddress} {user.country} {user.uemail}</div>
          </CardContent>
        </Card>
      </Card>
    </Box>
    <div className={classes.btnMargin}>
    <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit" onClick={props.handleNext}>
      Place Order
    </Button>
    </div>
  </div>;
};

export default PlaceOrder;
