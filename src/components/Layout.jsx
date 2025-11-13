import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Typography, Box, Container, Button, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import TemaContexto from "../context/TemaContexto";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {"© 2025 Geo em Foco"}
        </Typography>
      </Container>
    </Box>
  );
};

export default function Layout() {
  const theme = useTheme();
  const colorMode = useContext(TemaContexto);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1100,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "50%",
          boxShadow: theme.shadows[4],
        }}
      >
        <Button
          onClick={colorMode.toggleColorMode}
          color="inherit"
          aria-label="Alternar modo de cor"
          sx={{
            p: 1,
            minWidth: 0,
            color: theme.palette.text.primary,
          }}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon sx={{ color: theme.palette.primary.light }} />
          ) : (
            <Brightness4Icon sx={{ color: theme.palette.primary.dark }} />
          )}
        </Button>
      </Box>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
