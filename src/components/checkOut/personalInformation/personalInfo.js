import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { actionAddUserDetails } from '../../../store/actions/userAction';


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
    fisrtName: yup
        .string('Enter First Name')
        .max(25, 'First Name should have max 25 character')
        .matches(/^\S*\S[^]*$/, '* This field cannot contain only blankspaces')
        .required('First Name is required'),
    lastName: yup
        .string('Enter Last Name')
        .required('Last Name is required'),
});

const PersonalInfo = () => {
    const dispatch=useDispatch();
    function submitDetails(){
        let user={
        uname:document.forms[0].firstName.value,
        uemail:document.forms[0].email.value
        }
        dispatch(actionAddUserDetails(user))
        }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            fisrtName: '',
            lastName: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
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
                <div><TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    name='fisrtName'
                    value={formik.values.fisrtName}
                    onChange={formik.handleChange}
                    error={formik.touched.fisrtName && Boolean(formik.errors.fisrtName)}
                    helperText={formik.touched.fisrtName && formik.errors.fisrtName}
                /></div>
                <div><TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                /></div>
                <Button color="primary" variant="contained" fullWidth type="submit" onClick={submitDetails}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default PersonalInfo;
