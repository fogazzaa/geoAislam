import React from "react";
import { Box, Typography, Button, Divider, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const noticiasConteudoDetalhado = {
    "Cúpula do G7 foca em estabilização energética global": {
        intro: "Líderes das sete maiores economias se reuniram para debater a crise energética e a transição para fontes renováveis, buscando um plano unificado para 2030.",
        corpo: "A principal pauta foi a criação de um fundo de estabilização para proteger países em desenvolvimento dos choques de preços de combustíveis. Há um consenso crescente de que a segurança energética é inseparável da segurança geopolítica.",
        conclusao: "As decisões tomadas devem impactar as relações comerciais com a Rússia e o Oriente Médio nos próximos trimestres, reconfigurando alianças tradicionais.",
    },
    "Novas sanções impostas após escalada em disputa territorial": {
        intro: "Em resposta a movimentos militares recentes, uma coalizão de nações impôs um novo e rigoroso pacote de sanções econômicas, visando setores financeiros e de alta tecnologia.",
        corpo: "Analistas indicam que as sanções podem levar a uma retaliação cibernética ou a uma aceleração na busca por moedas digitais soberanas por parte do país sancionado. O mercado de commodities já sente o impacto.",
        conclusao: "A situação exige diplomacia urgente, mas a linha dura dos blocos ocidentais sugere que o conflito pode se arrastar, aumentando a instabilidade regional.",
    },
    "Relatório da ONU sobre o futuro dos recursos hídricos": {
        intro: "O relatório anual da Organização das Nações Unidas destaca que 40% da população mundial vive em áreas com estresse hídrico, um fator crescente de tensões geopolíticas.",
        corpo: "O documento aponta que o controle de bacias hidrográficas e lençóis freáticos está se tornando um novo campo de batalha silencioso. É proposto um tratado internacional para gerir recursos transfronteiriços de forma cooperativa.",
        conclusao: "A crise climática acelera a escassez, forçando migrações em massa e exigindo um foco global imediato em tecnologias de dessalinização e conservação.",
    },
};

export default function ModalUltimasNoticias({ news, onClose }) {
    const theme = useTheme();

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '95%', md: 800 },
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[24],
        p: 4,
        borderRadius: 2,
        maxHeight: '90vh',
        overflowY: 'auto',
        color: theme.palette.text.primary,
    };

    if (!news) return null;
    const { title, source, date } = news;

    const content = noticiasConteudoDetalhado[title] || {
        intro: "Conteúdo detalhado indisponível. Esta é uma notícia simulada.",
        corpo: "Informações fictícias para demonstração de modal.",
        conclusao: "Continue explorando o site para análises reais.",
    };

    return (
        <Box sx={modalStyle}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <NewspaperIcon color="primary" sx={{ fontSize: 30 }} />
                <Button onClick={onClose} aria-label="Fechar" sx={{ minWidth: 0, color: theme.palette.text.primary }}>
                    <CloseIcon />
                </Button>
            </Box>

            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ color: theme.palette.primary.dark, fontWeight: 700 }}
            >
                {title}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Fonte: <strong style={{ fontWeight: 700 }}>{source}</strong> | Publicado: {date}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}>
                {content.intro}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                {content.corpo}
            </Typography>

            <Typography
                variant="body2"
                sx={{ fontStyle: 'italic', borderLeft: `3px solid ${theme.palette.secondary.main}`, pl: 1 }}
            >
                <strong style={{ fontWeight: 700 }}>Impacto:</strong> {content.conclusao}
            </Typography>

            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: 3,
                    bgcolor: theme.palette.primary.main,
                    '&:hover': {
                        bgcolor: theme.palette.primary.dark
                    }
                }}
                onClick={onClose}
            >
                Voltar à Página Inicial
            </Button>
        </Box>
    );
}