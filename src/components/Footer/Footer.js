import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
 
// ── Constants ─────────────────────────────────────────────────────────────────
 
const NAV_LINKS = [
    { label: 'Home',               to: '/' },
    { label: 'About',              to: '/about' },
    { label: 'Careers',            to: '/career-opportunities' },
    { label: 'Staffing Solutions', to: '/staffing-solutions' },
    { label: 'Contact',            to: '/contact' },
];
 
const CONTACT_LINES = [
    { text: '300 Redland Ct., Suite 215, Owings Mills, MD 21117' },
    { text: '(410) 363-9495' },
    { text: 'info@uptownhope.com', href: 'mailto:info@uptownhope.com' },
];
 
const SOCIAL_LINKS = [
    { url: 'https://linkedin.com/company/uptown-hope-llc/', network: 'linkedin' },
    { url: 'https://facebook.com',                         network: 'facebook' },
];
 
const NAVY  = '#0b2ca3';
const HOVER_SHADOW = '2px 2px 5px rgba(230, 114, 15, 0.9)';
 
// ── Shared sx helpers ─────────────────────────────────────────────────────────
 
const navLinkSx = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    fontSize: { xs: 14, sm: 16, md: 20 },
    color: NAVY,
    textDecoration: 'none',
    transition: 'text-shadow 0.3s ease',
    '&:hover': { textShadow: HOVER_SHADOW },
};
 
const contactTextSx = {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    color: NAVY,
    fontSize: 14,
    lineHeight: 2,
};
 
// ── Component ─────────────────────────────────────────────────────────────────
 
const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                background: 'linear-gradient(175deg, rgba(218,220,226,0.6), #ffffff)',
                fontWeight: 700,
                padding: { xs: '1.5em 1em 1em', md: '2em 1em 1em' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {/* ── Top nav links ── */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: '2em',
                }}
            >
                <Box
                    component="nav"
                    aria-label="Footer navigation"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: { xs: '8px 24px', md: '0 55px' },
                    }}
                >
                    {NAV_LINKS.map(({ label, to }) => (
                        <Box
                            key={to}
                            component={Link}
                            to={to}
                            sx={navLinkSx}
                        >
                            {label}
                        </Box>
                    ))}
                </Box>
            </Box>
 
            {/* ── Content: logo / contact / social ── */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    gap: '1em',
                }}
            >
                {/* Logo */}
                <Box
                    sx={{
                        flex: 1,
                        minWidth: 250,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0.2em',
                    }}
                >
                    <Box
                        component={Link}
                        to="/"
                        aria-label="Uptown Hope home"
                    >
                        <Box
                            component="img"
                            src="/images/uptownhope_logo.jpeg"
                            alt="Uptown Hope logo"
                            sx={{
                                display: 'block',
                                maxWidth: '100%',
                                width: 240,
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Box>
 
                {/* Contact info */}
                <Box
                    sx={{
                        flex: 1,
                        minWidth: 250,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: '0.2em',
                        gap: '4px',
                    }}
                >
                    {CONTACT_LINES.map(({ text, href }) =>
                        href ? (
                            <Typography
                                key={text}
                                component="a"
                                href={href}
                                sx={{
                                    ...contactTextSx,
                                    textDecoration: 'none',
                                    transition: 'text-shadow 0.3s ease',
                                    '&:hover': { textShadow: HOVER_SHADOW },
                                }}
                            >
                                {text}
                            </Typography>
                        ) : (
                            <Typography key={text} sx={contactTextSx}>
                                {text}
                            </Typography>
                        )
                    )}
                </Box>
 
                {/* Social icons */}
                <Box
                    sx={{
                        flex: 1,
                        minWidth: 250,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: '0.2em',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: NAVY,
                            mb: '1em',
                        }}
                    >
                        Connect with us on social media
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
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
 
            {/* ── Copyright ── */}
            <Box sx={{ width: '100%', mt: '2em' }}>
                <Typography
                    sx={{
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 12,
                        color: NAVY,
                        textAlign: { xs: 'center', md: 'left' },
                        pl: { xs: 0, md: '2em' },
                    }}
                >
                    © {currentYear} Uptown Hope. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};
 
export default Footer;