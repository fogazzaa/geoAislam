// Arquivo: src/pages/CrisesAmbientais.jsx

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
    ListItemText, // CORRIGIDO: Adicionado ListItemText
    Grid,
    CardContent, 
    CardMedia, // Componente de mídia para imagens
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ForestIcon from "@mui/icons-material/Forest"; 
import OpacityIcon from "@mui/icons-material/Opacity";
import theme from "../theme"; 

// IMPORTAÇÃO LOCAL DA IMAGEM
import mapaSahel from "../img/sahel-mapa.png"; 

// Componente de Layout de Conteúdo (Mantido)
const ContentPage = ({ title, subtitle, children, navigateBack }) => (
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
        <Box sx={{ borderTop: "1px solid #eee", pt: 2 }}>{children}</Box>
      </Card>
    </Container>
  </Box>
);

export default function CrisesAmbientaisPage() {
  const navigate = useNavigate();

  return (
    <ContentPage
      title="A Geopolítica da Sustentabilidade 🌳"
      subtitle="Análise das crises climáticas e ecossistêmicas como fatores de risco e conflito global."
      navigateBack={() => navigate("/")}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          1. Zonas de Alto Risco Geoclimático
        </Typography>

        <Typography component="p" sx={{ lineHeight: 1.8, mb: 3 }}>
          As crises ambientais não são distribuídas uniformemente, criando <strong>hotspots geográficos de vulnerabilidade</strong>. O derretimento acelerado do Ártico e da Groenlândia impacta o nível do mar global, enquanto a desertificação ameaça a subsistência de populações no Sahel africano.
        </Typography>
        
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.secondary.main, display: 'flex', alignItems: 'center' }}>
                            <WbSunnyIcon sx={{ mr: 1 }} /> Risco Climático Extremo
                        </Typography>
                        <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                            Aumento de secas e cheias no <strong>Sul da Ásia</strong> e <strong>América Central</strong> exacerba a pobreza e o êxodo rural. A inação climática é, portanto, uma questão de segurança nacional.
                        </Typography>
                        {/* COMPONENTE CORRIGIDO */}
                        <CardMedia 
                            component="img"
                            image={mapaSahel}
                            alt="Mapa da região do Sahel mostrando áreas de desertificação"
                            sx={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: 1, mt: 1, mb: 0 }}
                        />
                        {/* FIM DA IMAGEM INTEGRADA */}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600, color: theme.palette.primary.dark, display: 'flex', alignItems: 'center' }}>
                            <OpacityIcon sx={{ mr: 1 }} /> Stress Hídrico e Conflito
                        </Typography>
                        <Typography component="p" variant="body2" sx={{ mt: 1 }}>
                            Bacias hidrográficas transfronteiriças, como o Rio Nilo e o Rio Indo, são pontos de <strong>tensão geopolítica</strong>. A escassez de água é um vetor de instabilidade entre nações ribeirinhas.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                             <Link href="https://example.com/conflitos-hidricos" target="_blank" rel="noopener">Ver mapa das bacias em risco.</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1, display: 'flex', alignItems: 'center' }}>
            <ForestIcon sx={{ mr: 1 }} />
            2. Segurança Alimentar e Perda de Ecossistemas
        </Typography>
        
        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          O desmatamento em biomas críticos (Amazônia, Congo) e a degradação dos solos reduzem a capacidade de produção de alimentos e intensificam as emissões de carbono. A segurança alimentar é diretamente ameaçada pela combinação de eventos extremos e pela perda de biodiversidade que sustenta a agricultura.
        </Typography>

        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          O conceito de <strong>"serviços ecossistêmicos"</strong> — os benefícios que a natureza fornece à humanidade — é agora central para o planejamento econômico e geopolítico.
        </Typography>
      </Box>
      
      {/* Seção de Referências */}
      <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #ddd' }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
          <ArticleIcon sx={{ mr: 1 }} />
          Bibliografia e Fontes Ecológicas
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemText primary="IPCC (2024). Relatório Especial sobre Oceanos e Criosfera." secondary={<Link href="https://www.ipcc.ch/srocc/" target="_blank">Impactos nos Polos e Nível do Mar.</Link>} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="IPBES (2023). Avaliação Global sobre Biodiversidade e Serviços Ecossistêmicos." secondary={<Link href="https://www.ipbes.net/global-assessment-report" target="_blank">Dados de Extinção e Habitat.</Link>} />
          </ListItem>
        </List>
      </Box>
    </ContentPage>
  );
}