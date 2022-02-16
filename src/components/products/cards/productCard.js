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
import './styles.css'

export default function ProductCard(props) {

  const classes = useStyles();
  const dispatch = useDispatch();

  function addToCart(id, e) {
    dispatch(actionAddToCart(id));
    let buttnons = document.querySelectorAll('button');
    for (let i = 0; i < buttnons.length; i++) {
      buttnons[i].classList.remove('btnClicked')
    }
    let clickedBtn = e.currentTarget;
    clickedBtn.classList.add('btnClicked');
  }

  return (<>
    <Box sx={{ minWidth: 230 }} className={classes.box} >
      <Card variant="outlined">
        <Card sx={{ minWidth: 230 }}>
          <CardContent>
            <Link to={`/${props.productId}`}>  <div className={classes.productImg} ><img src={props.productImage} alt={props.productTitle} height='180px' /></div></Link>
            <Typography className={classes.pTitle} variant="h6">
              {props.productTitle}
              <br />
            </Typography>
            <Typography variant="h5" className={classes.pPrice} component="div">
              {props.productPrice}.00$
            </Typography>
            <div aria-label='add to cart' className={classes.cartDiv}><button title='add to cart' onClick={(e) => { addToCart(props.productId, e) }} className={classes.cartIcon}><AddShoppingCartIcon /></button></div>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </>);
}


