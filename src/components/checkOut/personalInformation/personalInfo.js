import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { actionAddUserDetails } from '../../../store/actions/userAction';
import { useSelector } from 'react-redux';

const PersonalInfo = (props) => {

    const user = useSelector(state => state.userReducer)

    const validationSchema = yup.object({

        pin: yup
            .string('Enter your Customer Pin Code')
            .min(4, '4 character pin')
            .matches(user.upin,'incorrect pin code')
            .required('required'),
        fisrtName: yup
            .string('Enter First Name')
            .max(25, 'First Name should have max 25 character')
            .matches(/^\S*\S[^]*$/, '* This field cannot contain only blankspaces')
            .required('First Name is required'),
        lastName: yup
            .string('Enter Last Name')
            .required('Last Name is required'),
    });

    const dispatch=useDispatch();
    function submitDetails(){
        let user={
        uname:document.forms[0].firstName.value
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
            // alert(JSON.stringify(values, null, 2));
            //submitDetails to store
            submitDetails();
            //handling NextStep 
            props.handleNext();
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div><TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    name='fisrtName'
                    value={formik.values.fisrtName||''}
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
                    value={formik.values.lastName||''}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                /></div>
                 <div>
                <TextField
                    fullWidth
                    id="pin"
                    name="pin"
                    label="Customer pin"
                    type="password"
                    value={formik.values.pin||''}
                    onChange={formik.handleChange}
                    error={formik.touched.pin && Boolean(formik.errors.pin)}
                    helperText={formik.touched.pin && formik.errors.pin}
                /></div> 
                <Button color="primary" variant="contained" fullWidth type="submit" >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default PersonalInfo;
