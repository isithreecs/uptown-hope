import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Grid2,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

// const API_URL = process.env.REACT_APP_SERVER_URL_PROD;
const API_URL = 'http://localhost:5001'

// Paper application, served from the public folder. Replaced by the ATS flow later.
const APPLICATION_PDF   = '/documents/uptown-hope-application.pdf';
const APPLICATION_EMAIL = 'info@uptownhope.com';

// ── Resume upload rules ───────────────────────────────────────────────────────

const MAX_RESUME_BYTES = 3 * 1024 * 1024; // 3 MB
const RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const RESUME_MIME_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// Some browsers report an empty or non-standard MIME type for .doc files,
// so the extension is checked as a fallback.
const hasAllowedResumeType = (file) => {
    if (RESUME_MIME_TYPES.includes(file.type)) return true;
    const name = (file.name || '').toLowerCase();
    return RESUME_EXTENSIONS.some((ext) => name.endsWith(ext));
};

const formatFileSize = (bytes) =>
    bytes < 1024 * 1024
        ? `${Math.max(1, Math.round(bytes / 1024))} KB`
        : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

// ── Validation ────────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9()+\-.\s]{7,20}$/;
const ZIP_REGEX   = /^\d{5}(-\d{4})?$/;

// Only name, email, and phone are common to both tabs
const sharedFields = {
    name:        Yup.string().min(2).max(50).required('Name is required'),
    email:       Yup.string().matches(EMAIL_REGEX, 'Enter a valid email address').required('Email is required'),
    phoneNumber: Yup.string().matches(PHONE_REGEX, 'Enter a valid phone number').required('Phone number is required'),
};

// Business tab — identical to the original form
const businessSchema = Yup.object().shape({
    ...sharedFields,
    companyName:    Yup.string().max(100).required('Company name is required'),
    // excludeEmptyString is essential here — without it, matches() fails on the
    // empty initial value and the field is required in practice despite having
    // no .required() rule
    companyZipCode: Yup.string()
        .matches(ZIP_REGEX, { message: 'Enter a valid ZIP code', excludeEmptyString: true }),
    description:    Yup.string().min(10, 'Please provide at least 10 characters').required('A message is required'),
});

// Contractor tab — the message is optional on both paths, so submissionType
// only drives the subject line, success copy, and button emphasis.
const contractorSchema = Yup.object().shape({
    ...sharedFields,
    positionOfInterest: Yup.string().max(100).required('Let us know what kind of work you\'re looking for'),
    submissionType:     Yup.string().oneOf(['application', 'message']),
    description: Yup.string().when('submissionType', {
        is:        'message',
        then:      (field) => field.min(10, 'Please provide at least 10 characters').required('Add a message before sending'),
        otherwise: (field) => field.max(2000),
    }),
    resume: Yup.mixed()
        .nullable()
        .test('resumeSize', 'Resume must be smaller than 3 MB', (file) => !file || file.size <= MAX_RESUME_BYTES)
        .test('resumeType', 'Attach a PDF, DOC, or DOCX file', (file) => !file || hasAllowedResumeType(file)),
});

// ── Per-variant copy + config ─────────────────────────────────────────────────

const FORM_VARIANTS = {
    business: {
        schema: businessSchema,
        initialValues: {
            name: '', email: '', phoneNumber: '',
            companyName: '', companyZipCode: '', description: '',
        },
        overline:    'Get In Touch',
        heading:     'How Can We Help?',
        submitLabel: 'Send Message',
        successStates: {
            default: {
                heading:    'Message Sent!',
                body:       'Thank you for reaching out. Your information has been received and we\'ll be in touch shortly.',
                resetLabel: 'Send Another Message',
            },
        },
    },
    contractor: {
        schema: contractorSchema,
        initialValues: {
            name: '', email: '', phoneNumber: '',
            positionOfInterest: '', description: '', resume: null,
            submissionType: 'application',
        },
        overline:       'For Job Seekers',
        heading:        'Join Our Talent Network',
        submitLabel:    'Start Application',
        secondaryLabel: 'Send Message',
        successStates: {
            application: {
                heading:    'Application Started',
                body:       `Your details are with us. To finish, open the application form below, fill it out, and email the completed form to ${APPLICATION_EMAIL}.`,
                resetLabel: 'Start Another Application',
                showPdf:    true,
            },
            message: {
                heading:    'Message Sent!',
                body:       'Thanks for reaching out. Someone from our recruiting team will get back to you shortly.',
                resetLabel: 'Send Another Message',
            },
        },
    },
};

