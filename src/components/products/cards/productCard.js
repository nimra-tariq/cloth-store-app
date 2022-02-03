import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStyles } from './styles'
import { useDispatch } from 'react-redux';
import { actionAddToCart } from '../../../store/actions/productActions';

export default function ProductCard(props) {

  const classes = useStyles();
  const dispatch=useDispatch();
  function addToCart(id){
  dispatch(actionAddToCart(id));
  }

  return (<>
    <Box sx={{ minWidth: 275 }} className={classes.box} >
      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Link to={`/${props.productId}`}>  <div className={classes.productImg} ><img src={props.productImage} alt={props.productTitle} height='180px' /></div></Link>
            <Typography className={classes.pTitle} variant="h6">
              {props.productTitle}
              <br />
            </Typography>
            <Typography variant="h5" className={classes.pPrice} component="div">
              {props.productPrice}
            </Typography>
            <div aria-label='add to cart' onClick={()=>{addToCart(props.productId)}} className={classes.cartDiv}><span className={classes.cartIcon}><AddShoppingCartIcon /></span></div>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </>);
}