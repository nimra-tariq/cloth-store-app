import { useSelector } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid } from '@material-ui/core';
import { useStyles } from "../styles";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import { useDispatch } from "react-redux";
import { actionRemoveFromCart } from "../../../store/actions/productActions";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { actionEmptyCart } from "../../../store/actions/productActions";
import { actiondecrementItem } from "../../../store/actions/productActions";
import { actionIncrementItem } from "../../../store/actions/productActions";
import { actionAddBill } from "../../../store/actions/netBillActions";
import { useEffect } from "react";

export default function ProductsAddedToCart() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer);
    const productSelected = products.filter(p => p.isSelected === true);
    const classes = useStyles();
    let totalBill = 0;
    productSelected.forEach(item => {
        totalBill = totalBill + (item.productPrice * item.quantity)
    })

    useEffect(() => {
        //will be called when totalBill is calculated everytime useSelector returns val comp is rendered and useeffect is called
        dispatch(actionAddBill(totalBill));
    }, [totalBill]);

    //function to remove item from cart
    function removeFromCart(id) {
        dispatch(actionRemoveFromCart(id));
    }
    //function to empty Cart
    function emptyCart() {
        dispatch(actionEmptyCart());
    }
    //increment in product quantity
    function addItem(id) {
        dispatch(actionIncrementItem(id))
    }
    //decrement in product quantity
    function subtractItem(id) {
        dispatch(actiondecrementItem(id))
    }
    return <>{
        //if the products array containe products show selctedProducts else show nothing
        (productSelected.length) ?
            <>
                <div aria-label='add to cart' title="empty cart" onClick={emptyCart} className={classes.cartDiv}><span className={classes.cartIcon}><RemoveShoppingCartIcon fontSize="large" /></span></div>
                <div className="container">
                    <Typography className={classes.newArrival} variant="h4">
                        Your Products
                        <br />
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {productSelected.map((product, i) => {
                            return <Grid item key={i} elevation={10} xs={12} sm={12} md={6}>
                                <Box sx={{ minWidth: 230 }} className={classes.box} >
                                    <Card variant="outlined">
                                        <Card sx={{ minWidth: 230 }}>
                                            <div aria-label='Remove Product' title="remove from cart" className={classes.removeIconDiv}><span className={classes.removeIcon}><CancelIcon onClick={() => { removeFromCart(product.productId) }} /></span></div>
                                            <CardContent>
                                                <div className={classes.productImg} ><img src={product.productImage} alt={product.productTitle} height='180px' /></div>
                                                <Typography className={classes.pTitle} variant="h6">
                                                    {product.productTitle}
                                                    <br />
                                                </Typography>
                                                <Typography variant="h5" className={classes.pPrice} component="div">
                                                    {product.productPrice}.00$
                                                </Typography>
                                                <div  className="d-flex justify-content-center"><Typography className={classes.pTitle} variant="h6">
                                                    items</Typography>
                                                    <div className={classes.sBox} onClick={() => { addItem(product.productId) }} title="increment item" ><AddCircleIcon /></div>
                                                    <div ><Typography className={classes.pTitle} variant="h6">
                                                        {product.quantity}
                                                    </Typography></div>
                                                    <div className={classes.sBox} title="decrement item" onClick={() => { subtractItem(product.productId) }}><RemoveCircleIcon /></div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Card>
                                </Box>
                            </Grid>
                        })}
                    </Grid>
                </div>
            </>
            :
            null
    }
    </>
}