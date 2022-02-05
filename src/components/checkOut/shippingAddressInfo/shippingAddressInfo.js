import React from 'react';
import { useFormik, FormikProvider, useField } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStyles } from '../styles';
import { TextField } from '@material-ui/core';

//fetches countryName
async function fetchCountries() {

    try {
        const response = await axios.get('https://covid19.mathdro.id/api/countries');
        return response.data.countries.map((country) => country.name)
    }
    catch (e) {
        console.log(e);
    }

}

const ShippingAddressInfo = () => {

    const classes = useStyles();
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        function fetchData() {
            fetchCountries().then((country) => {
                setCountryList(country);
            })
        }
        fetchData();
    }, [setCountryList])


    const validationSchema = yup.object({
        country: yup.string().oneOf(countryList, 'country Name').required('*Country Name Required'),
        city: yup
            .string('Enter City Name')
            .matches(/^\S*\S[^]*$/, '* This field cannot contain only blankspaces')
            .required('City Name is required'),
        zip: yup
            .string('Enter City Zip Code')
            .max(5, '5 digit code')
            .matches(/^[0-9]+$/, '* This field can contain numbers only')
            .required('Zip code required'),
            address: yup
            .string('Enter Address')
            .matches(/^\S*\S[^]*$/, '* This field cannot contain only blankspaces')
            .required('Address required'),
    });

    const formik = useFormik({
        initialValues: {
            country: '',
            city: '',
            zip: '',
            address:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const countryNames = countryList.map((country, key) => (
        <option value={country} key={key} size="small">
            {country}
        </option>
    ));

    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div className='container'>
                <select {...field} {...props} className={classes.selectCountry.toString()} />
                {meta.touched && meta.error ? (
                    <div className="error" className={classes.errorColor.toString()} >{meta.error}</div>
                ) : null}
            </div>
        );
    };
    return (
        <div>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <MySelect label="country" name="country">
                            <option value={""} size="small">Select Country Name</option>
                            {countryNames}
                        </MySelect>
                    </div>
                    <TextField
                        fullWidth
                        id="city"
                        name="city"
                        label="City"
                        type="text"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                    <TextField
                        fullWidth
                        id="zip"
                        name="zip"
                        label="Zip Code"
                        name='zip'
                        type='number'
                        value={formik.values.zip}
                        onChange={formik.handleChange}
                        error={formik.touched.zip && Boolean(formik.errors.zip)}
                        helperText={formik.touched.zip && formik.errors.zip}
                    />
                    <TextField
                        fullWidth
                        id="address"
                        name="address"
                        label="Address"
                        type="text"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </FormikProvider>
        </div>
    );
};

export default ShippingAddressInfo;
