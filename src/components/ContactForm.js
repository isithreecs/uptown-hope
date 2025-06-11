import React from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
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

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        description: '',
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          axios.post('http://localhost:5000/send', values)
            .then((response) => {
              if (response.data.status === 'success') {
                alert('Message sent.');
              } else {
                alert('Message failed to send.');
              }
            });

          resetForm();
          setSubmitting(false);
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
            label="Name"
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
            label="Email"
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
            label="(xxx)xxx-xxxx"
            variant="outlined"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
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
            <Button variant="contained" sx={{ backgroundColor: '#e6730e' }} type="submit">
              Send
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
