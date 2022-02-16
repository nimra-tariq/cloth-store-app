import { Link } from 'react-router-dom';
import React from 'react';
import { useFormik } from 'formik';
import Typography from '@material-ui/core//Typography';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { actionAddUserDetails } from '../../store/actions/userAction';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import { useStyles } from '../cart/styles';

function generateCustomerPin() {
    return Math.floor(Math.random() * 8999 + 1000);
}

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .matches(/^\w+([-+.']\w+)*@[A-Za-z\d]+\.com$/, 'email must end with .com extension')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const SignIn = () => {
    const classes = useStyles()
    const user = useSelector(state => state.userReducer)
    const products = useSelector(state => state.productReducer);
    const productSelected = products.filter(p => p.isSelected === true);

    const dispatch = useDispatch();
    function submitDetails() {
        const userPin = generateCustomerPin();
        let user = {
            password: document.forms[0].password.value,
            uemail: document.forms[0].email.value,
            upin: userPin,
            signedIn: true,
        }
        dispatch(actionAddUserDetails(user));
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submitDetails();
        },
    });

    return (<div>
        {(!user.signedIn) ?
            <div className='container' className={classes.container}>
                <Typography variant="h4" align='center'>
                    Sign in
                    <br />
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <div><TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='yourname@example.com'
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    /></div>
                    <div>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        /></div>
                    <div className={classes.btnMargin}><Button color="primary" variant="contained" className={classes.btn} fullWidth type="submit" >
                        Submit
                    </Button>
                    </div>
                </form>
            </div> : <div  ><Box sx={{ minWidth: 230 }} className='container' className={classes.container} >
                <Card variant="outlined">
                    <Card sx={{ minWidth: 230 }}>
                        <CardContent>
                            <Typography className={classes.title} variant="h6">
                                Thank you for registering your customer account
                                your customer pin is
                                <br />
                            </Typography>
                            <Typography className={classes.pPrice} variant="h4" color='primary'>
                                {user.upin}
                                <br />
                            </Typography>
                            {(productSelected.length) ?
                                <Link to='/checkOut'>
                                    <Button className={classes.btn} align='center' sx={{ my: 2, backgroundColor: '#233dff', color: '#ffffff', fontWeight: '400', fontSize: 16 }}>
                                        Proceed To checkOut
                                    </Button>
                                </Link> :
                                null
                            }
                        </CardContent>
                    </Card>
                </Card>
            </Box>
            </div>
        }</div>
    );
};

export default SignIn;
