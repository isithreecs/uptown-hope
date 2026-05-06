import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

export const SERVICES = [
    {
        title: 'Healthcare Staff Support',
        body: 'UH provides qualified healthcare practitioners to a variety of health organizations on a short-term or long-term temporary, permanent full-time or part-time, or associate basis.',
    },
    {
        title: 'Administrative Support',
        body: 'UH provides qualified administrative support staff — including Receptionists, Administrative Assistants, File Clerks, and Office Managers — to a variety of organizations on flexible staffing arrangements.',
    },
    {
        title: 'Accounting & Finance Support',
        body: 'UH provides qualified Accounting and Finance professionals to a variety of organizations on a short-term or long-term temporary, permanent full-time or part-time, or associate basis.',
    },
    {
        title: 'Nursing Referral Service Support',
        body: 'UH provides qualified licensed or certified health professionals and care providers — including nurses, home health aides, and other home health care specialists — to hospitals, clinics, and related medical facilities.',
    },
    {
        title: 'Event Planning',
        body: 'Uptown Hope provides exceptional staff support for a variety of events, including Sporting Events, Conventions, Concerts, Festivals, and Conferences.',
    },
];

// ── Quiz data ─────────────────────────────────────────────────────────────────

export const QUIZ = [
    {
        question: 'What industry are you in?',
        options: ['Healthcare', 'Administrative', 'Accounting & Finance', 'Events', 'Other'],
    },
    {
        question: 'How many staff do you need?',
        options: ['1–5', '6–15', '16–30', '30+'],
    },
    {
        question: 'What is your timeline?',
        options: ['Immediately', 'Within 2 weeks', 'Within a month', 'Planning ahead'],
    },
];

export const RECOMMENDATIONS = {
    'Healthcare':           'Our Healthcare Staff Support team specializes in CNA, GNA, CMA, and Direct Support Professionals — ready to deploy quickly.',
    'Administrative':       'Our Administrative Support division can place Receptionists, Administrative Assistants, and Office Managers on flexible terms.',
    'Accounting & Finance': 'Our Finance Support team covers Bookkeepers, Junior Accountants, and Senior Accountants for short or long-term placements.',
    'Events':               'Our Events team provides trained staff for sporting events, concerts, conventions, and conferences of any scale.',
    'Other':                'We handle a wide range of staffing needs. Reach out and we\'ll match you with the right solution.',
};

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

// ── QuizWidget ────────────────────────────────────────────────────────────────

