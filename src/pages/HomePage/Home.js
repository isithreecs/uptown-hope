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

const STATS = [
    { value: '5+',   label: 'Years in Business'      },
    { value: '300+',  label: 'Positions Filled'        },
    { value: '100%',  label: 'Commitment to Quality'   },
    { value: '24/7',  label: 'Support for Clients'     },
];

// ── Shared sx ─────────────────────────────────────────────────────────────────

const sectionHeadingSx = { color: NAVY, fontWeight: 800, lineHeight: 1.2 };

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
                            gap: 2,
                            flexWrap: 'wrap',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'center', md: 'flex-start' },
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        {[
                            { label: 'Explore Careers', path: '/career-opportunities' },
                            { label: 'Find Staff',      path: '/staffing-solutions'   },
                        ].map(({ label, path }) => (
                            <Button
                                key={label}
                                variant="outlined"
                                onClick={() => navigate(path)}
                                sx={{
                                    backgroundColor: ORANGE,
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    borderRadius: '60px',
                                    px: 4.5,
                                    py: 1.4,
                                    border: 'none',
                                    transition: 'background 0.2s, transform 0.1s, box-shadow 0.2s',
                                    '&:hover': {
                                        backgroundColor: '#c45e08',
                                        border: 'none',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 24px rgba(230,115,14,0.4)',
                                    },
                                }}
                            >
                                {label}
                            </Button>
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
                        privately held limited liability company organized under the laws of the State of Maryland.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9 }}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                        gap: { xs: 6, md: 8 },
                        justifyContent: 'center',
                        mb: 8,
                    }}
                >
                    {/* Contingent Workforce */}
                    <Box sx={{ flex: 1, maxWidth: 460, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                            <FontAwesomeIcon icon={faPeopleGroup} size="3x" style={{ color: ORANGE }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>
                            Contingent Workforce Solutions
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            We provide flexible, on-demand staffing to help organizations manage workforce
                            fluctuations — covering PTO, leave of absence, vacancies, and surges in workload
                            with qualified, ready-to-contribute associates.
                        </Typography>
                    </Box>
 
                    {/* Divider */}
                    <Box sx={{ width: '1px', background: 'rgba(255,255,255,0.12)', display: { xs: 'none', md: 'block' }, flexShrink: 0 }} />
 
                    {/* RPO */}
                    <Box sx={{ flex: 1, maxWidth: 460, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="3x" style={{ color: ORANGE }} />
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1.5 }}>
                            Recruitment Process Outsourcing (RPO)
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '0.95rem' }}>
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