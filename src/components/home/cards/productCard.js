import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from './styles'
import CountUp from 'react-countup';

export default function ProductCard(props) {

  const today = new Date().toDateString();
  const classes = useStyles();

  return (<>
    <Box sx={{ minWidth: 275 }} className={classes.box}>
      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div><img src={props.productImage} alt={props.productTitle} height='180px'/></div>
            <Typography className={classes.pTitle} variant="h6">
              {props.productTitle}
              <br />
            </Typography>
            <Typography variant="h3" className={classes.pPrice} component="div">
            {props.productPrice}
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
  </>);
}