const QuizWidget = ({ navigate }) => {
    const [step, setStep]         = useState(0);
    const [answers, setAnswers]   = useState({});
    const [done, setDone]         = useState(false);
    const [otherInput, setOtherInput] = useState('');
    const [showOther, setShowOther]   = useState(false);

    const handleAnswer = (option) => {
        // On question 0, show text input when Other is picked
        if (step === 0 && option === 'Other') {
            setShowOther(true);
            return;
        }
        const updated = { ...answers, [step]: option };
        setAnswers(updated);
        if (step < QUIZ.length - 1) {
            setStep(step + 1);
        } else {
            setDone(true);
        }
    };

    const handleOtherSubmit = () => {
        const value = otherInput.trim() || 'Other';
        const updated = { ...answers, [step]: value };
        setAnswers(updated);
        setShowOther(false);
        setOtherInput('');
        if (step < QUIZ.length - 1) {
            setStep(step + 1);
        } else {
            setDone(true);
        }
    };

    const reset = () => {
        setStep(0);
        setAnswers({});
        setDone(false);
        setOtherInput('');
        setShowOther(false);
    };

    const goBack = () => {
        if (showOther) {
            setShowOther(false);
            setOtherInput('');
            return;
        }
        if (step > 0) {
            const prev = step - 1;
            setStep(prev);
            // If going back to q0 and previous answer was a custom Other, re-show the input
            if (prev === 0 && answers[0] && !QUIZ[0].options.includes(answers[0])) {
                setOtherInput(answers[0]);
                setShowOther(true);
            }
            const updated = { ...answers };
            delete updated[step];
            setAnswers(updated);
        }
    };

    const industry    = answers[0] || 'Other';
    const headcount   = answers[1];
    const timeline    = answers[2];
    const recommendation = RECOMMENDATIONS[industry] || RECOMMENDATIONS['Other'];

    if (done) {
        return (
            <Box
                sx={{
                    maxWidth: 620,
                    mx: 'auto',
                    background: '#fff',
                    borderRadius: '16px',
                    border: `1px solid rgba(7,37,144,0.1)`,
                    borderTop: `4px solid ${ORANGE}`,
                    p: { xs: 4, md: 5 },
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
            >
                <Typography sx={{ color: ORANGE, fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1 }}>
                    Your Recommendation
                </Typography>
                <Typography variant="h5" sx={{ color: NAVY, fontWeight: 800, mb: 2 }}>
                    {industry} Staffing
                </Typography>
                <Typography sx={{ color: '#555', lineHeight: 1.85, fontSize: '0.95rem', mb: 1 }}>
                    {recommendation}
                </Typography>
                {headcount && timeline && (
                    <Typography sx={{ color: '#888', fontSize: '0.85rem', mb: 3, fontStyle: 'italic' }}>
                        Based on {headcount} staff needed · {timeline}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
                    <Button
                        onClick={() => {
                            const params = new URLSearchParams({
                                industry:  industry,
                                headcount: headcount  || '',
                                timeline:  timeline   || '',
                            });
                            navigate(`/contact?${params.toString()}`);
                        }}
                        sx={{
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
                        }}
                    >
                        Contact Us →
                    </Button>
                    <Button
                        onClick={reset}
                        sx={{
                            color: NAVY,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            borderBottom: `2px solid ${ORANGE}`,
                            borderRadius: 0,
                            px: 0,
                            '&:hover': { background: 'transparent', color: ORANGE },
                        }}
                    >
                        Start over
                    </Button>
                </Box>
            </Box>
        );
    }

    const current = QUIZ[step];

    return (
        <Box sx={{ maxWidth: 620, mx: 'auto' }}>
            {/* Progress bar */}
            <Box sx={{ display: 'flex', gap: 1, mb: 5, justifyContent: 'center' }}>
                {QUIZ.map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            height: 4,
                            flex: 1,
                            borderRadius: 2,
                            background: i <= step ? ORANGE : 'rgba(7,37,144,0.1)',
                            transition: 'background 0.3s',
                        }}
                    />
                ))}
            </Box>

            {/* Question */}
            <Typography sx={{ color: NAVY, fontWeight: 700, fontSize: '1.15rem', textAlign: 'center', mb: 4 }}>
                {current.question}
            </Typography>

            {/* Options */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center',
                }}
            >
                {current.options.map((option) => (
                    <Button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        sx={{
                            background: showOther && option === 'Other' ? ORANGE : '#fff',
                            color: showOther && option === 'Other' ? 'white' : NAVY,
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textTransform: 'none',
                            border: `1.5px solid ${showOther && option === 'Other' ? ORANGE : 'rgba(7,37,144,0.15)'}`,
                            borderRadius: '10px',
                            px: 3.5,
                            py: 1.4,
                            minWidth: 140,
                            transition: 'all 0.15s',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            '&:hover': {
                                background: ORANGE,
                                color: 'white',
                                borderColor: ORANGE,
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 18px rgba(230,115,14,0.3)',
                            },
                        }}
                    >
                        {option}
                    </Button>
                ))}
            </Box>

            {/* Other text input — shown when Other is selected on q0 */}
            {showOther && (
                <Box sx={{ mt: 3, display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <TextField
                        size="small"
                        placeholder="Enter your industry..."
                        value={otherInput}
                        onChange={(e) => setOtherInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleOtherSubmit()}
                        autoFocus
                        sx={{
                            width: 280,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                background: '#fff',
                                '& fieldset': { borderColor: 'rgba(7,37,144,0.2)', borderWidth: '1.5px' },
                                '&.Mui-focused fieldset': { borderColor: ORANGE },
                            },
                        }}
                    />
                    <Button
                        onClick={handleOtherSubmit}
                        sx={{
                            backgroundColor: ORANGE,
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            textTransform: 'none',
                            borderRadius: '10px',
                            px: 3,
                            py: 1,
                            border: 'none',
                            '&:hover': { backgroundColor: '#c45e08', border: 'none' },
                        }}
                    >
                        Continue →
                    </Button>
                </Box>
            )}

            {/* Step label + back */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mt: 4 }}>
                {(step > 0 || showOther) && (
                    <Button
                        onClick={goBack}
                        sx={{
                            color: '#aaa',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            textTransform: 'none',
                            px: 0,
                            minWidth: 0,
                            '&:hover': { color: NAVY, background: 'transparent' },
                        }}
                    >
                        ← Back
                    </Button>
                )}
                <Typography sx={{ color: '#aaa', fontSize: '0.8rem' }}>
                    Question {step + 1} of {QUIZ.length}
                </Typography>
            </Box>
        </Box>
    );
};

