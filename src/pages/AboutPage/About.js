import React from 'react';
import { Parallax } from 'react-parallax';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardContent,
    Grid2,
    List,
    ListItem,
    ListItemIcon,
    Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import hopeImg  from '../pageImages/uptownhope_bkgrd.png';

// ── Constants ─────────────────────────────────────────────────────────────────

const ORANGE = 'rgba(230, 115, 14, 1)';
const NAVY   = '#072590';

const MISSION_CARDS = [
    {
        title: 'Motto',
        text: 'Positive Outlook, Open and Healthy Mind are the keys to success. Ability and Opportunity begin with Preparation and Availability.',
    },
    {
        title: 'Mission',
        text: "The mission of Uptown Hope is to take a holistic approach in delivering quality service, leveraging the unique opportunity to enhance clients' productivity through effective staff augmentation with well-trained, qualified, and empowered staff and associates.",
    },
    {
        title: 'Vision',
        text: "Uptown Hope is dedicated to delivering high-quality staffing services that foster a positive experience through open, collaborative relationships with clients, staff, and associates. Our goal is to consistently offer cost-effective and efficient staffing solutions, utilizing our holistic approach to add value to our clients' processes.",
    },
    {
        title: 'Values',
        text: 'Our fundamental beliefs and principles revolve around building relationships with our clients, employees, and associates which go beyond financial gains, but focus on a culture of involvement, partnership, collaboration, and personal, professional, and financial growth.',
    },
];

const LEADERSHIP = [
    {
        role: 'Uptown Hope, LLC — Founder and CEO',
        bullets: [
            'Extensive background, achievements, and effectiveness in business planning, development, operation and administration, financial management and oversight, and leadership.',
            'Over 40 years of administrative, financial, management and leadership experience in the financial, healthcare, insurance, and human service industries.',
            'Proven success in providing effective overall leadership and oversight within the agency and between agencies and external constituencies.',
            'Strategic planner responsible for ensuring the agency has a long-range strategy and makes consistent and timely progress to achieve its mission.',
            'A focused leader who develops and implements strategic plans and promotes active and broad participation by employees and associates to support the growth and success of clients.',
        ],
    },
    {
        role: 'Uptown Hope, LLC — CFO',
        bullets: [
            'A meticulous, dedicated, high-energy professional and administrator.',
            'Proven ability and extensive background and experience in financial management.',
            'More than 40 years combined financial experience in the financial, insurance, and human services industries.',
        ],
    },
];

// ── Subcomponents ─────────────────────────────────────────────────────────────

const SectionHeading = ({ children }) => (
    <Typography
        variant="h4"
        sx={{ color: NAVY, fontWeight: 700, mb: 1 }}
    >
        {children}
    </Typography>
);

const ItalicBody = ({ children, sx = {} }) => (
    <Typography
        variant="body1"
        sx={{ color: 'gray', fontStyle: 'italic', lineHeight: 1.8, ...sx }}
    >
        {children}
    </Typography>
);

// ── About ─────────────────────────────────────────────────────────────────────

