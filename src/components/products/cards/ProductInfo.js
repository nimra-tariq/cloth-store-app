import { productState } from "../../../store/state/productInfoState";
import { useParams } from "react-router-dom"
import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";


export default function ProductInfo() {

    const classes = useStyles();
    const { id } = useParams();

    let products = productState;
    let item = products.find(product => (product.productId == id))
    
    //This is what you should do to show that it's loading.
    if (!item || !item.productId) {
        return <div>Loading</div>
    }
  
    return <>
    <Link to='/products'> <div aria-label='Go back' className={classes.cartDiv}><span className={classes.cartIcon}><ArrowBackIcon /></span></div></Link>
        <Box sx={{ minWidth: 275 }} className={classes.box} >
            <Card variant="outlined">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className={classes.productImg} ><img src={item.productImage} alt={item.productTitle} height='180px' /></div>
                        <Typography className={classes.pTitle} variant="h6">
                            {item.productTitle}
                            <br />
                        </Typography>
                        <Typography variant="h5" className={classes.pPrice} component="div">
                            {item.productPrice}
                        </Typography>
                    </CardContent>
                </Card>
            </Card>
        </Box>
    </>
}