// ── StaffingSolutions ─────────────────────────────────────────────────────────

const StaffingSolutions = () => {
    const navigate = useNavigate();

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
                bgImage={require('../pageImages/corporate1.jpg')}
                strength={300}
                bgImageStyle={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '110vh',
                }}
                alt="Staffing Solutions Background"
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
                        sx={{ fontWeight: 800, color: ORANGE }}
                    >
                        Workforce Solutions
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: 'white', mt: 2.5, fontSize: '1.4rem' }}
                    >
                        Short on Staff?
                    </Typography>
                </Box>
            </Parallax>

            {/* ── Section 2: Intro ── */}
            <Box
                sx={{
                    textAlign: 'center',
                    px: { xs: 4, md: 10, lg: 14 },
                    py: { xs: 7, md: 9 },
                    // background: 'rgba(230,115,14,0.75)',
                    borderBottom: '1px solid rgba(230,115,14,0.15)',
                }}
            >
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                    We Can Help
                </Typography>
                <Typography variant="h4" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.6rem', md: '2rem' }, mt: 1, mb: 3 }}>
                    Is your business short on staff?
                </Typography>
                <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9, maxWidth: 700, mx: 'auto' }}>
                    Are you looking for staff to help jumpstart a new business venture, or just looking
                    to shake things up in an unconventional way? Whatever your staffing need,
                    <Box component="span" sx={{ fontWeight: 700, color: NAVY }}> Uptown </Box> 
                    <Box component="span" sx={{ fontWeight: 700, color: ORANGE }}> Hope </Box> can help.
                </Typography>
            </Box>

            {/* ── Section 3: How It Works timeline ── */}
            <Box sx={{ px: { xs: 3, md: 8, lg: 12 }, py: { xs: 8, md: 10 }, background: NAVY, borderBottom: '1px solid rgba(7,37,144,0.8)' }}>
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', display: 'block', textAlign: 'center' }}>
                    How It Works
                </Typography>
                <Typography variant="h4" sx={{ ...sectionHeadingSx, color: 'white', fontSize: { xs: '1.6rem', md: '2rem' }, mt: 1, mb: 8, textAlign: 'center' }}>
                    Simple. Fast. Effective.
                </Typography>

                {/* Steps */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        justifyContent: 'center',
                        gap: 0,
                        position: 'relative',
                    }}
                >
                    {[
                        {
                            step: '01',
                            title: 'Tell Us Your Need',
                            desc: 'Share your staffing requirements — industry, role, timeline, and number of staff. We listen first.',
                        },
                        {
                            step: '02',
                            title: 'We Source & Screen',
                            desc: 'Our team identifies, vets, and matches qualified candidates to your specific needs and culture.',
                        },
                        {
                            step: '03',
                            title: 'Staff Arrives Ready',
                            desc: 'Your new team members show up trained, qualified, and ready to contribute from day one.',
                        },
                    ].map(({ step, title, desc }, i) => (
                        <Box
                            key={step}
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', md: 'column' },
                                alignItems: { xs: 'flex-start', md: 'center' },
                                flex: 1,
                                maxWidth: { md: 340 },
                                position: 'relative',
                                px: { xs: 0, md: 4 },
                                mb: { xs: 5, md: 0 },
                            }}
                        >
                            {/* Connector line between steps */}
                            {i < 2 && (
                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        position: 'absolute',
                                        top: 28,
                                        left: 'calc(50% + 28px)',
                                        width: 'calc(100% - 56px)',
                                        height: '2px',
                                        background: `linear-gradient(90deg, ${ORANGE}, rgba(230,115,14,0.2))`,
                                        zIndex: 0,
                                    }}
                                />
                            )}

                            {/* Step number circle */}
                            <Box
                                sx={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: '50%',
                                    background: ORANGE,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    mr: { xs: 3, md: 0 },
                                    mb: { xs: 0, md: 3 },
                                    zIndex: 1,
                                    boxShadow: '0 4px 16px rgba(230,115,14,0.35)',
                                }}
                            >
                                <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1rem', lineHeight: 1 }}>
                                    {step}
                                </Typography>
                            </Box>

                            {/* Text */}
                            <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>
                                    {title}
                                </Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                    {desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* ── Section 4: Services — image + accordions ── */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    background: 'rgba(218,220,226,0.35)',
                    borderTop: '1px solid rgba(218,220,226,0.8)',
                    borderBottom: '1px solid rgba(218,220,226,0.8)',
                }}
            >
                {/* Left: image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '42%' },
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/handshake.jpg"
                        alt="Corporate Staff"
                        sx={{
                            width: '100%',
                            height: { xs: '260px', md: '460px' },
                            objectFit: 'cover',
                            borderRadius: '16px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                            display: 'block',
                        }}
                    />
                </Box>

                {/* Right: accordions */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px: { xs: 3, md: 6, lg: 8 },
                        py: { xs: 6, md: 8 },
                    }}
                >
                    <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', mb: 1 }}>
                        Industries We Serve
                    </Typography>
                    <Typography variant="h4" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.6rem', md: '2rem' }, mb: 4 }}>
                        Who We Staff For
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {SERVICES.map(({ title, body }) => (
                            <Accordion
                                key={title}
                                disableGutters
                                elevation={2}
                                sx={{
                                    borderRadius: '10px !important',
                                    '&:before': { display: 'none' },
                                    '&.Mui-expanded': { borderLeft: `4px solid ${ORANGE}` },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: ORANGE }} />}
                                    sx={{
                                        px: 3, py: 1,
                                        '& .MuiAccordionSummary-content': { my: 1.5 },
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 700, color: ORANGE, fontSize: '0.95rem' }}>
                                        {title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: 3, pb: 2.5 }}>
                                    <Typography sx={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                                        {body}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── Section 5: Staffing Needs Quiz ── */}
            <Box sx={{ px: { xs: 3, md: 8, lg: 12 }, py: { xs: 8, md: 10 }, background: 'transparent' }}>
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', display: 'block', textAlign: 'center' }}>
                    Find Your Fit
                </Typography>
                <Typography variant="h4" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.6rem', md: '2rem' }, mt: 1, mb: 2, textAlign: 'center' }}>
                    What Does Your Business Need?
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '0.95rem', textAlign: 'center', mb: 6, maxWidth: 540, mx: 'auto' }}>
                    Answer 3 quick questions and we'll point you to the right solution.
                </Typography>
                <QuizWidget navigate={navigate} />
            </Box>

            {/* ── Section 6: CTA ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 3, md: 8, lg: 12 },
                    py: { xs: 8, md: 10 },
                    textAlign: 'center',
                }}
            >
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                    Get Started
                </Typography>
                <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
                    Let's Discuss Your Needs.
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: '1rem', maxWidth: 560, mx: 'auto', mb: 5 }}>
                    Get in touch with us to discuss your staffing needs — we'll match you with the right people for the job.
                </Typography>
                <Button
                    onClick={() => navigate('/contact')}
                    sx={{ ...underlineLinkSx, color: 'white' }}
                >
                    Contact Us →
                </Button>
            </Box>

        </Box>
    );
};

export default StaffingSolutions;