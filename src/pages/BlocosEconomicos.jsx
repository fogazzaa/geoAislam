// Arquivo: src/pages/BlocosEconomicos.jsx

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
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CardMedia, // Componente de mídia para imagens
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart"; 
import theme from "../theme"; 

// IMPORTAÇÃO LOCAL DA IMAGEM
import graficoBlocos from "../img/grafico-blocos-economicos.png"; 

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

export default function BlocosEconomicosPage() {
  const navigate = useNavigate();

  const comparisonData = [
    { bloco: 'G7', pib: '≈ 45', populacao: '≈ 10', instituicoes: 'FMI, Banco Mundial' },
    { bloco: 'BRICS+', pib: '≈ 35', populacao: '≈ 45', instituicoes: 'NDB (Banco de Desenvolvimento)' },
  ];

  return (
    <ContentPage
      title="Geoeconomia e a Ascensão Multipolar 🌐"
      subtitle="Análise profunda dos BRICS, G7 e o desafio às instituições de Bretton Woods."
      navigateBack={() => navigate("/")}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          1. A Disputa pela Governança Global
        </Typography>

        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          O surgimento do <strong>BRICS+</strong> como um bloco consolidado reflete a insatisfação do Sul Global com o modelo de governança econômica herdado do pós-guerra (Bretton Woods), dominado pelo <strong>G7</strong>. A expansão do BRICS visa não apenas aumentar o poder de barganha, mas criar uma arquitetura financeira paralela, como o Novo Banco de Desenvolvimento (NDB).
        </Typography>
        
        <Typography component="p" sx={{ lineHeight: 1.8 }}>
          Essa dinâmica sinaliza uma clara <strong>erosão da ordem unipolar</strong> e um movimento em direção a um sistema multipolar onde o poder econômico e o peso demográfico se realinham.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.dark, borderBottom: '2px solid #eee', pb: 1, display: 'flex', alignItems: 'center' }}>
            <BarChartIcon sx={{ mr: 1 }} color="secondary" />
            2. Comparativo Geoeconômico dos Blocos (Valores % do Total Global)
        </Typography>
        
        <TableContainer component={Paper} sx={{ my: 3, border: `1px solid ${theme.palette.divider}` }}>
          <Table size="small" aria-label="dados comparativos brics g7">
            <TableHead>
              <TableRow sx={{ bgcolor: theme.palette.primary.light + '10' }}>
                <TableCell sx={{ fontWeight: 700 }}>Bloco</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>PIB Global (em %)</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>População Global (em %)</TableCell>
                <TableCell align="right" sx={{ fontWeight: 700 }}>Instituição Chave</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.bloco}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                    {row.bloco}
                  </TableCell>
                  <TableCell align="right">{row.pib}%</TableCell>
                  <TableCell align="right">{row.populacao}%</TableCell>
                  <TableCell align="right">{row.instituicoes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography component="p" sx={{ lineHeight: 1.8 }}>
            Enquanto o G7 ainda detém o maior poder financeiro, o BRICS+ domina em termos <strong>demográficos</strong> e seu PIB (em Paridade de Poder de Compra - PPC) já ultrapassou o do G7, refletindo a mudança do centro de gravidade econômica global para a Ásia.
        </Typography>
        
        {/* COMPONENTE CORRIGIDO */}
        <CardMedia 
            component="img"
            image={graficoBlocos}
            alt="Gráfico de Comércio Intra e Inter-Blocos Econômicos"
            sx={{ width: '100%', height: 'auto', border: '1px solid #ddd', borderRadius: 1, mt: 3 }}
        />
        {/* FIM DA IMAGEM INTEGRADA */}
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
          3. O Desafio da Desdolarização
        </Typography>
        
        <Typography component="p" sx={{ lineHeight: 1.8, mb: 2 }}>
          O tema da <strong>desdolarização</strong> é central para os BRICS. A busca por alternativas ao Dólar Americano em transações de commodities (como o petróleo) visa reduzir a vulnerabilidade a sanções ocidentais e democratizar o sistema financeiro. Este movimento, embora lento, tem um impacto direto na <Link href="https://example.com/reserva-cambial" target="_blank" rel="noopener">arquitetura de reserva cambial global.</Link>
        </Typography>
      </Box>
      
      {/* Seção de Referências */}
      <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #ddd' }}>
        <Typography variant="h5" component="h3" sx={{ mb: 2, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
          <ArticleIcon sx={{ mr: 1 }} />
          Bibliografia e Fontes Geoeconômicas
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemText primary="Subramanian, A. (2023). BRICS, the Dollar, and the New Global Financial Order. Peterson Institute for International Economics." secondary={<Link href="https://www.piie.com/brics-dollar" target="_blank">Análise sobre Desdolarização.</Link>} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="World Bank. Dados de PIB e População por Blocos Econômicos (2024)." secondary={<Link href="https://www.worldbank.org/databrics-g7" target="_blank">Estatísticas Oficiais.</Link>} />
          </ListItem>
        </List>
      </Box>
    </ContentPage>
  );
}