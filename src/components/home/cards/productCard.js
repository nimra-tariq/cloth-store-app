import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from './styles'

export default function ProductCard(props) {
  const classes = useStyles();
  return (<>
    <Box sx={{ minWidth: 230 }} className={classes.box}>
      <Card variant="outlined">
        <Card sx={{ minWidth: 230 }}>
          <CardContent >
            <div><img src={props.productImage} alt={props.productTitle} height='180px' /></div>
            <Typography className={classes.pTitle} variant="h6">
              {props.productTitle}
              <br />
            </Typography>
            <Typography variant="h6" className={classes.pPrice} component="div">
              {props.productPrice}
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </>);
}