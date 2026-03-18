import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid2,
    Typography,
    keyframes,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeace, faSun, faHourglass2, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import headerImg from '../pageImages/missing_puzzlepiece.jpg';
import sunshineImg  from '../pageImages/missing_puzzlepiece.jpg';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

const STATS = [
    { value: '15+',   label: 'Years in Business'      },
    { value: '500+',  label: 'Positions Filled'        },
    { value: '100%',  label: 'Commitment to Quality'   },
    { value: '24/7',  label: 'Support for Clients'     },
];

const SERVICES = [
    {
        icon: faPeace,
        title: 'Holistic',
        description: 'A whole-person approach to quality service provision for clients and associates.',
        path: '/about',
    },
    {
        icon: faSun,
        title: 'Opportunity',
        description: "Improving clients' productivity through effective staff augmentation.",
        path: '/career-opportunities',
    },
    {
        icon: faHourglass2,
        title: 'Preparation',
        description: 'Commitment to achieving positive outcomes for clients and associates.',
        path: '/staffing-solutions',
    },
    {
        icon: faHandsHelping,
        title: 'Empowerment',
        description: 'Staff empowered to confidently provide superior support to every client.',
        path: '/contact',
    },
];

// ── Animation ─────────────────────────────────────────────────────────────────

const cardHover = keyframes`
  0%   { transform: translateY(0); box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
  100% { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(7,37,144,0.15); }
`;

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
                    alignItems: 'flex-end'
                }}
            >
                {/* Dark overlay — no blue tint */}
                <Box
                    sx={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                    }}
                />

                {/* Hero text — bottom-left aligned like Allegis */}
                <Box
                    sx={{
                        position: 'relative', zIndex: 1,
                        px: { xs: 3, sm: 5, md: 10, lg: 14 },
                        pb: { xs: 2, sm: 3, md: 4 },
                        maxWidth: 680,
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            ...sectionHeadingSx,
                            color: 'white',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.6rem', lg: '3.2rem', xl: '3.8rem' },
                            mb: { xs: 2, md: 3 },
                            letterSpacing: { xs: '-0.5px', md: '-1px' },
                        }}
                    >
                        Staffing Done Right.
                    </Typography>
                    <Typography
                        sx={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.05rem' },
                            lineHeight: 1.75,
                            mb: { xs: 3, md: 4 },
                            maxWidth: 480,
                        }}
                    >
                        We connect the most qualified individuals to the companies that need them —
                        through a holistic, people-first approach to staffing.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
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
                    px: { xs: 3, md: 8 },
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
                    mt: 0,
                }}
            >
                {/* Left: text */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px: { xs: 4, md: 10, lg: 14 },
                        py: { xs: 7, md: 10 },
                        background: 'rgba(218,220,226,0.35)',
                        borderBottom: '1px solid rgba(218,220,226,0.8)',
                    }}
                >
                    <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em', mb: 1 }}>
                        Who We Are
                    </Typography>
                    <Typography sx={{ color: '#444', fontSize: '1rem', lineHeight: 1.9, maxWidth: 560 }}>
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
                            alignSelf: 'flex-start',
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

                {/* Right: image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '42%' },
                        minHeight: { xs: 260, md: 'auto' },
                        flexShrink: 0,
                        backgroundImage: `url(${sunshineImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Box>

            {/* ── Section 4: Service cards ── */}
            <Box sx={{ px: { xs: 3, md: 8, lg: 12 }, py: { xs: 8, md: 10 }, background: 'transparent' }}>
                <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                    What We Offer
                </Typography>
                <Typography variant="h3" sx={{ ...sectionHeadingSx, fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 6, mt: 1 }}>
                    People-Powered Solutions.
                </Typography>

                <Grid2 container spacing={3}>
                    {SERVICES.map(({ icon, title, description, path }) => (
                        <Grid2 key={title} size={{ xs: 12, sm: 6, lg: 3 }}>
                            <Card
                                elevation={0}
                                onClick={() => navigate(path)}
                                sx={{
                                    height: '100%',
                                    cursor: 'pointer',
                                    borderRadius: '12px',
                                    border: `1px solid rgba(7,37,144,0.1)`,
                                    borderTop: `4px solid ${ORANGE}`,
                                    background: '#fff',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        animation: `${cardHover} 0.3s forwards`,
                                    },
                                }}
                            >
                                <CardMedia sx={{ pt: 4, pb: 1, textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={icon} size="3x" style={{ color: ORANGE }} />
                                </CardMedia>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.75 }}>
                                        {description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>

            {/* ── Section 5: Careers CTA — full-bleed navy ── */}
            <Box
                sx={{
                    background: NAVY,
                    px: { xs: 4, md: 10, lg: 14 },
                    py: { xs: 8, md: 10 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 4,
                }}
            >
                <Box sx={{ maxWidth: 560 }}>
                    <Typography variant="overline" sx={{ color: ORANGE, fontWeight: 700, letterSpacing: '0.12em' }}>
                        Staffing Solutions
                    </Typography>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1, mb: 2 }}>
                        Seize Your Opportunity.
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1rem' }}>
                        For a full list of positions we fill and staffing solutions we provide,
                        visit our Staffing Solutions page — or reach out directly.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexShrink: 0 }}>
                    <Button
                        onClick={() => navigate('/staffing-solutions')}
                        sx={{
                            backgroundColor: ORANGE,
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            borderRadius: '60px',
                            px: 4,
                            py: 1.4,
                            border: 'none',
                            '&:hover': { backgroundColor: '#c45e08', border: 'none' },
                        }}
                    >
                        Staffing Solutions
                    </Button>
                    <Button
                        onClick={() => navigate('/contact')}
                        sx={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            borderRadius: '60px',
                            px: 4,
                            py: 1.4,
                            border: '2px solid rgba(255,255,255,0.4)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.08)',
                                border: '2px solid rgba(255,255,255,0.7)',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;