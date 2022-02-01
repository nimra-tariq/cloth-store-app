import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

export default function CardContainer() {
    const classes=useStyles()
    let cardArray = [
        {
            productImage: 'https://m.media-amazon.com/images/I/91LQqnCd6TL._AC_UX342_.jpg',
            productTitle: "Girls Shirts",
            productPrice: '30$',

        },
        {
            productImage: 'https://m.media-amazon.com/images/I/51Za41cossL._AC_SX385._SX._UX._SY._UY_.jpg',
            productTitle: "Kids Dress",
            productPrice: '40$',

        },
        {
            productImage: 'https://m.media-amazon.com/images/I/71stfSP4lML._AC_UX522_.jpg',
            productTitle: "Men Shirts",
            productPrice: '120$',

        },
        {
            productImage: 'https://m.media-amazon.com/images/I/81R+2ig8AbL._AC_UY445_.jpg',
            productTitle: 'Girls Dress',
            productPrice: '200$',

        }
    ]
    return <>  
        <div className="container">
        <Typography className={classes.newArrival} variant="h4">
           New Arrivals
              <br />
        </Typography>
            <Grid container spacing={3} justifyContent="center">
                {cardArray.map((card, i) => {
                    return <Grid item key={i} elevation={10} xs={4} sm={12} md={6}>
                        <ProductCard cardNo={i} productImage={card.productImage} productTitle={card.productTitle} productPrice={card.productPrice}></ProductCard>
                    </Grid>
                })}
            </Grid>
        </div>
    {/* ) : <div className="d-flex justify-content-center align-items-center text-center vh-100 min-vh-100" >
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div> */}
    
    </>
}