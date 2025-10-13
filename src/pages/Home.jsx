import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d32f2f",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#5c6b77",
    },
  },
  typography: {
    fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
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
          marginTop: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "40px",
          paddingBottom: "40px",
          textAlign: "center",
        },
      },
    },
  },
});

function Home() {
  const navigate = useNavigate();

  const topicos = [
    { title: "Guerra na Ucrania", path: "/ucrania", description: "Analise geo-politica e impactos territoriais do conflito." },
    { title: "Blocos Economicos e Globalizacao", path: "/blocos-economicos", description: "O papel do BRICS, G7, UE e a nova ordem mundial." },
    { title: "A Tensao EUA vs. China", path: "/eua-china", description: "Disputa comercial, tecnologica e a hegemonia global." },
    { title: "Crises Ambientais", path: "/meio-ambiente", description: "Mudancas climaticas, recursos hidricos e seguranca alimentar." },
    { title: "Geografia da Populacao", path: "/demografia", description: "Migracoes, envelhecimento populacional e urbanizacao." },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Geo em Foco: Analise dos Assuntos Atuais
        </Typography>
        <Typography variant="h6" gutterBottom color="textSecondary">
          Explorando os principais conflitos e tendencias que moldam o cenario global de hoje.
        </Typography>

        <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          {topicos.map((topico) => (
            <Box key={topico.path} sx={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
              <Typography variant="subtitle1" component="p" sx={{ fontWeight: 500, color: theme.palette.text.primary }}>
                {topico.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.secondary }}>
                {topico.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={topico.path}
                sx={{ width: '100%', maxWidth: 300 }}
              >
                Acessar {topico.title}
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Home;