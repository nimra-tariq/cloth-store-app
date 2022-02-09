
import * as React from 'react';
import Box from '@material-ui/core//Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import Typography from '@material-ui/core//Typography';
import { useStyles } from '../styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actionResetUser } from '../../../store/actions/userAction';
import { actionResetProductState } from '../../../store/actions/productActions';

export default function ConfirmationCard() {
  const dispatch = useDispatch()
  const classes = useStyles()
  let orderNum = Math.floor(Math.random() * 899999 + 100000);
  const reset = () => {
    dispatch(actionResetUser());
    dispatch(actionResetProductState());
  }
  return <div className='container'>
    <Box sx={{ minWidth: 275 }} className={classes.box} >
      <Card variant="outlined">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography className={classes.title} variant="h6">
              Thank you for your order
              <br />
            </Typography>
            <Typography paragraph={true} className={classes.aboutParagraph} >
              Your order number is #{orderNum}. We have emailed your order confirmation, and will send you an update when your order has shipped.
              <br />
            </Typography>
            <Typography className={classes.title} variant="h5">
              Don't worry it's just a template !
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
    <Link to='home' onClick={reset}><div> <ArrowBackIcon />Back To Home</div></Link>
  </div>;
}