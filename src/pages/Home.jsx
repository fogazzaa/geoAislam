import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PublicIcon from "@mui/icons-material/Public";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Ícone de retorno
import LandscapeIcon from "@mui/icons-material/Landscape";
import BusinessIcon from "@mui/icons-material/Business";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// -------------------------------------------------------------------
// 1. Definição do Tema (Mantido)
// -------------------------------------------------------------------
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CAF50", // Verde vibrante (Material UI Green 500)
    },
    secondary: {
      main: "#d32f2f",
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#5c6b77",
    },
  },
  typography: {
    fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
    h4: {
      fontWeight: 700,
      marginBottom: "24px",
    },
    h6: {
      fontWeight: 500,
      marginTop: "16px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "none",
          marginTop: "8px",
          borderRadius: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "40px",
          paddingBottom: "40px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s",
          borderRadius: "12px",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

// -------------------------------------------------------------------
// 2. Dados dos Tópicos (Com chaves para navegação)
// -------------------------------------------------------------------
const topicosData = [
  {
    key: "guerra_ucrania",
    title: "Guerra na Ucrania",
    description: "Analise geo-política e impactos territoriais do conflito.",
    icon: <LandscapeIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
  },
  {
    key: "blocos_economicos",
    title: "Blocos Economicos e Globalizacao",
    description: "O papel do BRICS, G7, UE e a nova ordem mundial.",
    icon: <BusinessIcon sx={{ fontSize: 40, color: theme.palette.primary.light }} />,
  },
  {
    key: "eua_vs_china",
    title: "A Tensao EUA vs. China",
    description: "Disputa comercial, tecnológica e a hegemonia global.",
    icon: <FlashOnIcon sx={{ fontSize: 40, color: "#FFA500" }} />, // Laranja
  },
  {
    key: "crises_ambientais",
    title: "Crises Ambientais",
    description: "Mudanças climáticas, recursos hídricos e segurança alimentar.",
    icon: <WbSunnyIcon sx={{ fontSize: 40, color: "#1976D2" }} />, // Azul
  },
];

// -------------------------------------------------------------------
// 3. Componentes de Estrutura (Header e Footer)
// -------------------------------------------------------------------

const Header = ({ navigateHome }) => (
  <AppBar position="static" color="primary">
    <Container maxWidth="lg">
      <Toolbar disableGutters>
        <Button onClick={navigateHome} color="inherit" sx={{ p: 0, minWidth: 'auto' }}>
          <PublicIcon sx={{ mr: 1, fontSize: 32 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GEOPOLÍTICA HOJE
          </Typography>
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: theme.palette.grey[200],
      borderTop: `1px solid ${theme.palette.divider}`,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="body2" color="text.secondary" align="center">
        {
          "© 2024 Geo em Foco. Todos os direitos reservados. | Dados atualizados até Outubro/2025."
        }
      </Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        align="center"
        display="block"
      >
        Desenvolvido com Material UI.
      </Typography>
    </Container>
  </Box>
);

// -------------------------------------------------------------------
// 4. Componentes de Página (Conteúdo)
// -------------------------------------------------------------------

// Componente base para todas as páginas de conteúdo
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

      <Card sx={{ p: 4, textAlign: 'left' }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          {subtitle}
        </Typography>
        <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
            {children}
        </Box>
      </Card>
    </Container>
  </Box>
);

// Arquivo: GuerraUcrania.jsx
const GuerraUcraniaPage = ({ navigateBack }) => (
  <ContentPage
    title="Guerra na Ucrania"
    subtitle="Análise geo-política e impactos territoriais do conflito em curso."
    navigateBack={navigateBack}
  >
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      A invasão russa da Ucrânia em 2022 redefiniu a ordem geopolítica europeia. O conflito é uma disputa por influência, segurança e território, com ramificações que se estendem à segurança energética, alimentar e à estabilidade global. A OTAN e os países ocidentais apoiam a Ucrânia, impondo sanções severas à Rússia.
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      Os principais impactos territoriais incluem a destruição de cidades, o deslocamento de milhões de pessoas (a maior crise de refugiados da Europa desde a Segunda Guerra Mundial) e a anexação de regiões ucranianas pela Rússia, não reconhecida internacionalmente.
    </Typography>
    <Typography variant="h6" sx={{ mt: 3, color: 'text.primary' }}>
        Consequências Globais
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      O conflito desencadeou uma crise alimentar devido ao bloqueio das exportações de grãos e elevou drasticamente os preços do gás natural na Europa, acelerando a busca por fontes de energia renovável e a reavaliação das cadeias de suprimentos globais.
    </Typography>
  </ContentPage>
);

// Arquivo: BlocosEconomicos.jsx
const BlocosEconomicosPage = ({ navigateBack }) => (
  <ContentPage
    title="Blocos Econômicos e Globalização"
    subtitle="O papel do BRICS, G7 e UE na transição para uma ordem mundial multipolar."
    navigateBack={navigateBack}
  >
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      O cenário global é cada vez mais moldado por **blocos econômicos** e políticos. O **G7** (países industrializados) e a **UE** (União Europeia) representam o poder ocidental tradicional e lideram as instituições financeiras internacionais.
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      Em contrapartida, o **BRICS** (Brasil, Rússia, Índia, China e África do Sul, com recentes expansões) busca uma maior voz para as economias emergentes, desafiando a hegemonia de instituições ocidentais. Este movimento indica uma transição para uma ordem mundial mais **multipolar**, onde as relações Sul-Sul ganham relevância.
    </Typography>
    <Typography variant="h6" sx={{ mt: 3, color: 'text.primary' }}>
        A Globalização em Crise
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      A globalização, embora em crise devido a tendências protecionistas e choques geopolíticos (como a pandemia e a Guerra na Ucrânia), continua a ser o pano de fundo destas disputas, com o foco se deslocando para a resiliência das cadeias de suprimentos e a regionalização do comércio.
    </Typography>
  </ContentPage>
);

// Arquivo: EUAvsChina.jsx
const EUAvsChinaPage = ({ navigateBack }) => (
  <ContentPage
    title="A Tensão EUA vs. China"
    subtitle="Disputa comercial, tecnológica e a corrida pela hegemonia global no século XXI."
    navigateBack={navigateBack}
  >
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      A relação entre **Estados Unidos** e **China** é a rivalidade geopolítica central do século XXI. A disputa abrange frentes **comerciais** (guerras tarifárias e restrições de exportação), **tecnológicas** (competição em 5G, semicondutores e inteligência artificial) e **militares** (tensões no Mar do Sul da China e sobre Taiwan).
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      Os EUA buscam manter sua **hegemonia** e o domínio das cadeias de suprimentos globais, utilizando instrumentos como sanções e controle de tecnologia. A China, por sua vez, almeja se tornar a principal potência econômica e tecnológica do mundo até 2049, buscando um papel central na nova ordem internacional.
    </Typography>
    <Typography variant="h6" sx={{ mt: 3, color: 'text.primary' }}>
        O Pivô Tecnológico
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      O controle sobre a fabricação de semicondutores e o desenvolvimento de Inteligência Artificial é visto como o campo de batalha mais crítico, onde ambos os países investem trilhões e impõem restrições para garantir a supremacia futura.
    </Typography>
  </ContentPage>
);

// Arquivo: CrisesAmbientais.jsx
const CrisesAmbientaisPage = ({ navigateBack }) => (
  <ContentPage
    title="Crises Ambientais"
    subtitle="O impacto das mudanças climáticas, a escassez de recursos hídricos e a segurança alimentar."
    navigateBack={navigateBack}
  >
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      As **crises ambientais** são riscos existenciais urgentes que transcendem fronteiras nacionais. As **mudanças climáticas**, impulsionadas pela emissão de gases de efeito estufa, causam eventos extremos (secas prolongadas, inundações, ondas de calor) que ameaçam a vida e a infraestrutura global.
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      A escassez de **recursos hídricos**, agravada pelo aumento populacional e pela poluição, é um foco crescente de tensões geopolíticas, especialmente em regiões áridas e semiáridas.
    </Typography>
    <Typography variant="h6" sx={{ mt: 3, color: 'text.primary' }}>
        Segurança Alimentar e Cooperação
    </Typography>
    <Typography paragraph sx={{ lineHeight: 1.8 }}>
      Estes fatores, somados à perda de biodiversidade, têm um impacto direto na **segurança alimentar**, exigindo uma transição urgente para modelos de produção e consumo mais sustentáveis e uma cooperação internacional robusta para a mitigação e adaptação.
    </Typography>
  </ContentPage>
);

// -------------------------------------------------------------------
// 5. Componente Home (Página Principal - Lista de Tópicos)
// -------------------------------------------------------------------
const HomePage = ({ navigateTo }) => (
  <Container maxWidth="lg" sx={{ minHeight: "80vh" }}>
    <Box sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Geo em Foco: Análise dos Assuntos Atuais
      </Typography>
      <Typography variant="h6" gutterBottom color="text.secondary">
        Explorando os principais conflitos e tendências que moldam o cenário global de hoje.
      </Typography>
    </Box>
    {/* Lista de Tópicos como Cards Navegáveis */}
    <Box
      sx={{
        mt: 5,
        mb: 5,
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
          onClick={() => navigateTo(topico.key)}
          sx={{
            textAlign: "center",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer", // Indica que é clicável
            border: `2px solid ${theme.palette.divider}`,
            "&:hover": {
                borderColor: theme.palette.primary.main,
            }
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ mb: 1 }}>
                {topico.icon}
            </Box>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 1, minHeight: '40px' }}
            >
              {topico.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, color: theme.palette.text.secondary, minHeight: "60px" }}
            >
              {topico.description}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", mt: "auto" }}
          >
            Acessar Tópico
          </Button>
        </Card>
      ))}
    </Box>
  </Container>
);

// -------------------------------------------------------------------
// 6. Componente Principal (Router/App)
// -------------------------------------------------------------------
export default function Home() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  // Função de navegação
  const navigateTo = (pageKey) => {
    setCurrentPage(pageKey);
  };

  // Função para retornar à Home
  const navigateHome = () => {
    setCurrentPage('home');
  };

  // Renderiza a página baseada no estado
  const renderPage = () => {
    switch (currentPage) {
      case 'guerra_ucrania':
        return <GuerraUcraniaPage navigateBack={navigateHome} />;
      case 'blocos_economicos':
        return <BlocosEconomicosPage navigateBack={navigateHome} />;
      case 'eua_vs_china':
        return <EUAvsChinaPage navigateBack={navigateHome} />;
      case 'crises_ambientais':
        return <CrisesAmbientaisPage navigateBack={navigateHome} />;
      case 'home':
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header navigateHome={navigateHome} />
      <Box sx={{ flexGrow: 1 }}>
        {renderPage()}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
