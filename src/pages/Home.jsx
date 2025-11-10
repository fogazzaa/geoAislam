import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import BusinessIcon from "@mui/icons-material/Business";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PublicIcon from "@mui/icons-material/Public";
import theme from "../theme"; 

export const topicosData = [
    {
        key: "guerra_ucrania",
        title: "Guerra na Ucrania",
        description: "Analise geo-política e impactos territoriais do conflito.",
        path: "/guerra-ucrania",
        icon: (
            <LandscapeIcon
                sx={{ fontSize: 40, color: theme.palette.secondary.main }}
            />
        ),
    },
    {
        key: "blocos_economicos",
        title: "Blocos Economicos e Globalizacao",
        description: "O papel do BRICS, G7, UE e a nova ordem mundial.",
        path: "/blocos-economicos",
        icon: (
            <BusinessIcon
                sx={{ fontSize: 40, color: theme.palette.primary.light }}
            />
        ),
    },
    {
        key: "eua_vs_china",
        title: "A Tensao EUA vs. China",
        description: "Disputa comercial, tecnológica e a hegemonia global.",
        path: "/eua-china",
        icon: <FlashOnIcon sx={{ fontSize: 40, color: "#FFA500" }} />,
    },
    {
        key: "crises_ambientais",
        title: "Crises Ambientais",
        description:
            "Mudanças climáticas, recursos hídricos e segurança alimentar.",
        path: "/crises-ambientais",
        icon: <WbSunnyIcon sx={{ fontSize: 40, color: "#1976D2" }} />,
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    py: { xs: 8, md: 10 },
                    mb: 5,
                    position: "relative",
                    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                        <PublicIcon sx={{ color: theme.palette.primary.light, fontSize: 48, mb: 1 }} />
                        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }}}>
                            Entendendo a Geopolítica Hoje
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ mb: 4, fontWeight: 400, color: "#e8f5e9", fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                        >
                            Análise dos conflitos e tendências globais que definem a nova ordem mundial.
                        </Typography>
                        
                        <Button
                            variant="contained"
                            sx={{
                                mr: 2,
                                bgcolor: theme.palette.primary.light, 
                                "&:hover": {
                                    bgcolor: theme.palette.primary.light,
                                    opacity: 0.9,
                                },
                            }}
                            size="large"
                            onClick={() => navigate(topicosData[0].path)} 
                        >
                            Análise Imediata
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white" }}
                            size="large"
                            onClick={() =>
                                window.scrollTo({ top: 400, behavior: "smooth" })
                            }
                        >
                            Explorar Tópicos
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ pb: 5 }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h4" component="h2" color="primary">
                        Tópicos em Destaque
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Clique em qualquer card para uma análise aprofundada.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: 3,
                        justifyContent: "center",
                    }}
                >
                    {topicosData.map((topico) => (
                        <Card
                            key={topico.key}
                            onClick={() => navigate(topico.path)}
                            sx={{
                                textAlign: "center",
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                border: `1px solid ${theme.palette.divider}`,
                                "&:hover": {
                                    borderColor: theme.palette.primary.main,
                                },
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ mb: 1 }}>{topico.icon}</Box>
                                <Typography
                                    variant="subtitle1"
                                    component="p"
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        minHeight: "40px",
                                    }}
                                >
                                    {topico.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        color: theme.palette.text.secondary,
                                        minHeight: "60px",
                                    }}
                                >
                                    {topico.description}
                                </Typography>
                            </CardContent>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width: "100%", mt: "auto" }}
                            >
                                Acessar Análise
                            </Button>
                        </Card>
                    ))}
                </Box>
            </Container>
        </>
    );
}