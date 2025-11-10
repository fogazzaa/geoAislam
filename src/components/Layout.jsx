import React from "react";
import { Outlet } from "react-router-dom"; // Outlet renderiza o componente da rota
import {
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Importa o tema refatorado

// -------------------------------------------------------------------
// 1. Footer (Mantido)
// -------------------------------------------------------------------

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      // Cor de fundo levemente cinza
      backgroundColor: theme.palette.grey[200],
      borderTop: `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary" align="center">
        {
          "© 2024 Geo em Foco. Todos os direitos reservados. | Dados atualizados até Outubro/2025."
        }
      </Typography>
    </Container>
  </Box>
);

// -------------------------------------------------------------------
// 2. Componente de Layout Principal (Simplificado)
// -------------------------------------------------------------------

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* HEADER E NAVMENU REMOVIDOS AQUI */}
        
        {/* Conteúdo da página (Home, Guerra, Blocos, etc.) */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet /> 
        </Box>
        
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

// Nota: Certifique-se de que a exportação dos dados dos tópicos 
// (topicosData) foi mantida no arquivo HomePageContent.jsx se você 
// tiver dependências externas. Como o Header e NavMenu foram removidos, 
// a dependência aqui também foi removida.