import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const colors = {
    EUA: ['#2196F3', '#1976D2'],
    China: ['#F44336', '#D32F2F'],
    Taiwan: ['#4CAF50', '#388E3C'],
    Coreia: ['#FFC107', '#FFA000'],
    Holanda: ['#9C27B0', '#7B1FA2'],
    Japão: ['#FF5722', '#E64A19'],
    Outros: ['#9E9E9E', '#757575'],
};

const rawDataSemicondutores = [
    { etapa: 'Design (EDA)', EUA: 75, China: 5, Outros: 20 },
    { etapa: 'Fabs Avançadas (<10nm)', EUA: 0, China: 0, Taiwan: 60, Coreia: 40 },
    { etapa: 'Equip. Litografia (EUV)', EUA: 0, China: 0, Holanda: 90, Outros: 10 },
    { etapa: 'Design (Chips Mobile)', EUA: 20, China: 35, Outros: 45 },
    { etapa: 'Memória (DRAM/NAND)', EUA: 5, China: 5, Coreia: 70, Japão: 20 },
];

const StyledTooltipPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.mode === 'dark' 
        ? theme.palette.background.paper 
        : 'rgba(255, 255, 255, 0.95)',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3],
}));

const GraficoSemicondutores = () => {
    const theme = useTheme(); 
    const isDarkMode = theme.palette.mode === 'dark';
    const axisColor = isDarkMode ? theme.palette.text.secondary : theme.palette.text.primary;
    const gridColor = isDarkMode ? theme.palette.divider : '#e0e0e0';
    const cursorFill = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

    const renderTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <StyledTooltipPaper>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                        {label}
                    </Typography>
                    {payload.map((p, index) => (
                        <Typography key={index} variant="body2" sx={{ color: p.color, lineHeight: 1.6 }}>
                            {p.name}: <strong style={{ color: p.color }}>{p.value !== undefined ? p.value.toFixed(0) + '%' : 'N/A'}</strong>
                        </Typography>
                    ))}
                    <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
                        *Valores simplificados e ilustrativos.
                    </Typography>
                </StyledTooltipPaper>
            );
        }
        return null;
    };

    const dataKeys = [
        { key: 'EUA', name: 'EUA', color: colors.EUA[0] },
        { key: 'China', name: 'China', color: colors.China[0] },
        { key: 'Taiwan', name: 'Taiwan', color: colors.Taiwan[0] },
        { key: 'Coreia', name: 'Coreia do Sul', color: colors.Coreia[0] },
        { key: 'Holanda', name: 'Holanda', color: colors.Holanda[0] },
        { key: 'Japão', name: 'Japão', color: colors.Japão[0] },
        { key: 'Outros', name: 'Outros', color: colors.Outros[0] },
    ];

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 3, textAlign: 'center', color: 'text.primary' }}>
                Concentração Global na Cadeia de Suprimentos de Semicondutores (Market Share %)
            </Typography>

            <ResponsiveContainer width="100%" height={480}>
                <BarChart
                    data={rawDataSemicondutores}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                    barCategoryGap="15%"
                >
                    <CartesianGrid strokeDasharray="5 5" stroke={gridColor} vertical={false} />

                    <XAxis
                        dataKey="etapa"
                        interval={0}
                        tick={{ fill: axisColor, dy: 10, fontSize: 13, angle: -45, textAnchor: 'end' }} 
                        height={90}
                    />

                    <YAxis
                        name="Market Share (%)"
                        unit="%"
                        domain={[0, 100]}
                        tick={{ fill: axisColor, fontSize: 13 }} 
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip cursor={{ fill: cursorFill }} content={renderTooltip} />

                    <Legend
                        verticalAlign="top"
                        align="center"
                        wrapperStyle={{ paddingTop: '15px', paddingBottom: '10px' }}
                        iconType="rect"
                        formatter={(value, entry, index) => <span style={{ color: axisColor }}>{value}</span>} 
                    />

                    <defs>
                        {dataKeys.map(item => (
                            <linearGradient key={item.key} id={`gradient-${item.key}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colors[item.key] ? colors[item.key][0] : item.color} stopOpacity={0.9}/>
                                <stop offset="95%" stopColor={colors[item.key] ? colors[item.key][1] : item.color} stopOpacity={0.7}/>
                            </linearGradient>
                        ))}
                    </defs>

                    {dataKeys.map(item => (
                        <Bar
                            key={item.key}
                            dataKey={item.key}
                            name={item.name}
                            stackId="a"
                            fill={`url(#gradient-${item.key})`}
                            isAnimationActive={true}
                            animationDuration={1500}
                            animationEasing="ease-out"
                        />
                    ))}


                </BarChart>
            </ResponsiveContainer>
            <Typography variant="caption" color="text.secondary" align="center" component="div" sx={{ mt: 2 }}>
                *A soma da participação em cada etapa é de 100%. Fonte: Dados simulados baseados em análises da indústria (EDA, Fabs e Equipamentos).
            </Typography>
        </Box>
    );
};

export default GraficoSemicondutores;