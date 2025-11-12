import React from "react";
import { Outlet } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: theme.palette.grey[200],
      borderTop: `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary" align="center">
        {
          "© 2025 Geo em Foco | Desenvolvido por Vinicius F. Cintra"
        }
      </Typography>
    </Container>
  </Box>
);

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}