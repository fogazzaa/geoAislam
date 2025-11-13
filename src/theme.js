import { createTheme } from "@mui/material/styles";
import { green, grey, red } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: '#1E8449',
            light: '#2ECC71',
            dark: '#1e7a46ff',
        },
        secondary: {
            main: red[600],
        },
        warning: {
            main: '#FFA500',
        },
        success: {
            main: green[600],
        },
        
        ...(mode === 'light'
            ? {
                background: {
                    default: grey[50],
                    paper: '#ffffff',
                },
                text: {
                    primary: grey[900],
                    secondary: grey[700],
                },
                divider: grey[300],
            }
            : {
                background: {
                    default: grey[900],
                    paper: grey[800],
                },
                text: {
                    primary: '#ffffff',
                    secondary: grey[400],
                },
                divider: grey[700],
            }),
    },
    
    typography: {
        fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
        h1: {
            fontWeight: 800,
            fontSize: "3.5rem",
            color: 'white',
        },
        h3: {
            fontWeight: 800,
            fontSize: '3.5rem',
            color: 'white',
        },
        h4: {
            fontWeight: 700,
            marginBottom: "24px",
        },
        h6: {
            fontWeight: 500,
            marginTop: "16px",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "8px",
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#145A32',
                    },
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingTop: "40px",
                    paddingBottom: "40px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: mode === 'light' ? '0 4px 12px rgba(0,0,0,0.08)' : '0 4px 12px rgba(0,0,0,0.4)',
                    transition: "transform 0.3s, box-shadow 0.3s",
                    borderRadius: "12px",
                    "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: mode === 'light' ? '0 8px 16px rgba(0,0,0,0.15)' : '0 8px 16px rgba(0,0,0,0.6)',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: mode === 'light' ? '0 2px 4px rgba(0,0,0,0.05)' : '0 2px 4px rgba(0,0,0,0.2)',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                backdrop: {
                    backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.15)',
                },
            },
        },
    },
});