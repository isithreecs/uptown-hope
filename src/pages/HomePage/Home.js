import {
    Box,
    Button,
    Grid2,
    Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import headerImg from '../pageImages/missing_puzzlepiece.jpg';
import workforceImg from '../pageImages/stafferWorking.jpg'
import sunshineImg  from '../pageImages/sunshine.jpg';;

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

export const STATS = [
    { value: '5+',   label: 'Years in Business'      },
    { value: '300+',  label: 'Positions Filled'        },
    { value: '100%',  label: 'Commitment to Quality'   },
    { value: '24/7',  label: 'Support for Clients'     },
];

// Two labeled entry points — businesses first, since they're the paying side
export const HERO_ACTIONS = [
    {
        audience: 'For Businesses',
        label:    'Find Staff',
        path:     '/staffing-solutions',
        primary:  true,
    },
    {
        audience: 'For Job Seekers',
        label:    'Explore Careers',
        path:     '/career-opportunities',
        primary:  false,
    },
];

// ── Shared sx ─────────────────────────────────────────────────────────────────

const sectionHeadingSx = { color: NAVY, fontWeight: 800, lineHeight: 1.2 };

const heroButtonBaseSx = {
    fontWeight: 700,
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderRadius: '60px',
    px: 4.5,
    py: 1.4,
    minWidth: 210,
    transition: 'background 0.2s, color 0.2s, border-color 0.2s, transform 0.1s, box-shadow 0.2s',
};

const heroPrimaryButtonSx = {
    ...heroButtonBaseSx,
    backgroundColor: ORANGE,
    color: 'white',
    border: 'none',
    '&:hover': {
        backgroundColor: '#c45e08',
        border: 'none',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(230,115,14,0.4)',
    },
};

const heroSecondaryButtonSx = {
    ...heroButtonBaseSx,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    border: '1.5px solid rgba(255,255,255,0.45)',
    backdropFilter: 'blur(2px)',
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.95)',
        color: NAVY,
        border: '1.5px solid rgba(255,255,255,0.95)',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Home = () => {
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

            {/* ── Section 1: Full-bleed hero ── */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '82vh', md: '95vh' },
                    backgroundImage: `url(${headerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                }}
            >
                {/* Dark overlay — no blue tint */}
                <Box
                    sx={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                    }}
                />

                {/* Hero text — centered on mobile, bottom-left on desktop */}
                <Box
                    sx={{
                        position: 'relative', zIndex: 1,
                        px: { xs: 4, md: 10, lg: 14 },
                        pb: { xs: 2, sm: 3, md: 4 },
                        maxWidth: { xs: '100%', md: 680 },
                        width: '100%',
                        textAlign: { xs: 'center', md: 'left' },
                        mx: { xs: 'auto', md: 0 },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            ...sectionHeadingSx,
                            color: NAVY,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.6rem', lg: '3.3rem', xl: '4rem' },
                            mb: { xs: 2, md: 3 },
                            letterSpacing: { xs: '-0.5px', md: '-1px' },
                            // Halo separates navy text from the dark overlay behind it.
                            // Stacked twice per breakpoint to thicken the edge, and scaled
                            // up with font size so it stays proportional.
                            textShadow: {
                                xs: '0 0 2px rgba(255,255,255,0.95), 0 0 2px rgba(255,255,255,0.95)',
                                md: '0 0 3px rgba(255,255,255,0.95), 0 0 3px rgba(255,255,255,0.95)',
                                xl: '0 0 4px rgba(255,255,255,0.95), 0 0 4px rgba(255,255,255,0.95)',
                            },
                        }}
                    >
                        Staffing Done Right.
                    </Typography>
                    <Typography
                        sx={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.4rem' },
                            lineHeight: 1.6,
                            mb: { xs: 3, md: 4 },
                            maxWidth: { xs: '100%', md: 480 },
                        }}
                    >
                        We connect the most qualified individuals to the companies that need them —
                        through a holistic, people-first approach to staffing.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 3, sm: 4 },
                            flexWrap: 'wrap',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'center', md: 'flex-start' },
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        {HERO_ACTIONS.map(({ audience, label, path, primary }) => (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: { xs: 'center', md: 'flex-start' },
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'rgba(255,255,255,0.7)',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.14em',
                                        pl: { md: 0.5 },
                                    }}
                                >
                                    {audience}
                                </Typography>
                                <Button
                                    onClick={() => navigate(path)}
                                    disableElevation
                                    sx={primary ? heroPrimaryButtonSx : heroSecondaryButtonSx}
                                >
                                    {label}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── Section 2: Stat bar ── */}
            <Box
                sx={{
                    background: NAVY,
                    py: { xs: 5, md: 4 },
                    px: { xs: 4, md: 8 },
                }}
            >
                <Grid2 container justifyContent="center" spacing={0}>
                    {STATS.map(({ value, label }, i) => (
                        <Grid2
                            key={label}
                            size={{ xs: 6, md: 3 }}
                            sx={{
                                textAlign: 'center',
                                py: { xs: 2, md: 3 },
                                borderRight: { md: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' },
                            }}
                        >
                            <Typography sx={{ color: ORANGE, fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1 }}>
                                {value}
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', mt: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                {label}
                            </Typography>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>

            {/* ── Section 2b: Baltimore Ravens Small Business Partner ──
                The crest is used exactly as supplied by Eleven Sports Media:
                not edited, recoloured, skewed, cropped, or made transparent,
                with the 2026 season date intact. The wording deliberately says
                "Small Business Partner" — "Official Partner", "Sponsor" and
                "Sponsorship" are contractual breaches. */}
            <Box
                sx={{
                    background: '#f9f8f6',
                    borderBottom: '1px solid rgba(7,37,144,0.08)',
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 7, md: 9 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: { xs: 5, md: 8 },
                }}
            >
                {/* Crest container */}
                <Box
                    component="a"
                    // href="https://www.baltimoreravens.com/fans/eleven-sports-media/small-business-program/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Baltimore Ravens Small Business Program"
                    sx={{ display: 'block', flexShrink: 0, lineHeight: 0 }}
                >
                    <Box
                        component="img"
                        src="/images/Ravens_SBP_2_26.jpg"
                        alt="Small Business Partner of the Baltimore Ravens, 2026"
                        sx={{
                            display: 'block',
                            width: { xs: 280, sm: 360, md: 400 },
                            maxWidth: '100%',
                            height: 'auto',   // never set both — skewing is a breach
                        }}
                    />
                </Box>

                {/* Text container — centred within its own column */}
                <Box sx={{ textAlign: 'center', maxWidth: 520 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', display: 'block' }}
                    >
                        In Good Company
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.2rem' }, mt: 1, mb: 2.5 }}
                    >
                        A Baltimore Ravens Small Business Partner
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9 }}>
                        We're proud to stand alongside Baltimore's team. The care we put into every
                        placement comes from the same love for the community we serve.
                    </Typography>
                </Box>
            </Box>

            {/* ── Section 3: About blurb — full-width panel ── */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                    background: 'rgba(218,220,226,0.35)',
                    borderBottom: '1px solid rgba(218,220,226,0.8)',
                }}
            >
                {/* Left: text */}
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
                        Who We Are
                    </Typography>
                    <Typography sx={{ color: '#444', fontSize: '1rem', lineHeight: 1.9, maxWidth: 480 }}>
                        <Box component="span" sx={{ fontWeight: 700, color: NAVY }}>Uptown Hope (UH)</Box> is a
                        privately held corporation organized under the laws of the State of Maryland.
                        We offer staff support to organizations for a wide variety of positions — covering shortages
                        due to PTO, sickness, leave of absence, vacancies, or sudden increases in workload due to
                        growth and productivity needs.
                    </Typography>
                    <Button
                        onClick={() => navigate('/about')}
                        sx={{
                            mt: 4,
                            alignSelf: 'center',
                            color: NAVY,
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            px: 0,
                            borderBottom: `2px solid ${ORANGE}`,
                            borderRadius: 0,
                            '&:hover': { background: 'transparent', color: ORANGE },
                        }}
                    >
                        Learn More →
                    </Button>
                </Box>
 
                {/* Right: styled image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src={sunshineImg}
                        alt="Who We Are"
                        sx={{
                            width: '100%',
                            height: { xs: '260px', md: '420px' },
                            objectFit: 'cover',
                            borderRadius: '16px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                            display: 'block',
                        }}
                    />
                </Box>
            </Box>
 
            {/* ── Section 4: Image + text panel ── */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    alignItems: 'stretch',
                    background: 'transparent',
                }}
            >
                {/* Left: styled image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 5 },
                    }}
                >
                    <Box
                        component="img"
                        src={workforceImg}
                        alt="Be The Missing Piece"
                        sx={{
                            width: '100%',
                            height: { xs: '260px', md: '420px' },
                            objectFit: 'cover',
                            borderRadius: '16px',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                            display: 'block',
                        }}
                    />
                </Box>
 
                {/* Right: text */}
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
                        Employment Opportunities
                    </Typography>
                    <Typography variant="h3" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 3 }}>
                        Be The Missing Piece
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9, mb: 2 }}>
                        Ready to make your move? Uptown Hope connects driven individuals with employers who need them — on terms that work for you. 
                        Whether you're stepping back into the workforce, pivoting to something new, or simply looking for flexibility that fits your life, we have opportunities that meet you where you are.
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9 }}>
                        From healthcare to finance, events and more, we work across a wide range of industries to match the right people with the right roles. 
                        Short-term, long-term, or permanent — the choice is yours.
                    </Typography>
                    <Button
                        onClick={() => navigate('/career-opportunities')}
                        sx={{
                            mt: 4,
                            alignSelf: 'center',
                            color: NAVY,
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            px: 0,
                            borderBottom: `2px solid ${ORANGE}`,
                            borderRadius: 0,
                            '&:hover': { background: 'transparent', color: ORANGE },
                        }}
                    >
                        Explore Careers →
                    </Button>
                </Box>
            </Box>

            {/* ── Section 5: Lines of business — full-bleed navy ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 8, md: 10 },
                }}
            >
                {/* Section header */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                        Staffing Solutions
                    </Typography>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1 }}>
                        Better People. Better Business
                    </Typography>
                </Box>
 
                {/* Two business line blocks */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 8 },
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        mb: { xs: 6, md: 8 },
                    }}
                >
                    {/* Contingent Workforce */}
                    <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 460 }, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                            <FontAwesomeIcon icon={faPeopleGroup} size="2x" style={{ color: ORANGE }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Contingent Workforce Solutions
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '0.95rem' } }}>
                            We provide flexible, on-demand staffing to help organizations manage workforce
                            fluctuations — covering PTO, leave of absence, vacancies, and surges in workload
                            with qualified, ready-to-contribute associates.
                        </Typography>
                    </Box>
 
                    {/* Divider */}
                    <Box sx={{ width: { xs: '60%', md: '1px' }, height: { xs: '1px', md: 'auto' }, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
 
                    {/* RPO */}
                    <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 460 }, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{ color: ORANGE }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Recruitment Process Outsourcing (RPO)
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: { xs: '0.875rem', md: '0.95rem' } }}>
                            Our RPO services take the complexity out of talent acquisition — delivering
                            end-to-end recruitment solutions that reduce time-to-hire, improve candidate
                            quality, and scale with your organization's growth.
                        </Typography>
                    </Box>
                </Box>
 
                {/* Links */}
                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button
                        onClick={() => navigate('/staffing-solutions')}
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            px: 0,
                            borderBottom: `2px solid ${ORANGE}`,
                            borderRadius: 0,
                            '&:hover': { background: 'transparent', color: ORANGE },
                        }}
                    >
                        Staffing Solutions →
                    </Button>
                    <Button
                        onClick={() => navigate('/contact')}
                        sx={{
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            px: 0,
                            borderBottom: `2px solid ${ORANGE}`,
                            borderRadius: 0,
                            '&:hover': { background: 'transparent', color: ORANGE },
                        }}
                    >
                        Contact Us →
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;