import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAV_LINKS = [
    { label: 'Home',               to: '/',                    exact: true  },
    { label: 'About',              to: '/about',               exact: false },
    { label: 'Careers',            to: '/career-opportunities',exact: false },
    { label: 'Staffing Solutions', to: '/staffing-solutions',  exact: false },
    { label: 'Contact',            to: '/contact',             exact: false },
];

const MainNav = () => {
    const [visible, setVisible] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const lastScrollTop = useRef(0);
    const location = useLocation();

    // Show navbar on scroll up from anywhere, hide on scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll =
                window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll < lastScrollTop.current) {
                // Scrolling up — always show
                setVisible(true);
            } else if (currentScroll > lastScrollTop.current && currentScroll > 60) {
                // Scrolling down past 60px — hide
                setVisible(false);
            }

            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fix: exact match for '/', prefix match for all other routes
    const isActive = (to, exact) =>
        exact ? location.pathname === to : location.pathname.startsWith(to);

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid #e5e1db',
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>

                        {/* Logo */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', ml: 0 }}
                        >
                            <Box
                                component="img"
                                src="images/uptownhope_logo.jpeg"
                                alt="Uptown Hope logo"
                                sx={{ width: 100, height: 60, objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Desktop nav links */}
                        <Box
                            sx={{
                                display: { xs: 'none', xl: 'flex' },
                                alignItems: 'center',
                                gap: 3,
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                            }}
                        >
                            {NAV_LINKS.map(({ label, to, exact }) => {
                                const active = isActive(to, exact);
                                return (
                                    <Button
                                        key={to}
                                        component={Link}
                                        to={to}
                                        disableRipple
                                        sx={{
                                            color: active ? '#0b2ca3' : '#374151',
                                            fontWeight: active ? 700 : 500,
                                            fontSize: '0.9375rem',
                                            textTransform: 'none',
                                            fontFamily: "'Outfit', sans-serif",
                                            borderRadius: 0,
                                            px: 1.75,
                                            py: 1,
                                            borderTop: active
                                                ? '2px solid #0b2ca3'
                                                : '2px solid transparent',
                                            borderBottom: active
                                                ? '2px solid #0b2ca3'
                                                : '2px solid transparent',
                                            '&:hover': {
                                                color: '#0b2ca3',
                                                backgroundColor: 'transparent',
                                                borderTop: '2px solid #0b2ca3',
                                                borderBottom: '2px solid #0b2ca3',
                                            },
                                        }}
                                    >
                                        {label}
                                    </Button>
                                );
                            })}
                        </Box>

                        {/* Staff Portal CTA — pinned to end */}
                        <Box sx={{ display: { xs: 'none', xl: 'flex' } }}>
                            <Button
                                component={Link}
                                to="/staff/login"
                                variant="contained"
                                disableElevation
                                sx={{
                                    backgroundColor: '#e6720f',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                    fontSize: '0.875rem',
                                    textTransform: 'none',
                                    fontFamily: "'Outfit', sans-serif",
                                    borderRadius: '8px',
                                    px: 2.5,
                                    py: 1,
                                    transition: 'background-color 0.2s, transform 0.1s, box-shadow 0.2s',
                                    '&:hover': {
                                        backgroundColor: '#c45e08',
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 4px 12px rgba(230,114,15,0.35)',
                                    },
                                }}
                            >
                                Staff Portal
                            </Button>
                        </Box>

                        {/* Mobile hamburger */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="open navigation menu"
                            sx={{ display: { xs: 'flex', xl: 'none' }, color: '#0b2ca3' }}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>
                </Container>
            </AppBar>

            {/* Spacer so content isn't hidden under the fixed AppBar */}
            <Toolbar />

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', xl: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 280,
                        backgroundColor: '#0b2ca3',
                        borderLeft: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                {/* Drawer header: close button */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: 2,
                        py: 1.5,
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            color: 'rgba(255,255,255,0.7)',
                            '&:hover': { color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.08)' },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Nav links */}
                <List sx={{ px: 2, pt: 2, flex: 1 }}>
                    {NAV_LINKS.map(({ label, to, exact }) => {
                        const active = isActive(to, exact);
                        return (
                            <ListItem key={to} disablePadding sx={{ mb: 0.5 }}>
                                <ListItemButton
                                    component={Link}
                                    to={to}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        borderRadius: '10px',
                                        py: 1.25,
                                        px: 2,
                                        color: active ? '#ffffff' : 'rgba(255,255,255,0.65)',
                                        backgroundColor: active
                                            ? 'rgba(255,255,255,0.12)'
                                            : 'transparent',
                                        borderLeft: active
                                            ? '3px solid #e6720f'
                                            : '3px solid transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.08)',
                                            color: '#ffffff',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={label}
                                        primaryTypographyProps={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '1rem',
                                            fontWeight: active ? 700 : 400,
                                            letterSpacing: '0.01em',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

                {/* Staff Portal button + footer */}
                <Box
                    sx={{
                        px: 2,
                        pb: 4,
                        pt: 2,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <Button
                        component={Link}
                        to="/staff/login"
                        variant="contained"
                        fullWidth
                        disableElevation
                        onClick={handleDrawerToggle}
                        sx={{
                            backgroundColor: '#e6720f',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.9375rem',
                            textTransform: 'none',
                            fontFamily: "'Outfit', sans-serif",
                            borderRadius: '10px',
                            py: 1.4,
                            boxShadow: '0 4px 16px rgba(230,114,15,0.4)',
                            '&:hover': {
                                backgroundColor: '#c45e08',
                                boxShadow: '0 6px 20px rgba(230,114,15,0.5)',
                            },
                        }}
                    >
                        Staff Portal
                    </Button>
                    <Box
                        sx={{
                            mt: 2.5,
                            textAlign: 'center',
                            fontSize: '0.75rem',
                            color: 'rgba(255,255,255,0.3)',
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        © {new Date().getFullYear()} Uptown Hope
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default MainNav;
