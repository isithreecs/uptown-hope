import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Typography,
  Button,
  Box,
} from '@mui/material';


const ContactForm = ({ formType }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9()+\-.\s]{7,20}$/;
    const zipRegex = /^\d{5}(-\d{4})?$/; // US ZIP format

  const schema = Yup.object().shape({
    name: Yup.string().min(2).max(30).required("Name is required"),
    email: Yup.string()
      .matches(emailRegex, "The email address you entered is invalid")
      .required("Email address is invalid."),
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Enter a valid phone number.")
      .required("Must enter a phone number"),
    companyZipCode: Yup.string().matches(zipRegex, "The zip code you entered invalid."),
    description: Yup.string().required("Please include a short description of your need!"),
  });

  const getSuccessMessage = () => { 
      return formType === 'contractor'
      ? 'Success! Your infortmation has been sent and is being reviewed.'
      : 'Success! Your infortmation has been sent and is being reviewed.'; 
  };

  const API_URL = process.env.REACT_APP_SERVER_URL_PROD

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
          axios.post(`${API_URL}/send`, values)
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
        <Box component="form" 
             noValidate 
             onSubmit={handleSubmit} 
             sx={{ display: 'flex', 
                   flexDirection: 'column', 
                   gap: 3.5,
                   padding: '2em 5em 0 5em', 
                   width: '100%' }}>
        <Typography variant="p" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
            '*' indicates a required field
        </Typography>
        <TextField
          name="name"
          label="name *"
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
          label="email *"
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
          label="phone number *"
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
          name="companyZipCode"
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
          label="message *"
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

        <Box textAlign="center">
          <Button 
            variant="contained" 
            sx={{ justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(230, 115, 23, .9)',
                  margin: '1em 0',
                  fontWeight: 'bold',
                  borderRadius: '60px',
                  padding: '10px 55px', 
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
