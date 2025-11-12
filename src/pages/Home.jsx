import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Button,
    Grid2 as Grid,
    Divider,
    Modal,
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PublicIcon from "@mui/icons-material/Public";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import theme from "../theme";

import ModalUltimasNoticias from "../components/mod/ModalUltimasNoticias";
import GraficoEstatisticasGlobais from "../components/mod/GraficoEstatisticasGlobais";

const globalStats = [
    {
        title: "Dívida Global / PIB",
        value: "95%",
        detail: "Estabilidade com tendência de alta (OECD)",
        icon: <BusinessIcon color="primary" sx={{ fontSize: 30 }} />,
    },
    {
        title: "População Deslocada (Conflitos)",
        value: "117 Milhões",
        detail: "Recorde histórico (ACNUR, Jun/2025)",
        icon: <PeopleOutlineIcon color="secondary" sx={{ fontSize: 30 }} />,
    },
    {
        title: "Taxa de Inflação Média (G20)",
        value: "5.1%",
        detail: "Ainda acima da meta, em queda lenta",
        icon: <TrendingUpIcon sx={{ color: "#FFA500", fontSize: 30 }} />,
    },
];

const latestNews = [
    {
        title: "Cúpula do G7 foca em estabilização energética global",
        source: "Bloomberg",
        date: "2025/11/12"
    },
    {
        title: "Novas sanções impostas após escalada em disputa territorial",
        source: "The Economist",
        date: "2025/11/11"
    },
    {
        title: "Relatório da ONU sobre o futuro dos recursos hídricos",
        source: "BBC News",
        date: "2025/11/09"
    },
];

const topicosData = [
    {
        key: "guerra_ucrania",
        title: "Guerra na Ucrania",
        description: "Análise geo-política e impactos territoriais do conflito.",
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

const StatCard = ({ title, value, detail, icon }) => (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, boxShadow: 1, height: '100%' }}>
        <Box sx={{ mr: 2 }}>{icon}</Box>
        <Box>
            <Typography variant="caption" color="text.secondary">
                {title}
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                {value}
            </Typography>
            <Typography variant="body2" color="success.main">
                {detail}
            </Typography>
        </Box>
    </Card>
);

export default function Home() {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

    const handleOpenModal = (news) => {
        setSelectedNews(news);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedNews(null);
    };

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
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }}}>
                            Entendendo a Geopolítica Hoje
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{ mb: 4, fontWeight: 400, color: "#e8f5e9", fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                        >
                            Análise dos <strong>conflitos</strong> e <strong>tendências globais</strong> que definem a nova ordem mundial.
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
                    <NewspaperIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography variant="h4" component="h2" color="primary">
                        Últimas Notícias Geopolíticas
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Clique para ler a análise completa em um <strong>Modal de Destaque</strong>.
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {latestNews.map((news, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                onClick={() => handleOpenModal(news)}
                                sx={{
                                    height: '100%',
                                    p: 2,
                                    borderLeft: `5px solid ${theme.palette.warning.main}`,
                                    transition: '0.3s',
                                    '&:hover': {
                                        boxShadow: 6,
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                                    {news.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fonte: <strong>{news.source}</strong>
                                </Typography>
                                <Typography variant="caption" color="text.disabled">
                                    {news.date}
                                </Typography>
                                <Button size="small" sx={{ mt: 1, float: 'right' }}>
                                    Ver Detalhes
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Divider sx={{ my: 5 }} />

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
                                    transform: 'translateY(-5px)',
                                    transition: '0.2s',
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

            <Divider sx={{ my: 5 }} />

            <Container maxWidth="lg" sx={{ pb: 8 }}>
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <TrendingUpIcon color="primary" sx={{ fontSize: 40 }} />
                    <Typography variant="h4" component="h2" color="primary">
                        Visão Geral Global Rápida
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Acompanhe os principais indicadores de forma visual.
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {globalStats.map((stat, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <StatCard {...stat} />
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <GraficoEstatisticasGlobais />
                    </Grid>
                </Grid>

            </Container>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                {/* Aqui passamos selectedNews como a prop 'news', que o modal espera */}
                <ModalUltimasNoticias
                    news={selectedNews}
                    onClose={handleCloseModal}
                />
            </Modal>
        </>
    );
}