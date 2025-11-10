// Arquivo: src/pages/GuerraUcrania.jsx

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
    Grid, 
    Alert, 
    CardMedia, // Componente de mídia para imagens
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert"; 
import MapIcon from "@mui/icons-material/Map";
import theme from "../theme"; 

// IMPORTAÇÃO LOCAL DA IMAGEM
import mapaUcrania from "../img/mapa-linhadefrente-ucrania.png"; 

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

export default function GuerraUcraniaPage() {
  const navigate = useNavigate();

  return (
    <ContentPage
      title="A Guerra Híbrida na Ucrânia 🇺🇦"
      subtitle="Uma análise geopolítica profunda das transformações territoriais e do equilíbrio de poder na Eurásia."
      navigateBack={() => navigate("/")}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          1. O Pivô Geopolítico e a Doutrina Russa
        </Typography>

        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          O conflito na Ucrânia é a manifestação de uma <strong>Guerra de Conexões</strong> no coração da Eurásia. A Rússia busca estabelecer uma zona de influência histórica ('*near abroad*'), vendo a expansão da OTAN como uma ameaça existencial à sua profundidade estratégica e acesso ao Mar Negro. A Ucrânia, por sua vez, luta pela sua <strong>integridade territorial</strong> e pela escolha da sua orientação geoestratégica, um conceito central na soberania moderna.
        </Typography>
        
        <Alert severity="error" sx={{ my: 3 }} icon={<CrisisAlertIcon fontSize="inherit" />}>
          <Typography variant="subtitle2" component="div" sx={{ fontWeight: 600 }}>
            CRISE NUCLEAR LATENTE:
          </Typography>
          A retórica nuclear e a posse russa de infraestruturas críticas, como a central de Zaporizhzhia, elevam o risco de escalada não convencional no teatro europeu.
        </Alert>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          2. Consequências Territoriais e Demográficas (A Visão Geográfica)
        </Typography>
        
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h3" sx={{ mt: 2, color: 'text.primary', display: 'flex', alignItems: 'center' }}>
                    <MapIcon sx={{ mr: 1 }} />
                    Anexações e Linhas de Frente
                </Typography>
                <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    A Rússia declarou a anexação de quatro oblasts (Donetsk, Luhansk, Kherson e Zaporizhzhia) além da Crimeia. Estas áreas, embora parcialmente controladas, representam uma <strong>fronteira militarizada</strong> e contestada, impactando o acesso ucraniano ao Mar de Azov e à economia marítima.
                </Typography>
                {/* COMPONENTE CORRIGIDO */}
                <CardMedia 
                    component="img"
                    image={mapaUcrania}
                    alt="Mapa das linhas de frente e territórios ocupados na Ucrânia"
                    sx={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: 1, mt: 1, mb: 2 }}
                />
                {/* FIM DA IMAGEM INTEGRADA */}
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h3" sx={{ mt: 2, color: 'text.primary', display: 'flex', alignItems: 'center' }}>
                    <MapIcon sx={{ mr: 1 }} />
                    Impacto Demográfico e Migração
                </Typography>
                <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    A crise gerou mais de 8 milhões de refugiados externos e 5 milhões de deslocados internos, remodelando a demografia do Leste Europeu. O êxodo afeta desproporcionalmente as áreas mais industrializadas, causando uma perda irreversível de capital humano.
                </Typography>
                <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
                    <Link href="https://example.com/dados-demograficos-onu" target="_blank" rel="noopener">Relatório ONU sobre Deslocamentos.</Link>
                </Typography>
            </Grid>
        </Grid>
      </Box>

      {/* Seção de Referências */}
      <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #ddd' }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
          <ArticleIcon sx={{ mr: 1 }} />
          Bibliografia e Referências Aprofundadas
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemText primary="Mearsheimer, John J. (2014). Why the Ukraine Crisis Is the West’s Fault. Foreign Affairs." secondary={<Link href="https://example.com/mearsheimer-ukraine" target="_blank">Análise da Teoria Ofensiva Realista.</Link>} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="NATO Review (2023). A Reavaliação da Profundidade Estratégica da Europa Oriental." secondary={<Link href="https://www.nato.int/strategic-depth" target="_blank">Visão OTAN sobre a Crise.</Link>} />
          </ListItem>
        </List>
      </Box>
    </ContentPage>
  );
}