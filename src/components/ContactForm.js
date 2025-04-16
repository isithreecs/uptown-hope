import React from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^(\(?\d{0,4}\)?)?\s?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const schema = Yup.object().shape({
        name: Yup.string().min(2).max(30).required("Name is required"),
        email: Yup.string().matches(emailRegex, "The email address you entered is invalid").required("Email address is invalid."),
        phoneNumber: Yup.string().matches(phoneRegex, "Enter a vaild phone number.").required("Must enter a phone number"),
        description: Yup.string().required("Please include a short description of your need!")
    });

    return (
        <Formik 
            validationSchema={schema} 
            initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                description: ""}}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    setTimeout(()=> {
                        const headers = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }

                        axios({
                            method: "POST",
                            url: "http://localhost:5000/send",
                            data: JSON.stringify(values, null, 2),
                            headers: headers
                        }).then((response) => {
                            if (response.data.status === 'success') {
                                alert("Messege Sent.");
                            } else if (response.data.status === 'fail') {
                                alert("Message failed to send.")
                            }
                        });

                        resetForm();
                        setSubmitting(false);
                    }, 400)
                }}>
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                }) => (
                <Container>
                    <Form noValidate onSubmit={handleSubmit}>
                        <FormGroup controlId="formName">
                            <FormLabel>Name</FormLabel>
                            <FormControl 
                                value={values.name}
                                name="name"
                                type="text" 
                                placeholder="*Full Name" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.name && errors.name}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup controlId="formEmail">
                            <FormLabel>Email</FormLabel>
                            <FormControl 
                                value={values.email}
                                name="email"
                                type="email" 
                                placeholder="*Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.email && errors.email}>                                           
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup controlId="formPhone">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl 
                                value={values.phoneNumber} 
                                type="text"
                                name="phoneNumber"
                                placeholder="*(xxx)xxx-xxxx" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.phoneNumber && errors.phoneNumber}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup controlId="formDesc">
                            <FormLabel>Description</FormLabel>
                            <FormControl 
                                value={values.description}
                                as="textarea" 
                                name="description"
                                rows={4} 
                                placeholder="*Message" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.description && errors.description}>                                            
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors.description}
                            </Form.Control.Feedback>
                        </FormGroup>
                        <div className="contact_button">
                            <Button className="float-end" variant="outline-secondary" type="submit">Send</Button>
                        </div>
                    </Form>
                </Container>
                 )}
        </Formik>
    )
}

export default ContactForm;
