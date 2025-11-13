// pages/BlocosEconomicos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Button,
    Card,
    Typography,
    Box,
    Grid2 as Grid,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemText,
    Link,
    useTheme,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PublicIcon from '@mui/icons-material/Public';

import GraficoBlocos from "../components/mod/GraficoBlocos";

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
                    <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>{children}</Box>
                </Card>
            </Container>
        </Box>
    );
};

export default function BlocosEconomicosPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <ContentPage
            title="A Nova Ordem Multipolar 🌐"
            subtitle="Análise Geopolítica do G7 vs. BRICS+: O Confronto de Poder Econômico e Demográfico."
            navigateBack={() => navigate("/")}
        >
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: `2px solid ${theme.palette.divider}`, pb: 1 }}
                >
                    1. Peso Global: PIB vs. População
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 3 }}>
                    A disputa pela liderança global é claramente visível ao comparar o poder econômico (PIB) e o poder demográfico (População) dos dois principais agrupamentos. O BRICS+ demonstra seu domínio em <strong>População</strong>, enquanto a métrica do PIB (seja Nominal ou PPC) revela diferentes histórias sobre a <strong>produtividade</strong> e a <strong>influência</strong> de cada bloco.
                </Typography>

                <GraficoBlocos />

                <Divider sx={{ my: 4 }} />

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.info?.main || '#2196f3', display: 'flex', alignItems: 'center' }}>
                                    <StorefrontIcon sx={{ mr: 1 }} /> O Poder Nominal (G7)
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O <strong>G7</strong> (EUA, Canadá, Reino Unido, França, Alemanha, Itália, Japão) ainda domina a métrica do PIB Nominal (~$51 trilhões), refletindo sua alta produtividade e controle das finanças globais (dólar).
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.error?.main || '#f44336', display: 'flex', alignItems: 'center' }}>
                                    <PeopleIcon sx={{ mr: 1 }} /> O Domínio Real (BRICS+)
                                </Typography>
                                <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                                    O <strong>BRICS+</strong> (10 membros) supera o G7 em população (mais de 40% global) e em PIB por Paridade de Poder de Compra (PPC), indicando um domínio crescente na <strong>economia real</strong>.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: `2px solid ${theme.palette.divider}`, pb: 1, display: 'flex', alignItems: 'center' }}
                >
                    <TrendingUpIcon sx={{ mr: 1 }} />
                    2. A Dinâmica de Crescimento e Projeções
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 3 }}>
                    O fator mais crítico para a mudança da ordem mundial é a **taxa de crescimento**. Enquanto as economias do G7 demonstram crescimento moderado, o BRICS+ é o motor do crescimento global, impulsionado pela Ásia (Índia e China).
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card
                            variant="outlined"
                            sx={{ bgcolor: theme.palette.mode === 'light' ? '#ecf0f1' : theme.palette.grey[700] }}
                        >
                            <CardContent>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.info?.dark || '#1565c0' }}>
                                    Crescimento G7 (2025E)
                                </Typography>
                                <Typography variant="h3" component="p" color={theme.palette.info?.dark || '#1565c0'} sx={{ fontWeight: 700, my: 1 }}>
                                    ~ 1.7%
                                </Typography>
                                <Typography component="p" variant="body2">
                                    Crescimento **moderado**, focado na estabilidade e serviços de alto valor agregado.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card
                            variant="outlined"
                            sx={{ bgcolor: theme.palette.mode === 'light' ? '#fdeded' : theme.palette.grey[700] }}
                        >
                            <CardContent>
                                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.error?.dark || '#c62828' }}>
                                    Crescimento BRICS+ (2025E)
                                </Typography>
                                <Typography variant="h3" component="p" color={theme.palette.error?.dark || '#c62828'} sx={{ fontWeight: 700, my: 1 }}>
                                    ~ 3.4%
                                </Typography>
                                <Typography component="p" variant="body2">
                                    Crescimento **acelerado**, impulsionado pela expansão da classe média e investimento em infraestrutura.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mt: 5, pt: 3 }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ mb: 2, color: theme.palette.primary.main, borderBottom: `2px solid ${theme.palette.divider}`, pb: 1, display: 'flex', alignItems: 'center' }}
                >
                    <AttachMoneyIcon sx={{ mr: 1 }} />
                    3. Desdolarização e Instituições Alternativas
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    A expansão do BRICS é uma tentativa clara de criar uma arquitetura financeira e política alternativa. O principal objetivo é reduzir a dependência do dólar americano e das instituições financeiras tradicionais, dando voz ao <strong>Sul Global</strong>.
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" component="h4" sx={{ mt: 2, mb: 1 }}>
                            <AttachMoneyIcon fontSize="small" sx={{ mr: 0.5 }} /> O Desafio do Dólar
                        </Typography>
                        <Typography component="p" variant="body2" sx={{ mb: 2 }}>
                            O uso crescente de moedas locais em transações bilaterais e o desenvolvimento de sistemas de pagamento alternativos, como o CIPS (China), são sinais da busca por autonomia monetária.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            *Para análises detalhadas sobre autonomia monetária, consulte fontes especializadas em geopolítica econômica.*
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" component="h4" sx={{ mt: 2, mb: 1 }}>
                            <PublicIcon fontSize="small" sx={{ mr: 0.5 }} /> Instituições Chave
                        </Typography>
                        <List dense>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary="Novo Banco de Desenvolvimento (NDB)"
                                    secondary={
                                        <Link
                                            href="https://www.ndb.int/"
                                            target="_blank"
                                            rel="noopener"
                                            color={theme.palette.mode === 'light' ? theme.palette.info.dark : theme.palette.info.light}
                                        >
                                            Banco dos BRICS para projetos de infraestrutura.
                                        </Link>
                                    }
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Acordo de Reserva Contingente (CRA)" secondary="Mecanismo de estabilidade financeira para membros." />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="FMI e Banco Mundial" secondary="Instituições lideradas pelo G7, foco de críticas do BRICS+." />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </ContentPage>
    );
}