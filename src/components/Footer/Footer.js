import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

// ── Constants ─────────────────────────────────────────────────────────────────

const NAV_LINKS = [
    { label: 'Home',                to: '/' },
    { label: 'About',               to: '/about' },
    { label: 'Employment',          to: '/employment' },
    { label: 'Workforce Solutions', to: '/staffing-solutions' },
    { label: 'Contact',             to: '/contact' },
];

const SOCIAL_LINKS = [
    { url: 'https://linkedin.com/company/uptown-hope-llc/', network: 'linkedin'  },
    { url: 'https://facebook.com',                         network: 'facebook'  },
    { url: 'https://instagram.com/uptownhope',             network: 'instagram' },
    { url: 'tel:4103639495',                               network: 'sharethis' },
    { url: 'mailto:info@uptownhope.com',                   network: 'email'     },
];

// const NAVY        = '#0b2ca3';
const HOVER_SHADOW = '2px 2px 5px rgba(230, 114, 15, 0.9)';

// ── Shared sx ─────────────────────────────────────────────────────────────────

const navLinkSx = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: { xs: 14, sm: 16, md: 20 },
    color: 'white',
    textDecoration: 'none',
    transition: 'text-shadow 0.3s ease',
    '&:hover': { textShadow: HOVER_SHADOW },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                background: 'rgba(11, 44, 163, 0.3)',
                fontWeight: 700,
                pt: { xs: '1.2em', md: '1.5em' },
                pb: '0.75em',
                px: { xs: '1em', md: '2em' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1em',
                position: 'relative',
                bottom: 'unset',
                left: 'unset',
                right: 'unset',
                zIndex: 'unset',
                overflow: 'hidden',
                // Glow orb 1 — orange, left side
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: 'rgba(230, 115, 14, 0.3)',
                    filter: 'blur(40px)',
                    top: '-60px',
                    left: '10%',
                    animation: 'glowPulse1 4s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
                // Glow orb 2 — navy, right side
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'rgba(7, 37, 144, 0.45)',
                    filter: 'blur(36px)',
                    top: '-40px',
                    right: '12%',
                    animation: 'glowPulse2 4s ease-in-out infinite',
                    animationDelay: '2s',
                    pointerEvents: 'none',
                    zIndex: 0,
                },
                '@keyframes glowPulse1': {
                    '0%, 100%': { transform: 'scale(1)',   opacity: 0.6 },
                    '50%':      { transform: 'scale(1.35)', opacity: 1   },
                },
                '@keyframes glowPulse2': {
                    '0%, 100%': { transform: 'scale(1)',   opacity: 0.5 },
                    '50%':      { transform: 'scale(1.3)', opacity: 0.9 },
                },
            }}
        >
            {/* ── Logo left · Nav center · Icons right ── */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: '1.5em', md: 0 },
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Left: logo + address */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.3em',
                        pl: { md: 6 },
                    }}
                >
                    <Link to="/" aria-label="Uptown Hope home" style={{ display: 'block' }}>
                        <Box
                            component="img"
                            src="/images/uptownhope_logo.jpeg"
                            alt="Uptown Hope logo"
                            sx={{ display: 'block', width: 160, height: 'auto', maxWidth: '100%' }}
                        />
                    </Link>
                    <Typography
                        sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 600,
                            color: 'white',
                            fontSize: 16,
                            lineHeight: 1.7,
                            textAlign: 'center',
                            opacity: 0.75,
                        }}
                    >
                        300 Redland Ct, Suite 309<br />
                        Owings Mills, MD 21117
                    </Typography>
                </Box>

                {/* Center: nav links inline */}
                <Box
                    component="nav"
                    aria-label="Footer navigation"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        flex: 1,
                        gap: { xs: '6px 20px', md: 0 },
                    }}
                >
                    {NAV_LINKS.map(({ label, to }) => (
                        <Box key={to} component={Link} to={to} sx={navLinkSx}>
                            {label}
                        </Box>
                    ))}
                </Box>

                {/* Right: Stay Connected + icons */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.4em',
                        pr: { md: 6 },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: { xs: 14, sm: 16, md: 20 },
                            fontWeight: 700,
                            color: 'white',
                        }}
                    >
                        Stay Connected
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        {SOCIAL_LINKS.map(({ url, network }) => (
                            <SocialIcon
                                key={network}
                                url={url}
                                network={network}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: 38, height: 38 }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── Divider ── */}
            <Box sx={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)' }} />

            {/* ── Copyright ── */}
            <Box sx={{ width: '100%' }}>
                <Typography
                    sx={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 12,
                        color: 'white',
                        opacity: 0.6,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    © {currentYear} Uptown Hope Corporation. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;