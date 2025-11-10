// Arquivo: src/pages/EUAvsChina.jsx

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
    ListItemIcon,
    ListItemText,
    CardMedia, // Componente de mídia para imagens
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ChipIcon from "@mui/icons-material/Storage";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security"; 
import theme from "../theme"; 

// IMPORTAÇÃO LOCAL DA IMAGEM
import graficoCadeia from "../img/grafico-cadeia-suprimentos.png"; 

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

export default function EUAvsChinaPage() {
  const navigate = useNavigate();

  return (
    <ContentPage
      title="A Batalha pela Supremacia Tecnológica ⚡"
      subtitle="Análise da rivalidade sino-americana: desengajamento estratégico e a nova Guerra Fria."
      navigateBack={() => navigate("/")}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          1. O Conceito de Desengajamento (Decoupling/De-risking)
        </Typography>

        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          A rivalidade EUA-China deixou de ser uma competição dentro do mesmo sistema global. Washington busca agora o <strong>desengajamento</strong> (*decoupling*) em setores críticos, enquanto a União Europeia adota o termo mais suave, *de-risking* (redução de risco). O objetivo é isolar a China do acesso a tecnologias militares e de dupla utilização, protegendo as cadeias de suprimentos estratégicas ocidentais.
        </Typography>
        
        <Typography component="p" sx={{ lineHeight: 1.8 }}>
          Essa política está reconfigurando o comércio global e forçando empresas multinacionais a repensar suas operações, acelerando a <strong>regionalização</strong> de fábricas (nearshoring/friendshoring).
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          2. Eixos Centrais da Disputa Estratégica
        </Typography>
        
        <List sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 1, p: 2, bgcolor: theme.palette.grey[50] }}>
            <ListItem>
                <ListItemIcon><ChipIcon color="secondary" /></ListItemIcon>
                <ListItemText 
                    primary="Semicondutores e IA (Inteligência Artificial)" 
                    secondary="Controle de exportação de tecnologia de litografia (ASML) e chips avançados, visando frear o desenvolvimento chinês em supercomputação e IA, que é essencial para o futuro militar." 
                />
            </ListItem>
            <ListItem>
                <ListItemIcon><SecurityIcon color="primary" /></ListItemIcon>
                <ListItemText 
                    primary="O Estreito de Taiwan e o Mar do Sul da China" 
                    secondary="A questão de Taiwan é o ponto de maior risco de conflito militar. O Mar do Sul da China é vital para 1/3 do comércio global e é militarizado pela China através da construção de ilhas artificiais." 
                />
            </ListItem>
            <ListItem>
                <ListItemIcon><GavelIcon color="action" /></ListItemIcon>
                <ListItemText 
                    primary="Iniciativa do Cinturão e Rota (BRI) vs. Blue Dot Network" 
                    secondary="Disputa por influência em infraestrutura global. A China investe maciçamente através da BRI, enquanto os EUA e aliados tentam oferecer alternativas de financiamento mais transparentes." 
                />
            </ListItem>
        </List>
        
        {/* COMPONENTE CORRIGIDO */}
        <CardMedia 
            component="img"
            image={graficoCadeia}
            alt="Ilustração da cadeia de suprimentos de microchips/semicondutores"
            sx={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: 1, mt: 3, mb: 2 }}
        />
        {/* FIM DA IMAGEM INTEGRADA */}
      </Box>

      {/* Seção de Referências */}
      <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #ddd' }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
          <ArticleIcon sx={{ mr: 1 }} />
          Bibliografia e Fontes Estratégicas
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemText primary="Allison, G. (2017). Destined for War: Can America and China Escape Thucydides's Trap? Houghton Mifflin Harcourt." secondary={<Link href="https://example.com/thucydides-trap" target="_blank">A armadilha de Tucídides.</Link>} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="U.S. Department of Defense. China Military Power Report (Anual)." secondary={<Link href="https://www.dod.gov/china-report" target="_blank">Análise militar dos EUA.</Link>} />
          </ListItem>
        </List>
      </Box>
    </ContentPage>
  );
}