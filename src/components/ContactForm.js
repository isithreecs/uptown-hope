import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Grid2,
    TextField,
    Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

// const API_URL = process.env.REACT_APP_SERVER_URL_PROD; 
const API_URL = 'http://localhost:5001'

// ── Validation ────────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9()+\-.\s]{7,20}$/;
const ZIP_REGEX   = /^\d{5}(-\d{4})?$/;

const schema = Yup.object().shape({
    name:           Yup.string().min(2).max(50).required('Name is required'),
    email:          Yup.string().matches(EMAIL_REGEX, 'Enter a valid email address').required('Email is required'),
    phoneNumber:    Yup.string().matches(PHONE_REGEX, 'Enter a valid phone number').required('Phone number is required'),
    companyName:    Yup.string().max(100),
    companyZipCode: Yup.string().matches(ZIP_REGEX, 'Enter a valid ZIP code'),
    description:    Yup.string().min(10, 'Please provide at least 10 characters').required('A message is required'),
});

// ── Shared field sx ───────────────────────────────────────────────────────────

const fieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '9px',
        '& fieldset':          { borderColor: '#e5e1db', borderWidth: '1.5px' },
        '&:hover fieldset':    { borderColor: '#c4bdb4' },
        '&.Mui-focused fieldset': { borderColor: ORANGE, borderWidth: '1.5px' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: ORANGE },
};

// ── Component ─────────────────────────────────────────────────────────────────

const ContactForm = ({ formType, initialMessage = '' }) => {
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post(`${API_URL}/send`, values);
            if (response.data.status === 'success') {
                setSubmitStatus('success');
                resetForm();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error.message);
            setSubmitStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 8,
                    textAlign: 'center',
                    gap: 2,
                }}
            >
                <CheckCircleOutlineIcon sx={{ fontSize: 56, color: ORANGE }} />
                <Typography variant="h5" sx={{ color: NAVY, fontWeight: 700 }}>
                    Message Sent!
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '0.95rem', maxWidth: 400, lineHeight: 1.8 }}>
                    Thank you for reaching out. Your information has been received and we'll be in touch shortly.
                </Typography>
                <Button
                    onClick={() => setSubmitStatus(null)}
                    sx={{
                        mt: 2,
                        color: NAVY,
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        borderBottom: `2px solid ${ORANGE}`,
                        borderRadius: 0,
                        px: 0,
                        '&:hover': { background: 'transparent', color: ORANGE },
                    }}
                >
                    Send Another Message
                </Button>
            </Box>
        );
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                name:           '',
                email:          '',
                phoneNumber:    '',
                companyName:    '',
                companyZipCode: '',
                description:    initialMessage,
            }}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                    {/* Header */}
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                            {formType === 'contractor' ? 'Contractor Inquiry' : 'Get In Touch'}
                        </Typography>
                        <Typography variant="h5" sx={{ color: NAVY, fontWeight: 800, mt: 0.5, mb: 0.5 }}>
                            How Can We Help?
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                            * indicates a required field
                        </Typography>
                    </Box>

                    {/* Error banner */}
                    {submitStatus === 'error' && (
                        <Alert
                            severity="error"
                            onClose={() => setSubmitStatus(null)}
                            sx={{ borderRadius: '9px' }}
                        >
                            Message failed to send. Please try again or email us directly at info@uptownhope.com.
                        </Alert>
                    )}

                    {/* Name + Email row */}
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="name"
                                label="Full Name *"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="email"
                                label="Email Address *"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                    </Grid2>

                    {/* Phone + Company row */}
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="phoneNumber"
                                label="Phone Number *"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={touched.phoneNumber && errors.phoneNumber}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="companyName"
                                label="Company Name"
                                value={values.companyName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.companyName && Boolean(errors.companyName)}
                                helperText={touched.companyName && errors.companyName}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                    </Grid2>

                    {/* ZIP */}
                    <TextField
                        name="companyZipCode"
                        label="Company ZIP Code"
                        value={values.companyZipCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.companyZipCode && Boolean(errors.companyZipCode)}
                        helperText={touched.companyZipCode && errors.companyZipCode}
                        sx={{ ...fieldSx, maxWidth: 220 }}
                    />

                    {/* Message */}
                    <TextField
                        name="description"
                        label="Message *"
                        multiline
                        rows={5}
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.description && Boolean(errors.description)}
                        helperText={touched.description && errors.description}
                        fullWidth
                        sx={fieldSx}
                    />

                    {/* Submit */}
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            disableElevation
                            sx={{
                                backgroundColor: ORANGE,
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                borderRadius: '60px',
                                px: 6,
                                py: 1.4,
                                border: 'none',
                                transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
                                '&:hover': {
                                    backgroundColor: '#c45e08',
                                    border: 'none',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 6px 20px rgba(230,115,14,0.35)',
                                },
                                '&:disabled': { backgroundColor: '#e5e1db', color: '#9ca3af' },
                            }}
                        >
                            {isSubmitting
                                ? <CircularProgress size={20} sx={{ color: 'white' }} />
                                : 'Send Message'}
                        </Button>
                    </Box>
                </Box>
            )}
        </Formik>
    );
};

export default ContactForm;