const About = () => (
    <Box>
        {/* ── Section 1: Parallax hero ── */}
        <Parallax
            blur={0}
            bgImage={require('../pageImages/group_photo.jpg')}
            strength={300}
            bgImageStyle={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '110vh',
                width: '100%',
            }}
            alt="About Us Background"
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 3,
                    pt: '64px',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        color: ORANGE,
                        fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem', lg: '3.8rem', xl: '4.4rem' },
                        letterSpacing: { xs: '-0.5px', md: '-1px' },
                        lineHeight: 1.15,
                    }}
                >
                    Learn More About Us!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        mt: 2.5,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                        lineHeight: 1.6,
                        maxWidth: { xs: '100%', md: 600 },
                    }}
                >
                    Discover the mission, vision, and values at Uptown Hope!
                </Typography>
            </Box>
        </Parallax>

        {/* ── Section 2: H.O.P.E. vertical + image ── */}
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                background: 'rgba(218, 220, 226, 0.35)',
                borderBottom: '1px solid rgba(218,220,226,0.8)',
            }}
        >
            {/* Right: vertical acronym list */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: { xs: 4, md: 8, lg: 12 },
                    py: { xs: 6, md: 8 },
                    gap: 3,
                }}
            >
                {[
                    { letter: 'H', word: 'Holistic',    desc: 'We take a whole-person approach to staffing, addressing the full spectrum of client needs.' },
                    { letter: 'O', word: 'Opportunity', desc: 'We open doors — connecting talent with meaningful roles that drive real growth.' },
                    { letter: 'P', word: 'Preparation', desc: 'Our staff and associates are thoroughly trained and ready to contribute from day one.' },
                    { letter: 'E', word: 'Empowerment', desc: 'We invest in people — building confidence, capability, and long-term success.' },
                ].map(({ letter, word, desc }) => (
                    <Box key={letter} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '3rem', md: '4rem' },
                                fontWeight: 800,
                                color: NAVY,
                                lineHeight: 1,
                                minWidth: { xs: '3rem', md: '4rem' },
                            }}
                        >
                            {letter}
                        </Typography>
                        <Box sx={{ pt: 0.5 }}>
                            <Typography sx={{ fontWeight: 700, color: ORANGE, fontSize: '1.1rem', lineHeight: 1.2, mb: 0.5 }}>
                                {word}
                            </Typography>
                            <Typography sx={{ color: 'gray', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                {desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {/* Left: image */}
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
                    src={hopeImg}
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
        </Box>

        {/* ── Section 3: Mission / Vision / Values / Motto cards ── */}
        <Box sx={{
            backgroundColor: '#f9f8f6',
            backgroundImage: `repeating-linear-gradient(
                -45deg,
                rgba(7,37,144,0.015) 0px, rgba(7,37,144,0.015) 1px,
                transparent 1px, transparent 28px
            )`,
            px: { xs: 4, md: 8, lg: 12 },
            py: { xs: 8, md: 10 },
        }}>
            <Grid2 container spacing={3}>
                {MISSION_CARDS.map(({ title, text }) => (
                    <Grid2 key={title} size={{ xs: 12, sm: 6 }}>
                        <Card
                            elevation={3}
                            sx={{
                                height: '100%',
                                borderRadius: '12px',
                                borderTop: `4px solid ${ORANGE}`,
                                transition: 'box-shadow 0.2s',
                                '&:hover': { boxShadow: 6 },
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <SectionHeading>{title}</SectionHeading>
                                <ItalicBody>{text}</ItalicBody>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Box>

        {/* ── Section 4: Leadership credentials ── */}
        <Box
            sx={{
                px: { xs: 4, md: 8, lg: 12 },
                py: { xs: 8, md: 10 },
                background: 'rgba(218, 220, 226, 0.35)',
            }}
        >
            <SectionHeading>Leadership Credentials</SectionHeading>
            <ItalicBody sx={{ mb: 4, maxWidth: 1000, textAlign: 'center', mx: 'auto' }}>
                Our administrative and management staff have extensive and relevant experience as well
                as proven success managing and ensuring growth and productivity of organizations in
                different industries. We can do the same for your organization by supplying you with
                well-trained, highly skilled, and qualified staff that will positively contribute to
                the growth of your organization.
            </ItalicBody>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {LEADERSHIP.map(({ role, bullets }) => (
                    <Accordion
                        key={role}
                        disableGutters
                        elevation={2}
                        sx={{
                            borderRadius: '10px !important',
                            '&:before': { display: 'none' },
                            '&.Mui-expanded': {
                                borderLeft: `4px solid ${ORANGE}`,
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: ORANGE }} />}
                            sx={{
                                px: 3,
                                py: 1,
                                '& .MuiAccordionSummary-content': { my: 1.5 },
                            }}
                        >
                            <Typography sx={{ fontWeight: 700, color: ORANGE, fontSize: '1rem' }}>
                                {role}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: 3, pb: 3 }}>
                            <List disablePadding>
                                {bullets.map((bullet) => (
                                    <ListItem
                                        key={bullet}
                                        disableGutters
                                        alignItems="flex-start"
                                        sx={{ py: 0.5 }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                                            <ArrowRightIcon sx={{ color: ORANGE, fontSize: 20 }} />
                                        </ListItemIcon>
                                        <ItalicBody>{bullet}</ItalicBody>
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>

    </Box>
);

export default About;