// Accepts the legacy 'contact' value as an alias for 'business'
const resolveVariant = (formType) =>
    formType === 'contractor' ? 'contractor' : 'business';

// ── Shared sx ─────────────────────────────────────────────────────────────────

const fieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '9px',
        '& fieldset':          { borderColor: '#e5e1db', borderWidth: '1.5px' },
        '&:hover fieldset':    { borderColor: '#c4bdb4' },
        '&.Mui-focused fieldset': { borderColor: ORANGE, borderWidth: '1.5px' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: ORANGE },
    // Reserved helper-text line — keeps rows a constant height whether or not
    // a message is showing, so errors don't shove the layout down
    '& .MuiFormHelperText-root': { minHeight: '1.25em', marginTop: '4px' },
};

const primaryButtonSx = {
    backgroundColor: ORANGE,
    color: 'white',
    fontWeight: 700,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderRadius: '60px',
    px: { xs: 3, sm: 6 },
    py: 1.4,
    width: { xs: '100%', sm: 'auto' },
    border: 'none',
    transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
    '&:hover': {
        backgroundColor: '#c45e08',
        border: 'none',
        transform: 'translateY(-1px)',
        boxShadow: '0 6px 20px rgba(230,115,14,0.35)',
    },
    '&:disabled': { backgroundColor: '#e5e1db', color: '#9ca3af' },
};

const secondaryButtonSx = {
    color: NAVY,
    fontWeight: 700,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderRadius: '60px',
    px: { xs: 3, sm: 4 },
    py: 1.4,
    width: { xs: '100%', sm: 'auto' },
    border: `1.5px solid rgba(7,37,144,0.25)`,
    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
    '&:hover': {
        border: `1.5px solid ${ORANGE}`,
        background: 'rgba(230,115,14,0.04)',
        color: ORANGE,
    },
    '&:disabled': { border: '1.5px solid #e5e1db', color: '#9ca3af' },
};

const underlineButtonSx = {
    color: NAVY,
    fontWeight: 700,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    borderBottom: `2px solid ${ORANGE}`,
    borderRadius: 0,
    px: 0,
    '&:hover': { background: 'transparent', color: ORANGE },
};

// ── Component ─────────────────────────────────────────────────────────────────

