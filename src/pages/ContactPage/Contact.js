import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Map from '../../components/Map/Map';
import ContactForm from '../../components/ContactForm';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

const MAP_LOCATION = {
    address: 'Uptown Hope',
    lat: 39.42452,
    lng: -76.81139,
};

const CONTACT_DETAILS = [
    {
        icon: <LocationOnOutlinedIcon sx={{ color: ORANGE, fontSize: 20, mt: '2px', flexShrink: 0 }} />,
        content: '300 Redland Court, Suite 309\nOwings Mills, MD 21117',
    },
    {
        icon: <PhoneOutlinedIcon sx={{ color: ORANGE, fontSize: 20, flexShrink: 0 }} />,
        content: '(443) 334-7444',
        href: 'tel:4433347444',
    },
    {
        icon: <EmailOutlinedIcon sx={{ color: ORANGE, fontSize: 20, flexShrink: 0 }} />,
        content: 'info@uptownhope.com',
        href: 'mailto:info@uptownhope.com',
    },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Contact = () => {
    const { search } = useLocation();
    const params        = new URLSearchParams(search);
    const quizIndustry  = params.get('industry');
    const quizHeadcount = params.get('headcount');
    const quizTimeline  = params.get('timeline');

    const quizMessage = quizIndustry
        ? `Hi, I'm reaching out after completing the staffing needs quiz on your website.\n\nIndustry: ${quizIndustry}\nStaff needed: ${quizHeadcount || 'Not specified'}\nTimeline: ${quizTimeline || 'Not specified'}\n\nI'd love to learn more about how Uptown Hope can help.`
        : '';

    return (
        <Box
            sx={{
                backgroundColor: '#f9f8f6',
                backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    rgba(7,37,144,0.015) 0px, rgba(7,37,144,0.015) 1px,
                    transparent 1px, transparent 28px
                )`,
                minHeight: '100vh',
            }}
        >
            {/* ── Section 1: Navy hero banner ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 10, md: 14 },
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute', inset: 0,
                        backgroundImage: `repeating-linear-gradient(
                            -45deg,
                            rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px,
                            transparent 1px, transparent 28px
                        )`,
                        pointerEvents: 'none',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 400, height: 400, borderRadius: '50%',
                        background: 'rgba(230,115,14,0.07)',
                        bottom: -120, right: -100, pointerEvents: 'none',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: 800,
                        fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem', lg: '3.8rem', xl: '4.4rem' },
                        letterSpacing: { xs: '-0.5px', md: '-1px' },
                        mb: 2,
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    Contact Us
                </Typography>
                <Typography
                    sx={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.4rem' },
                        maxWidth: 520, mx: 'auto',
                        lineHeight: 1.8,
                        position: 'relative', zIndex: 1,
                    }}
                >
                    Whether you need staff support or are looking for your next opportunity,
                    our team is ready to connect you with the right solution.
                </Typography>
            </Box>

            {/* ── Section 2: Full-width contact form ── */}
            <Box
                sx={{
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 8, md: 10 },
                    maxWidth: 900,
                    mx: 'auto',
                }}
            >
                <Box
                    sx={{
                        background: '#fff',
                        borderRadius: '16px',
                        border: '1px solid rgba(7,37,144,0.08)',
                        borderTop: `4px solid ${ORANGE}`,
                        px: { xs: 4, md: 6 },
                        py: { xs: 4, md: 6 },
                        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                    }}
                >
                    <ContactForm
                        formType="contact"
                        initialMessage={quizMessage}
                    />
                </Box>
            </Box>

            {/* ── Section 3: Unified map + contact info card ── */}
            <Box
                sx={{
                    px: { xs: 4, md: 8, lg: 12 },
                    pb: { xs: 8, md: 10 },
                    maxWidth: 900,
                    mx: 'auto',
                }}
            >
                <Box
                    sx={{
                        background: '#fff',
                        borderRadius: '16px',
                        border: '1px solid rgba(7,37,144,0.08)',
                        borderTop: `4px solid ${ORANGE}`,
                        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    {/* Map */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: 260, md: 'auto' },
                            flexShrink: 0,
                            overflow: 'hidden',
                            '& > *':    { display: 'block !important', width: '100% !important', height: '100% !important', minHeight: 'inherit' },
                            '& iframe': { display: 'block !important', width: '100% !important', height: '100% !important', minHeight: 'inherit', border: 'none !important' },
                            '& div':    { margin: '0 !important', padding: '0 !important' },
                        }}
                    >
                        <Map location={MAP_LOCATION} zoomLevel={17} />
                    </Box>

                    {/* Contact details */}
                    <Box
                        sx={{
                            flex: 1,
                            px: { xs: 4, md: 5 },
                            py: { xs: 4, md: 5 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: 2.5,
                        }}
                    >
                        <Box>
                            <Typography variant="h5" sx={{ color: NAVY, fontWeight: 800, mt: 0.5 }}>
                                Find Us
                            </Typography>
                        </Box>

                        {CONTACT_DETAILS.map(({ icon, content, href }) => (
                            <Box key={content} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                {icon}
                                {href ? (
                                    <Typography
                                        component="a"
                                        href={href}
                                        sx={{
                                            color: NAVY,
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            lineHeight: 1.6,
                                            '&:hover': { color: ORANGE },
                                        }}
                                    >
                                        {content}
                                    </Typography>
                                ) : (
                                    <Typography sx={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                                        {content}
                                    </Typography>
                                )}
                            </Box>
                        ))}

                        <Button
                            href="https://goo.gl/maps/Vw2s6sVSfVeaSy4v9"
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon sx={{ fontSize: '14px !important' }} />}
                            sx={{
                                alignSelf: 'center',
                                color: NAVY,
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                px: 0,
                                borderBottom: `2px solid ${ORANGE}`,
                                borderRadius: 0,
                                '&:hover': { background: 'transparent', color: ORANGE },
                            }}
                        >
                            Get Directions
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Contact;