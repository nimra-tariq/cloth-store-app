import ProductCard from "./productCard";
import { Grid } from '@material-ui/core';
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { productSate } from "../../../store/state/productInfoState";

export default function CardContainer() {
    const classes = useStyles();
    let cardArray = productSate;
    return <>
        <div className="container">
            <Typography className={classes.newArrival} variant="h4">
                New Arrivals
                <br />
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {cardArray.map((card, i) => {
                    return <Grid item key={i} elevation={10} xs={4} sm={12} md={6}>
                        <ProductCard productId={i + 1} productImage={card.productImage} productTitle={card.productTitle} productPrice={card.productPrice}></ProductCard>
                    </Grid>
                })}
            </Grid>
        </div>
    </>
}