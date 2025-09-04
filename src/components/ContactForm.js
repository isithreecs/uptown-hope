import React from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';


const ContactForm = ({ formType }) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^(\(?\d{0,4}\)?)?\s?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const schema = Yup.object().shape({
    name: Yup.string().min(2).max(30).required("Name is required"),
    email: Yup.string()
      .matches(emailRegex, "The email address you entered is invalid")
      .required("Email address is invalid."),
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Enter a valid phone number.")
      .required("Must enter a phone number"),
    description: Yup.string().required("Please include a short description of your need!"),
  });

  const getSuccessMessage = () => { 
      return formType === 'contractor'
      ? 'Success! You submitted your message as a contractor.'
      : 'Success! You submitted your message as an associate.'; 
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companyZipCode: '',
        description: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          axios.post('http://localhost:5000/send', values)
            .then((response) => {
              if (response.data.status === 'success') {
                alert(getSuccessMessage());
              } else {
                alert('Message failed to send.');
              }
            })
            .catch((error) => {
              console.error('Error sending message: ', error.message);
              alert('Message failed to send.'); 
            })
            .finally(() => {
              resetForm();
              setSubmitting(false);
            }); 
        }, 400);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
          <TextField
            name="name"
            label="name"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />

          <TextField
            name="email"
            label="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />

          <TextField
            name="phoneNumber"
            label="phone number"
            variant="outlined"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            fullWidth
          />

          <TextField
            name="companyName"
            label="company name"
            variant="outlined"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.companyName && Boolean(errors.companyName)}
            helperText={touched.companyName && errors.companyName}
            fullWidth
          />

          <TextField
            name="name"
            label="company zip code"
            variant="outlined"
            value={values.companyZipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.companyZipCode && Boolean(errors.companyZipCode)}
            helperText={touched.companyZipCode && errors.companyZipCode}
            fullWidth
          />

          <TextField
            name="description"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            fullWidth
          />

          <Box textAlign="right">
            <Button 
              variant="contained" 
              sx={{ justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(230, 115, 23, .9)',
                    margin: '1.3em 0',
                    fontWeight: 'bold',
                    borderRadius: '60px',
                    padding: '10px 30px', 
                    fontSize: '16px', 
                    borderColor: 'rgba(15, 3, 196, 1)',
                    color: 'rgba(15, 3, 196, 1)',
                    textTransform: 'uppercase',
                    transition: 'transform 80ms ease-in',
                    cursor: 'pointer'  
             }} type="submit">
              Send
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
