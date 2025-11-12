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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import ChipIcon from "@mui/icons-material/Storage";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import theme from "../theme";

import GraficoSemicondutores from "../components/mod/GraficoSemicondutores";

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

export default function EUAvsChina() {
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
                    A rivalidade EUA-China deixou de ser uma competição dentro do mesmo sistema global. Washington busca agora o <strong>desengajamento total</strong> (<em>decoupling</em>) em setores críticos, como tecnologia militar e de dupla utilização. Em contraste, a União Europeia adota o termo mais pragmático, <strong>De-risking</strong> (redução de risco), visando diminuir a <strong>vulnerabilidade econômica</strong> sem interromper completamente o comércio.
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8 }}>
                    Este movimento estratégico está reconfigurando as <strong>cadeias de suprimentos globais</strong>. Empresas multinacionais são forçadas a acelerar a <strong>regionalização</strong> de fábricas (práticas de *nearshoring* e *friendshoring*), priorizando a segurança da cadeia em detrimento da eficiência de custos. O objetivo final é isolar a China do acesso a inovações ocidentais estratégicas.
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
                            secondary="O controle de chips avançados é o cerne da disputa. Restrições como o controle de exportação de tecnologia de litografia (ASML) e de chips de ponta visam frear o desenvolvimento chinês em supercomputação e IA, que é essencial para o futuro militar e econômico."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><SecurityIcon color="primary" /></ListItemIcon>
                        <ListItemText
                            primary="O Estreito de Taiwan e o Mar do Sul da China"
                            secondary="A questão de Taiwan, o maior fabricante de chips avançados do mundo (TSMC), é o ponto de maior risco de conflito militar. O Mar do Sul da China é vital para 1/3 do comércio global e é militarizado pela China através da construção de ilhas artificiais."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><GavelIcon color="action" /></ListItemIcon>
                        <ListItemText
                            primary="Iniciativa do Cinturão e Rota (BRI) vs. Blue Dot Network"
                            secondary="Disputa por influência em infraestrutura global. A China investe maciçamente em transportes e energia através da BRI. EUA e aliados (G7) tentam oferecer alternativas de financiamento mais transparentes e sustentáveis (como o B3W/PGII)."
                        />
                    </ListItem>
                </List>
            </Box>

            <Box sx={{ mb: 4, mt: 5 }}>
                <Typography variant="h5" component="h2" sx={{ mb: 2, color: theme.palette.primary.dark, borderBottom: '2px solid #eee', pb: 1 }}>
                    3. Detalhe Estratégico: A Guerra dos Chips 💡
                </Typography>

                <Typography component="p" sx={{ lineHeight: 1.8, mb: 3 }}>
                    A dependência global em <strong>nanotecnologia</strong> e <strong>litografia de extrema ultravioleta (EUV)</strong> concentra o poder em poucas regiões e empresas. O gráfico abaixo detalha como a produção de microchips é segmentada, revelando as vulnerabilidades críticas da cadeia de suprimentos global.
                </Typography>

                <GraficoSemicondutores />

                <Typography component="p" sx={{ lineHeight: 1.8, mt: 3, borderTop: '1px solid #eee', pt: 2 }}>
                    O gráfico ilustra a <strong>concentração geopolítica</strong>. A hegemonia em <strong>Design de Chips</strong> (EUA), <strong>Equipamentos de Produção</strong> (Holanda/ASML) e <strong>Fabricação Avançada</strong> (Taiwan/TSMC) cria 'gargalos' estratégicos. Qualquer disrupção nessas áreas, especialmente em Taiwan, representa um risco sistêmico para a economia global e para a segurança de ambos os blocos.
                </Typography>
            </Box>


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
                        <ListItemText primary="Miller, C. (2022). Chip War: The Fight for the World's Most Critical Technology. Scribner." secondary={<Link href="https://example.com/chip-war" target="_blank">Recomendação de leitura sobre Semicondutores.</Link>} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary="U.S. Department of Defense. China Military Power Report (Anual)." secondary={<Link href="https://www.dod.gov/china-report" target="_blank">Análise militar dos EUA.</Link>} />
                    </ListItem>
                </List>
            </Box>
        </ContentPage>
    );
}