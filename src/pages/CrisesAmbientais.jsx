// pages/CrisesAmbientaisPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Button,
    Card,
    Typography,
    Box,
    Link,
    List,
    ListItem,
    ListItemText,
    Grid2 as Grid,
    CardContent,
    useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ForestIcon from "@mui/icons-material/Forest";
import OpacityIcon from "@mui/icons-material/Opacity";
import FireIcon from "@mui/icons-material/Fireplace";
import WavesIcon from "@mui/icons-material/Waves";
import GrainIcon from "@mui/icons-material/Grain";
import SailingIcon from "@mui/icons-material/Sailing";

import MapaCrises from "../components/mod/MapaCrises";

const ContentPage = ({ title, subtitle, children, navigateBack }) => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 4, minHeight: "80vh" }}>
            <Container maxWidth="md">
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={navigateBack}
                    variant="outlined"
                    color="primary"
                    sx={{ mb: 3 }}
                >
                    Voltar para a Home
                </Button>

                <Card sx={{ p: 4, textAlign: "left" }}>
                    <Typography variant="h4" component="h1" gutterBottom color="primary">
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        {subtitle}
                    </Typography>
                    <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
                        {children}
                    </Box>
                </Card>
            </Container>
        </Box>
    );
};

export default function CrisesAmbientaisPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    const orangeFireColor = theme.palette.mode === 'dark' ? '#FFC300' : '#F39C12';
    const purpleCoastColor = theme.palette.mode === 'dark' ? '#B8860B' : '#8E44AD';

    return (
        <ContentPage
            title="A Geopolítica da Sustentabilidade 🌳"
            subtitle="Análise das crises climáticas e ecossistêmicas como fatores de risco e conflito global."
            navigateBack={() => navigate("/")}
        >
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: `2px solid ${theme.palette.divider}`, pb: 1 }}
                >
                    1. Zonas de Alto Risco Geoclimático
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 3 }}>
                    As crises ambientais não são distribuídas uniformemente, criando <strong>hotspots geográficos de vulnerabilidade</strong> onde a mudança climática atua como um <strong>multiplicador de ameaças</strong> à estabilidade regional e global.
                </Typography>

                <MapaCrises />

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mt: 4, mb: 2, color: theme.palette.primary.main }}
                >
                    Detalhamento dos Hotspots (Mapas Interativos)
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: theme.palette.secondary.main, display: 'flex', alignItems: 'center' }}
                                >
                                    <WbSunnyIcon sx={{ mr: 1 }} /> Sahel: A Fronteira da Desertificação
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O aquecimento acelerado (2°C) na região do Sahel intensifica a escassez hídrica, destruindo terras agrícolas e forçando milhões a migrarem. Isso alimenta conflitos por recursos e instabilidade política.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: theme.palette.primary.dark, display: 'flex', alignItems: 'center' }}
                                >
                                    <ForestIcon sx={{ mr: 1 }} /> Bacia Amazônica: O Tipping Point Climático
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O desmatamento combinado com secas extremas ameaça a capacidade da floresta de gerar sua própria chuva. O risco de atingir o <strong>ponto de não retorno</strong> é uma preocupação crítica para o balanço de carbono global.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: theme.palette.info.main, display: 'flex', alignItems: 'center' }}
                                >
                                    <SailingIcon sx={{ mr: 1 }} /> Ártico: Nova Fronteira Marítima
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O degelo abre <strong>novas rotas marítimas</strong> (Passagem Nordeste e Noroeste), reduzindo distâncias comerciais, mas intensificando a disputa geopolítica por soberania e acesso a vastas reservas de recursos naturais.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: orangeFireColor, display: 'flex', alignItems: 'center' }}
                                >
                                    <FireIcon sx={{ mr: 1 }} /> Oeste dos EUA: Incêndios e Vulnerabilidade
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    Megaincêndios e secas crônicas afetam economias de alta tecnologia, cadeias de suprimentos e o fornecimento de água para grandes cidades. Demonstra a <strong>vulnerabilidade climática</strong> de nações desenvolvidas.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: purpleCoastColor, display: 'flex', alignItems: 'center' }}
                                >
                                    <WavesIcon sx={{ mr: 1 }} /> Delta do Ganges: Risco Costeiro
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    A elevação do nível do mar, combinada com inundações sazonais, ameaça o Delta do Ganges. Isso pode criar um dos maiores fluxos de <strong>refugiados climáticos</strong> do mundo, afetando a segurança regional da Índia e Bangladesh.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h4"
                                    sx={{ fontWeight: 600, color: theme.palette.secondary.dark, display: 'flex', alignItems: 'center' }}
                                >
                                    <GrainIcon sx={{ mr: 1 }} /> Bacia Murray-Darling: Conflito pela Água
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    A maior região agrícola da Austrália enfrenta secas prolongadas. A disputa pelo controle da água entre estados e setores (ambiental vs. agro) é um estudo de caso sobre a <strong>geopolítica interna dos recursos hídricos</strong>.
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <Link
                                        href="https://www.gov.br/ana/pt-br/assuntos/gestao-das-aguas/planos-de-recursos-hidricos"
                                        target="_blank"
                                        rel="noopener"
                                        color={theme.palette.mode === 'light' ? theme.palette.info.dark : theme.palette.info.light}
                                    >
                                        Ver mais sobre a gestão da água na Bacia.
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: `2px solid ${theme.palette.divider}`, pb: 1, display: 'flex', alignItems: 'center' }}
                >
                    <OpacityIcon sx={{ mr: 1 }} />
                    2. Segurança Alimentar e Perda de Ecossistemas
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    O desmatamento em biomas críticos (Amazônia, Congo) e a degradação dos solos reduzem a capacidade de produção de alimentos e intensificam as emissões de carbono. A segurança alimentar é diretamente ameaçada pela combinação de eventos extremos e pela perda de biodiversidade que sustenta a agricultura.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h3"
                                    sx={{ fontWeight: 600, color: theme.palette.primary.dark, display: 'flex', alignItems: 'center' }}
                                >
                                    <OpacityIcon sx={{ mr: 1 }} /> Stress Hídrico e Conflito (Rio Nilo)
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    Bacias hidrográficas transfronteiriças, como o <strong>Rio Nilo</strong> (disputa pela Barragem Etíope) e o Rio Indo, são pontos de <strong>tensão geopolítica</strong>. A escassez de água é um vetor de instabilidade entre nações ribeirinhas.
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <Link
                                        href="https://www.eeas.europa.eu/eeas/o-nilo-e-outras-problem%C3%A1ticas-geopol%C3%ADtica-da-%C3%A1gua_pti"
                                        target="_blank"
                                        rel="noopener"
                                        color={theme.palette.mode === 'light' ? theme.palette.info.dark : theme.palette.info.light}
                                    >
                                        Análise sobre a Geopolítica do Nilo (EEAS).
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    component="h3"
                                    sx={{ fontWeight: 600, color: theme.palette.secondary.main, display: 'flex', alignItems: 'center' }}
                                >
                                    <ForestIcon sx={{ mr: 1 }} /> Serviços Ecossistêmicos
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O conceito de <strong>"serviços ecossistêmicos"</strong> — os benefícios que a natureza fornece à humanidade — é agora central para o planejamento econômico e geopolítico, ligando o capital natural à estabilidade econômica.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box
                sx={{
                    mt: 5,
                    pt: 3,
                    borderTop: `1px solid ${theme.palette.divider}`
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}
                >
                    <ArticleIcon sx={{ mr: 1 }} />
                    Bibliografia e Fontes Ecológicas
                </Typography>
                <List dense>
                    <ListItem disablePadding>
                        <ListItemText
                            primary="IPCC (2024). Relatório Especial sobre Oceanos e Criosfera."
                            secondary={
                                <Link
                                    href="https://www.ipcc.ch/srocc/"
                                    target="_blank"
                                    rel="noopener"
                                    color={theme.palette.mode === 'light' ? theme.palette.info.dark : theme.palette.info.light}
                                >
                                    Impactos nos Polos e Nível do Mar (IPCC).
                                </Link>
                            }
                        />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText
                            primary="IPBES (2023). Avaliação Global sobre Biodiversidade e Serviços Ecossistêmicos."
                            secondary={
                                <Link
                                    href="https://www.ipbes.net/global-assessment"
                                    target="_blank"
                                    rel="noopener"
                                    color={theme.palette.mode === 'light' ? theme.palette.info.dark : theme.palette.info.light}
                                >
                                    Dados de Extinção e Habitat (IPBES).
                                </Link>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </ContentPage>
    );
}