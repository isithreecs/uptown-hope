import React, { useCallback, useState } from 'react';
import { Parallax } from 'react-parallax';
import {
    Box,
    Button,
    IconButton,
    Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

export const CATEGORIES = [
    {
        key:       'healthCare',
        title:     'Healthcare',
        cardTitle: 'Health Care Staff Support',
        desc:      'Qualified healthcare practitioners for hospitals, clinics, and medical facilities on flexible arrangements.',
    },
    {
        key:       'nursing',
        title:     'Nursing',
        cardTitle: 'Nursing Referral Service Support',
        desc:      'Licensed and certified health professionals providing nursing and home health care services.',
    },
    {
        key:       'administration',
        title:     'Administration',
        cardTitle: 'Administrative & Clerical Support',
        desc:      'Qualified administrative support staff for a variety of organizations on flexible terms.',
    },
    {
        key:       'finance',
        title:     'Finance',
        cardTitle: 'Accounting & Finance Support',
        desc:      'Accounting and finance professionals for short or long-term placements.',
    },
    {
        key:       'events',
        title:     'Events',
        cardTitle: 'Event Planning',
        desc:      'Exceptional staff support for a variety of events of any size.',
    },
];

// ── Shared sx ─────────────────────────────────────────────────────────────────

const sectionHeadingSx = { color: NAVY, fontWeight: 800, lineHeight: 1.2 };

const underlineLinkSx = {
    color: NAVY,
    fontWeight: 700,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    px: 0,
    borderBottom: `2px solid ${ORANGE}`,
    borderRadius: 0,
    '&:hover': { background: 'transparent', color: ORANGE },
};

const solidBtnSx = {
    backgroundColor: ORANGE,
    color: 'white',
    fontWeight: 700,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderRadius: '60px',
    px: 4,
    py: 1.3,
    border: 'none',
    '&:hover': { backgroundColor: '#c45e08', border: 'none' },
};

const arrowBtnSx = (side) => ({
    position: 'absolute',
    [side]: { xs: -16, md: -28 },
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#fff',
    boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
    color: NAVY,
    width: 44,
    height: 44,
    '&:hover': { background: ORANGE, color: 'white' },
});

// ── CardSlideshow ─────────────────────────────────────────────────────────────

const CardSlideshow = ({ onApply }) => {
    const [index, setIndex] = useState(0);

    const prev = useCallback(() => setIndex((i) => (i - 1 + CATEGORIES.length) % CATEGORIES.length), []);
    const next = useCallback(() => setIndex((i) => (i + 1) % CATEGORIES.length), []);

    const card = CATEGORIES[index];

    return (
        <Box sx={{ position: 'relative', maxWidth: 680, mx: 'auto' }}>
            {/* Card */}
            <Box
                sx={{
                    background: '#fff',
                    borderRadius: '16px',
                    border: '1px solid rgba(7,37,144,0.08)',
                    borderTop: `4px solid ${ORANGE}`,
                    boxShadow: '0 8px 40px rgba(0,0,0,0.09)',
                    px: { xs: 4, md: 6, lg: 8 },
                    py: { xs: 5, md: 6 },
                    textAlign: 'center',
                    minHeight: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                }}
            >
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', mb: 1 }}>
                    {card.cardTitle}
                </Typography>
                <Typography variant="h3" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
                    {card.title}
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, maxWidth: 460, mb: 3 }}>
                    {card.desc}
                </Typography>
                <Button onClick={() => onApply(card.title)} sx={solidBtnSx}>
                    Click to Apply
                </Button>
            </Box>

            {/* Arrows */}
            <IconButton onClick={prev} aria-label="Previous" sx={arrowBtnSx('left')}>
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </IconButton>
            <IconButton onClick={next} aria-label="Next" sx={arrowBtnSx('right')}>
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </IconButton>

            {/* Dot indicators */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
                {CATEGORIES.map((_, i) => (
                    <Box
                        key={i}
                        component="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        sx={{
                            width: i === index ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            background: i === index ? ORANGE : 'rgba(7,37,144,0.15)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            p: 0,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

// ── CareerOpportunities ───────────────────────────────────────────────────────

const CareerOpportunities = () => {
    const navigate = useNavigate();
    // "Contact Us" lands ready to send a message; the apply routes below land
    // ready to submit an application.
    const handleContact = useCallback(
        () => navigate('/contact?form=contractor&intent=message'),
        [navigate]
    );

    // Routes to the contractor tab. Called with an industry from the carousel
    // cards, and without one from the inline "Apply now" link. Uses `position`
    // rather than `industry` because Contact.js reads `industry` as a
    // staffing-quiz param and would force the business tab.
    const handleApply = useCallback((industry) => {
        const params = new URLSearchParams({ form: 'contractor' });
        if (industry) params.set('position', industry);
        navigate(`/contact?${params.toString()}`);
    }, [navigate]);

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
            {/* ── Section 1: Parallax hero ── */}
            <Parallax
                bgImage={require('../pageImages/application.jpg')}
                strength={300}
                bgImageStyle={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '110vh' }}
                alt="Careers Background"
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(0,0,0,0.55)',
                        height: '60vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: ORANGE,
                            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem', lg: '3.8rem', xl: '4.4rem' },
                            letterSpacing: { xs: '-0.5px', md: '-1px' },
                            lineHeight: 1.15,
                        }}
                    >
                        Employment at Uptown Hope
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            color: 'white',
                            mt: 2.5,
                            fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.4rem' },
                            lineHeight: 1.6,
                            maxWidth: { xs: '100%', md: 600 },
                        }}
                    >
                        Work when you want, where you want.
                    </Typography>
                </Box>
            </Parallax>

            {/* ── Section 2: Intro + image ── */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    background: 'rgba(218,220,226,0.35)',
                    borderBottom: '1px solid rgba(218,220,226,0.8)',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        px: { xs: 4, md: 8, lg: 12 },
                        py: { xs: 7, md: 10 },
                    }}
                >
                    <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', mb: 1 }}>
                        Join Our Team
                    </Typography>
                    <Typography variant="h4" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 3 }}>
                        Looking for a Fresh Start?
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9, maxWidth: 480, mb: 4 }}>
                        If you're interested in any of our positions,{' '}
                        <Box
                            component="button"
                            type="button"
                            onClick={() => handleApply()}
                            sx={{
                                background: 'none',
                                border: 'none',
                                p: 0,
                                font: 'inherit',
                                color: ORANGE,
                                fontWeight: 700,
                                cursor: 'pointer',
                                borderBottom: `2px solid ${ORANGE}`,
                                transition: 'color 0.2s, border-color 0.2s',
                                '&:hover': { color: NAVY, borderBottomColor: NAVY },
                            }}
                        >
                            Apply now
                        </Box>{' '}
                        or click "Contact Us" below.
                    </Typography>
                    <Button onClick={handleContact} sx={underlineLinkSx}>
                        Contact Us →
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', md: '55%' },
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/corporate_staff.png"
                        alt="Direct Support"
                        sx={{
                            width: '100%',
                            height: { xs: '260px', md: '400px' },
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            borderRadius: '16px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                            display: 'block',
                        }}
                    />
                </Box>
            </Box>

            {/* ── Section 3: Card slideshow ── */}
            <Box sx={{ px: { xs: 4, md: 8, lg: 12 }, py: { xs: 8, md: 10 }, background: 'transparent' }}>
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', display: 'block', textAlign: 'center' }}>
                    Industries
                </Typography>
                <Typography variant="h4" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.2rem' }, mt: 1, mb: 8, textAlign: 'center' }}>
                    Explore Employment Opportunities
                </Typography>
                <CardSlideshow onApply={handleApply} />
            </Box>

            {/* ── Section 4: CTA ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 8, md: 10 },
                    textAlign: 'center',
                }}
            >
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                    Ready to Apply?
                </Typography>
                <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
                    Let's Get You Started.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '1rem', maxWidth: 520, mx: 'auto', mb: 5 }}>
                    Reach out and let us know which opportunity interests you — we'd love to connect.
                </Typography>
                <Button onClick={handleContact} sx={{ ...underlineLinkSx, color: 'white' }}>
                    Contact Us →
                </Button>
            </Box>

        </Box>
    );
};

export default CareerOpportunities;