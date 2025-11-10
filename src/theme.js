// Arquivo: src/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    // Cores baseadas no design Medxpress
    primary: {
      main: "#1E8449", // Verde Escuro Forte para AppBar e Botões Principais (similar ao logo)
      light: "#2ECC71", // Verde Mais Claro/Brilhante para detalhes
      dark: "#145A32", // Verde mais escuro para hover
    },
    secondary: {
      main: "#d32f2f", // Mantendo o vermelho para ícones de atenção, como no original
    },
    background: {
      default: "#f4f6f8", // Fundo geral mais claro
      paper: "#ffffff", // Fundo de Cards
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#5c6b77",
    },
  },
  typography: {
    fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
    h1: {
      // Para o título da Hero Section
      fontWeight: 800,
      fontSize: "3.5rem",
      color: "white", // Títulos na Hero são brancos
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
          // Ajuste para botões primários
          "&:hover": {
            backgroundColor: "#145A32", // Cor escura no hover
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
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "transform 0.3s, box-shadow 0.3s",
          borderRadius: "12px",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;