import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Checkbox,
    Divider,
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
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

// ── Shared style tokens (mirrors CSS variables from the HTML) ─────────────────
const t = {
    orange:     '#e6720f',
    orangeDark: '#c45e08',
    navy:       '#0b2ca3',
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
                        {/* Logo mark */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                            <Box
                                sx={{
                                    width: 34,
                                    height: 34,
                                    background: t.orange,
                                    borderRadius: '9px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <PauseCircleOutlineIcon sx={{ color: 'white', fontSize: 18 }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 15,
                                    fontWeight: 800,
                                    color: t.navy,
                                    letterSpacing: '-0.2px',
                                }}
                            >
                                Uptown
                                <Box component="span" sx={{ color: t.orange }}>Hope</Box>
                            </Typography>
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

                    {/* SSO divider */}
                    <Divider
                        sx={{
                            margin: '18px 0',
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 11,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: t.textDim,
                            '&::before, &::after': { borderColor: t.border },
                        }}
                    >
                        or
                    </Divider>

                    {/* Google Workspace SSO */}
                    <Button
                        fullWidth
                        disableElevation
                        sx={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 600,
                            fontSize: '13.5px',
                            textTransform: 'none',
                            background: 'transparent',
                            color: t.textMid,
                            border: `1.5px solid ${t.border}`,
                            borderRadius: '9px',
                            padding: '11px',
                            display: 'flex',
                            gap: '9px',
                            transition: 'border-color 0.15s, background 0.15s',
                            '&:hover': {
                                borderColor: '#adb8e8',
                                background: t.navyLight,
                                color: t.navy,
                            },
                        }}
                    >
                        {/* Google icon */}
                        <Box component="svg" width="16" height="16" viewBox="0 0 24 24" fill="none" sx={{ flexShrink: 0 }}>
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </Box>
                        Sign in with Google Workspace
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