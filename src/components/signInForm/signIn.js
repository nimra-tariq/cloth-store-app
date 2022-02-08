
import React from 'react';
import { useFormik } from 'formik';
import Typography from '@material-ui/core//Typography';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { actionAddUserDetails } from '../../store/actions/userAction';

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
    const dispatch = useDispatch();
    function submitDetails() {
        const userPin = generateCustomerPin();
        let user = {
            password: document.forms[0].password.value,
            uemail: document.forms[0].email.value,
            upin: userPin,
            signedIn:true,
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
            // alert(JSON.stringify(values, null, 2));
            submitDetails();
        },
    });

    return (
        <div className='container'>
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
                    placeholder='foobar@example.com'
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
                <Button color="primary" variant="contained" fullWidth type="submit" >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SignIn;