const ContactForm = ({ formType, initialMessage = '', initialPosition = '', initialIntent = 'application' }) => {
    const [submitStatus, setSubmitStatus] = useState(null);   // 'success' | 'error' | null
    const [submittedType, setSubmittedType] = useState('default');
    const fileInputRef = useRef(null);

    const variant = resolveVariant(formType);
    const config  = FORM_VARIANTS[variant];
    const isContractor = variant === 'contractor';

    // Visitors routed here from "Contact Us" arrive wanting to send a message;
    // "Apply now" and "Click to Apply" arrive wanting to apply. This flips both
    // the default submission type and which action reads as primary.
    const messageIntent = isContractor && initialIntent === 'message';

    // Clearing the native input lets the same file be re-selected after removal
    const clearFileInput = () => {
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const initialValues = {
        ...config.initialValues,
        description: initialMessage,
        ...(isContractor && initialPosition ? { positionOfInterest: initialPosition } : {}),
        ...(isContractor ? { submissionType: messageIntent ? 'message' : 'application' } : {}),
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            let response;

            if (isContractor) {
                // A file attachment requires multipart/form-data
                const payload = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    if (key !== 'resume' && value != null) payload.append(key, value);
                });
                payload.append('formType', variant);
                if (values.resume) payload.append('resume', values.resume);

                // Content-Type is omitted on purpose so the browser sets the boundary
                response = await axios.post(`${API_URL}/send`, payload);
            } else {
                response = await axios.post(`${API_URL}/send`, { ...values, formType: variant });
            }

            if (response.data.status === 'success') {
                setSubmittedType(isContractor ? values.submissionType : 'default');
                setSubmitStatus('success');
                resetForm();
                clearFileInput();
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
        const success = config.successStates[submittedType] || config.successStates.default;

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
                    {success.heading}
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '0.95rem', maxWidth: 400, lineHeight: 1.8 }}>
                    {success.body}
                </Typography>
                {success.showPdf && (
                    <Button
                        component="a"
                        href={APPLICATION_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        disableElevation
                        endIcon={<OpenInNewIcon sx={{ fontSize: '16px !important' }} />}
                        sx={{ mt: 1, ...primaryButtonSx, width: 'auto' }}
                    >
                        Open Application Form
                    </Button>
                )}
                <Button onClick={() => setSubmitStatus(null)} sx={{ mt: 2, ...underlineButtonSx }}>
                    {success.resetLabel}
                </Button>
            </Box>
        );
    }

    return (
        <Formik
            validationSchema={config.schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({
                handleSubmit, handleChange, handleBlur, setFieldValue, setFieldTouched, submitForm,
                values, touched, errors, isSubmitting,
            }) => (
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    {/* Header */}
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                            {config.overline}
                        </Typography>
                        <Typography variant="h5" sx={{ color: NAVY, fontWeight: 800, mt: 0.5, mb: 0.5 }}>
                            {config.heading}
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
                                helperText={(touched.name && errors.name) || ' '}
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
                                helperText={(touched.email && errors.email) || ' '}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                    </Grid2>

                    {/* Phone + (Company Name | Position of Interest) row */}
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            <TextField
                                name="phoneNumber"
                                label="Phone Number *"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                helperText={(touched.phoneNumber && errors.phoneNumber) || ' '}
                                fullWidth
                                sx={fieldSx}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                            {isContractor ? (
                                <TextField
                                    name="positionOfInterest"
                                    label="Position of Interest *"
                                    value={values.positionOfInterest}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.positionOfInterest && Boolean(errors.positionOfInterest)}
                                    helperText={
                                        (touched.positionOfInterest && errors.positionOfInterest)
                                        || 'Job title or keyword'
                                    }
                                    fullWidth
                                    sx={fieldSx}
                                />
                            ) : (
                                <TextField
                                    name="companyName"
                                    label="Company Name *"
                                    value={values.companyName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.companyName && Boolean(errors.companyName)}
                                    helperText={(touched.companyName && errors.companyName) || ' '}
                                    fullWidth
                                    sx={fieldSx}
                                />
                            )}
                        </Grid2>
                    </Grid2>

                    {/* Business only: Company ZIP + Message */}
                    {!isContractor && (
                        <>
                            <TextField
                                name="companyZipCode"
                                label="Company ZIP Code"
                                value={values.companyZipCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.companyZipCode && Boolean(errors.companyZipCode)}
                                helperText={(touched.companyZipCode && errors.companyZipCode) || ' '}
                                sx={{
                                    ...fieldSx,
                                    width: '100%',
                                    maxWidth: { xs: '100%', sm: 220 },
                                    alignSelf: 'center',
                                    '& .MuiFormHelperText-root': {
                                        ...fieldSx['& .MuiFormHelperText-root'],
                                        marginLeft: 0,
                                        textAlign: 'center',
                                    },
                                }}
                            />

                            <TextField
                                name="description"
                                label="Message *"
                                multiline
                                rows={5}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.description && Boolean(errors.description)}
                                helperText={(touched.description && errors.description) || 'How can we help?'}
                                fullWidth
                                sx={fieldSx}
                            />
                        </>
                    )}

                    {/* Contractor only: resume upload */}
                    {isContractor && (
                        <Box sx={{ alignSelf: 'center', width: '100%', maxWidth: { xs: '100%', sm: 260 }, textAlign: 'center' }}>
                            <Typography sx={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', mb: 1.25 }}>
                                Resume{' '}
                                <Box component="span" sx={{ color: '#9ca3af', fontWeight: 500 }}>
                                    (optional)
                                </Box>
                            </Typography>

                            {values.resume ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        px: 2,
                                        py: 1.5,
                                        borderRadius: '9px',
                                        border: `1.5px solid ${errors.resume ? '#d32f2f' : 'rgba(230,115,14,0.45)'}`,
                                        background: 'rgba(230,115,14,0.04)',
                                    }}
                                >
                                    <DescriptionOutlinedIcon sx={{ color: ORANGE, fontSize: 22, flexShrink: 0 }} />
                                    <Box sx={{ minWidth: 0, flex: 1 }}>
                                        <Typography
                                            sx={{
                                                color: NAVY,
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {values.resume.name}
                                        </Typography>
                                        <Typography sx={{ color: '#9ca3af', fontSize: '0.78rem' }}>
                                            {formatFileSize(values.resume.size)}
                                        </Typography>
                                    </Box>
                                    <IconButton
                                        aria-label="Remove resume"
                                        onClick={() => {
                                            setFieldValue('resume', null);
                                            clearFileInput();
                                        }}
                                        size="small"
                                        sx={{ color: '#9ca3af', '&:hover': { color: NAVY } }}
                                    >
                                        <CloseIcon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                </Box>
                            ) : (
                                <Button
                                    component="label"
                                    startIcon={<AttachFileOutlinedIcon />}
                                    sx={{
                                        color: NAVY,
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        textTransform: 'none',
                                        px: 2,
                                        py: 1,
                                        borderRadius: '9px',
                                        border: '1.5px dashed #c4bdb4',
                                        '&:hover': {
                                            border: `1.5px dashed ${ORANGE}`,
                                            background: 'rgba(230,115,14,0.04)',
                                            color: ORANGE,
                                        },
                                    }}
                                >
                                    Attach resume
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        hidden
                                        accept=".pdf,.doc,.docx"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files?.[0] || null;
                                            setFieldValue('resume', file);
                                            setFieldTouched('resume', true, false);
                                        }}
                                    />
                                </Button>
                            )}

                            <Typography
                                sx={{
                                    mt: '4px',
                                    fontSize: '0.75rem',
                                    minHeight: '1.25em',
                                    lineHeight: 1.66,
                                    textAlign: 'center',
                                    color: errors.resume ? '#d32f2f' : '#9ca3af',
                                }}
                            >
                                {errors.resume || 'PDF, DOC, or DOCX — 3 MB maximum'}
                            </Typography>
                        </Box>
                    )}

                    {/* Contractor only: message field. Optional when applying,
                        required when sending a message instead. */}
                    {isContractor && (
                        <TextField
                            name="description"
                            label={messageIntent ? 'Message *' : 'Message'}
                            multiline
                            rows={5}
                            autoFocus={messageIntent}
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.description && Boolean(errors.description)}
                            helperText={
                                (touched.description && errors.description)
                                || (messageIntent
                                    ? 'What would you like to ask?'
                                    : 'Optional when applying — required to send a message')
                            }
                            fullWidth
                            sx={fieldSx}
                        />
                    )}

                    {/* Actions — the arriving intent decides which is primary.
                        Both submit programmatically so setFieldValue is
                        guaranteed to land before validation runs. */}
                    {(() => {
                        const submitAs = async (type) => {
                            await setFieldValue('submissionType', type);
                            submitForm();
                        };

                        const spinnerFor = (isPrimary) => (
                            <CircularProgress size={20} sx={{ color: isPrimary ? 'white' : NAVY }} />
                        );

                        const applyButton = (
                            <Button
                                key="apply"
                                type="button"
                                variant={messageIntent ? 'outlined' : 'contained'}
                                disabled={isSubmitting}
                                disableElevation
                                onClick={() => submitAs('application')}
                                sx={messageIntent ? secondaryButtonSx : primaryButtonSx}
                            >
                                {isSubmitting && values.submissionType === 'application'
                                    ? spinnerFor(!messageIntent)
                                    : config.submitLabel}
                            </Button>
                        );

                        const messageButton = (
                            <Button
                                key="message"
                                type="button"
                                variant={messageIntent ? 'contained' : 'outlined'}
                                disabled={isSubmitting}
                                disableElevation
                                onClick={() => submitAs('message')}
                                sx={messageIntent ? primaryButtonSx : secondaryButtonSx}
                            >
                                {isSubmitting && values.submissionType === 'message'
                                    ? spinnerFor(messageIntent)
                                    : config.secondaryLabel}
                            </Button>
                        );

                        return (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {!isContractor
                                    ? applyButton
                                    : (messageIntent
                                        ? [messageButton, applyButton]
                                        : [applyButton, messageButton])}

                                {/* Keeps Enter-to-submit working now that neither
                                    visible button is type="submit". Submits with
                                    whichever intent the visitor arrived under. */}
                                <Box component="button" type="submit" hidden aria-hidden="true" tabIndex={-1} />
                            </Box>
                        );
                    })()}
                </Box>
            )}
        </Formik>
    );
};

export default ContactForm;