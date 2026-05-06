import React, { useCallback, useState } from 'react';
import { Parallax } from 'react-parallax';
import {
    Box,
    Button,
    Chip,
    IconButton,
    Modal,
    Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
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
        positions: ['CMA', 'CNA', 'GNA', 'Direct Support Professional / CMT', 'Medical Records Clerk', 'Personal Care Assistant', 'Therapeutic Support Staff'],
    },
    {
        key:       'nursing',
        title:     'Nursing',
        cardTitle: 'Nursing Referral Service Support',
        desc:      'Licensed and certified health professionals providing nursing and home health care services.',
        positions: ['LPN', 'RN'],
    },
    {
        key:       'administration',
        title:     'Administration',
        cardTitle: 'Administrative & Clerical Support',
        desc:      'Qualified administrative support staff for a variety of organizations on flexible terms.',
        positions: ['Receptionist', 'Administrative Assistant', 'File Clerk', 'Office Manager / Coordinator'],
    },
    {
        key:       'finance',
        title:     'Finance',
        cardTitle: 'Accounting & Finance Support',
        desc:      'Accounting and finance professionals for short or long-term placements.',
        positions: ['Bookkeeper', 'Accounts Payable / Receivable', 'Junior Accountant', 'Staff Accountant', 'Senior Accountant'],
    },
    {
        key:       'events',
        title:     'Events',
        cardTitle: 'Event Planning',
        desc:      'Exceptional staff support for a variety of events of any size.',
        positions: ['Sporting Events', 'Conventions', 'Concerts', 'Festivals', 'Conferences'],
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

// ── CategoryModal ─────────────────────────────────────────────────────────────

const CategoryModal = ({ index, onClose, onContact }) => {
    if (index === null) return null;
    const cat = CATEGORIES[index];

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90vw', sm: 480 },
                background: 'white',
                borderRadius: '16px',
                borderTop: `4px solid ${ORANGE}`,
                boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
                p: 4,
                outline: 'none',
            }}
        >
            <IconButton
                onClick={onClose}
                aria-label="Close modal"
                sx={{ position: 'absolute', top: 12, right: 12, color: '#aaa', '&:hover': { color: NAVY } }}
            >
                <CloseIcon />
            </IconButton>

            <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                {cat.cardTitle}
            </Typography>
            <Typography variant="h5" sx={{ color: NAVY, fontWeight: 800, mt: 0.5, mb: 1 }}>
                {cat.title}
            </Typography>

            <Box sx={{ width: '100%', height: '2px', background: `linear-gradient(90deg, ${ORANGE}, transparent)`, mb: 2.5 }} />

            <Typography sx={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8, mb: 2.5 }}>
                {cat.desc}
            </Typography>

            <Typography sx={{ color: NAVY, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 1.5 }}>
                Typical Positions
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {cat.positions.map((pos) => (
                    <Chip
                        key={pos}
                        label={pos}
                        size="small"
                        sx={{
                            background: 'rgba(230,115,14,0.1)',
                            color: NAVY,
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            border: '1px solid rgba(230,115,14,0.25)',
                        }}
                    />
                ))}
            </Box>

            <Button onClick={onContact} sx={solidBtnSx}>
                Contact Us →
            </Button>
        </Box>
    );
};

// ── CardSlideshow ─────────────────────────────────────────────────────────────

const CardSlideshow = ({ onOpenModal }) => {
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
                    px: { xs: 4, md: 6 },
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
                <Typography variant="h3" sx={{ ...sectionHeadingSx, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
                    {card.title}
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, maxWidth: 460, mb: 3 }}>
                    {card.desc}
                </Typography>
                <Button onClick={() => onOpenModal(index)} sx={solidBtnSx}>
                    View Positions
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
    const [openModal, setOpenModal] = useState(null);

    const handleOpenModal  = useCallback((i) => setOpenModal(i), []);
    const handleCloseModal = useCallback(() => setOpenModal(null), []);
    const handleContact    = useCallback(() => { setOpenModal(null); navigate('/contact'); }, [navigate]);

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
                    <Typography variant="h2" sx={{ fontWeight: 800, color: ORANGE }}>
                        Employment at Uptown Hope
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'white', mt: 2.5, fontSize: '1.4rem' }}>
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
                        If you're interested in any of our positions, reach out via email or click
                        "Contact Us" below. Including a PDF copy of your resume is greatly appreciated.
                    </Typography>
                    <Button onClick={handleContact} sx={underlineLinkSx}>
                        Contact Us →
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', md: '45%' },
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
                <CardSlideshow onOpenModal={handleOpenModal} />
            </Box>

            {/* ── Section 4: CTA ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 3, md: 8, lg: 12 },
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

            {/* ── Modal ── */}
            <Modal open={openModal !== null} onClose={handleCloseModal}>
                <CategoryModal
                    index={openModal}
                    onClose={handleCloseModal}
                    onContact={handleContact}
                />
            </Modal>

        </Box>
    );
};

export default CareerOpportunities;