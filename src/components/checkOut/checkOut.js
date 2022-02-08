import React from 'react';
import FormStepper from './stepper/stepper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core//Typography';
import { Button } from '@mui/material';

const CheckOut = () => {
  const user = useSelector(state => state.userReducer)
  console.log(user);
  return <>{(user.signedIn) ?
    <FormStepper /> :
    <div>
      <Typography variant="h6">
        Please register your account to get customer pin
        <br />
      </Typography>
      <Link to='/signIn'>
        <Button  align='center' sx={{ my: 2, backgroundColor: '#233dff', color: '#ffffff', fontWeight: '400', fontSize: 16 }}>
          Sign in
        </Button>
      </Link>
    </div>
  }
  </>
};

export default CheckOut;
