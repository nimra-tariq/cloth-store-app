import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { productState } from "../../../store/state/productInfoState";


export default function CardContainer() {
    const classes = useStyles();
    let cardArray = productState;
    return <>
        <div className="container">
            <Typography className={classes.newArrival} variant="h4">
                New Arrivals
                <br />
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {cardArray.map((card, i) => {
                    return <Grid item key={i} elevation={10} xs={12} sm={6} md={6} lg={4}>
                        <ProductCard productId={card.productId} productImage={card.productImage} productTitle={card.productTitle} productPrice={card.productPrice}></ProductCard>
                    </Grid>
                })}
            </Grid>
        </div>
    </>
}