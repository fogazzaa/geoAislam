import React from "react";
import { Box, Typography, Button, Divider, useTheme, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export default function ModalUltimasNoticias({ news, onClose }) {
    const theme = useTheme();

    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "95%", md: 800 },
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[24],
        p: 4,
        borderRadius: 2,
        maxHeight: "90vh",
        overflowY: "auto",
        color: theme.palette.text.primary,
    };

    if (!news) return null;

    const { title, source, date, description, link } = news;

    return (
        <Box sx={modalStyle}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <NewspaperIcon
                    color="primary"
                    sx={{ fontSize: 36, mr: 1 }}
                />
                <Button
                    onClick={onClose}
                    aria-label="Fechar"
                    sx={{ minWidth: 0, color: theme.palette.text.primary }}
                >
                    <CloseIcon />
                </Button>
            </Box>

            {/* Título */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    color: theme.palette.primary.dark,
                    fontWeight: 700,
                    mb: 1,
                    lineHeight: 1.3,
                }}
            >
                {title}
            </Typography>

            {/* Fonte e data */}
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Fonte: <strong>{source}</strong> | Publicado em: {date}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Conteúdo da notícia */}
            <Typography
                variant="body1"
                sx={{
                    mb: 2,
                    whiteSpace: "pre-line",
                }}
            >
                {description || "Descrição não disponível para esta notícia."}
            </Typography>

            {/* Link da notícia */}
            {link && (
                <Button
                    variant="outlined"
                    fullWidth
                    component={Link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        mb: 2,
                        borderColor: theme.palette.primary.main,
                    }}
                >
                    Ler notícia completa
                </Button>
            )}

            {/* Fechar */}
            <Button
                variant="contained"
                fullWidth
                sx={{
                    bgcolor: theme.palette.primary.main,
                    "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                    },
                    fontWeight: 600,
                }}
                onClick={onClose}
            >
                Voltar
            </Button>
        </Box>
    );
}
