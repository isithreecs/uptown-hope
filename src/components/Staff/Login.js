import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Checkbox,  
    FormControlLabel,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

// ── Shared style tokens (mirrors CSS variables from the HTML) ─────────────────
const t = {
    orange:     '#e6720f',
    orangeDark: '#c45e08',
    navy:       '#072693',
    navyMid:    '#1a3dbf',
    navyLight:  '#eef1fc',
    white:      '#ffffff',
    surface:    '#f5f4f2',
    text:       '#111827',
    textMid:    '#4b5563',
    textDim:    '#9ca3af',
    border:     '#e5e1db',
};

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign in:', { email, password, remember });
    };

    // Shared input sx — mirrors input[type=email], input[type=password] styles
    const inputSx = {
        '& .MuiOutlinedInput-root': {
            fontFamily: "'Outfit', sans-serif",
            fontSize: 14,
            background: t.surface,
            borderRadius: '9px',
            transition: 'background 0.2s',
            '& fieldset': {
                borderColor: t.border,
                borderWidth: '1.5px',
            },
            '&:hover fieldset': {
                borderColor: '#c4bdb4',
            },
            '&.Mui-focused': {
                background: t.white,
                '& fieldset': {
                    borderColor: t.orange,
                    borderWidth: '1.5px',
                },
            },
            '& input': {
                padding: '11px 14px 11px 4px',
                color: t.text,
                '&::placeholder': { color: t.textDim, opacity: 1 },
            },
        },
        '& .MuiInputLabel-root': {
            fontFamily: "'Outfit', sans-serif",
            fontSize: '11.5px',
            fontWeight: 600,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: t.textMid,
        },
        '& .MuiInputLabel-root.Mui-focused': { color: t.orange },
        '& .MuiInputAdornment-root svg': {
            fontSize: 15,
            color: t.textDim,
            transition: 'color 0.2s',
        },
        '&:focus-within .MuiInputAdornment-root svg': { color: t.orange },
    };

    return (
        // Full-page navy background with diagonal grid + orange orb
        <Box
            sx={{
                fontFamily: "'Outfit', sans-serif",
                background: t.navy,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                // Diagonal grid (body::before)
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(
                        -45deg,
                        rgba(255,255,255,0.015) 0px,
                        rgba(255,255,255,0.015) 1px,
                        transparent 1px,
                        transparent 48px
                    )`,
                },
                // Orange orb (body::after)
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'rgba(230,114,15,0.08)',
                    bottom: -180,
                    right: -120,
                    pointerEvents: 'none',
                },
            }}
        >
            {/* Card */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    background: t.white,
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: 440,
                    overflow: 'hidden',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)',
                    animation: 'rise 0.55s cubic-bezier(0.16,1,0.3,1) both',
                    '@keyframes rise': {
                        from: { opacity: 0, transform: 'translateY(24px) scale(0.98)' },
                        to:   { opacity: 1, transform: 'translateY(0) scale(1)' },
                    },
                }}
            >
                {/* Orange top bar */}
                <Box
                    sx={{
                        height: 5,
                        background: `linear-gradient(90deg, ${t.orange}, ${t.orangeDark})`,
                    }}
                />

                {/* Card body */}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ padding: '40px 40px 36px' }}
                >
                    {/* Header: logo-mark + staff badge */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: '32px',
                        }}
                    >
                        {/* Logo */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', ml: 0 }}
                        >
                            <Box
                                component="img"
                                src="../images/uptownhope_logo.jpeg"
                                alt="Uptown Hope logo"
                                sx={{ width: 100, height: 60, objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Staff badge */}
                        <Box
                            sx={{
                                fontSize: 11,
                                fontWeight: 600,
                                fontFamily: "'Outfit', sans-serif",
                                color: t.navy,
                                background: t.navyLight,
                                border: `1px solid rgba(11,44,163,0.15)`,
                                borderRadius: '20px',
                                padding: '4px 11px',
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Staff Portal
                        </Box>
                    </Box>

                    {/* Title + subtitle */}
                    <Typography
                        sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 22,
                            fontWeight: 700,
                            color: t.text,
                            letterSpacing: '-0.3px',
                            mb: '4px',
                        }}
                    >
                        Employee Sign In
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 13,
                            color: t.textDim,
                            mb: '28px',
                        }}
                    >
                        Use your organization credentials to access the portal.
                    </Typography>

                    {/* Work Email */}
                    <TextField
                        fullWidth
                        label="Work Email"
                        type="email"
                        placeholder="name@uptownhope.org"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{ ...inputSx, mb: '14px' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Password */}
                    <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        sx={{ ...inputSx, mb: 0 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        size="small"
                                        onClick={() => setShowPassword((v) => !v)}
                                        edge="end"
                                        sx={{ color: t.textDim }}
                                    >
                                        {showPassword
                                            ? <VisibilityOffOutlinedIcon fontSize="small" />
                                            : <VisibilityOutlinedIcon fontSize="small" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Remember me + Reset password */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '6px 0 22px',
                            fontSize: 13,
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    size="small"
                                    sx={{
                                        color: t.border,
                                        '&.Mui-checked': { color: t.orange },
                                        padding: '4px',
                                    }}
                                />
                            }
                            label={
                                <Typography
                                    sx={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 13,
                                        color: t.textMid,
                                    }}
                                >
                                    Keep me signed in
                                </Typography>
                            }
                            sx={{ ml: 0 }}
                        />
                        <Box
                            component={Link}
                            to="/forgot-password"
                            sx={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 13,
                                fontWeight: 600,
                                color: t.navy,
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                            }}
                        >
                            Reset password
                        </Box>
                    </Box>

                    {/* Sign In button */}
                    <Button
                        type="submit"
                        fullWidth
                        disableElevation
                        sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: 15,
                            textTransform: 'none',
                            background: t.navy,
                            color: 'white',
                            borderRadius: '9px',
                            padding: '13px',
                            boxShadow: '0 4px 16px rgba(11,44,163,0.3)',
                            transition: 'background 0.15s, transform 0.1s, box-shadow 0.15s',
                            '&:hover': {
                                background: t.navyMid,
                                transform: 'translateY(-1px)',
                                boxShadow: '0 6px 20px rgba(11,44,163,0.35)',
                            },
                            '&:active': { transform: 'translateY(0)' },
                        }}
                    >
                        Sign In to Portal
                    </Button>
                </Box>

                {/* Card footer */}
                <Box
                    sx={{
                        borderTop: `1px solid ${t.border}`,
                        padding: '16px 40px',
                        background: t.surface,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: 12,
                            color: t.textDim,
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        <LockOutlinedIcon sx={{ fontSize: 12, color: t.textDim }} />
                        Secure, authorized access only
                    </Box>
                    <Box
                        component={Link}
                        to="/it-support"
                        sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 12,
                            fontWeight: 600,
                            color: t.navy,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        <SupportAgentOutlinedIcon sx={{ fontSize: 14 }} />
                        IT Support →
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}