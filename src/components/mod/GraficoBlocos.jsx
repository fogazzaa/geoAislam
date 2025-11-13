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

const G7 = '#3498DB';
const BRICS = '#E74C3C';

const rawDataBlocos = [
    { pais: 'EUA', bloco: 'G7', pibNominal: 28.78, pibPPC: 28.78 },
    { pais: 'Alemanha', bloco: 'G7', pibNominal: 4.59, pibPPC: 5.62 },
    { pais: 'Japão', bloco: 'G7', pibNominal: 4.31, pibPPC: 6.84 },
    { pais: 'Reino Unido', bloco: 'G7', pibNominal: 3.59, pibPPC: 4.25 },
    { pais: 'China', bloco: 'BRICS', pibNominal: 18.53, pibPPC: 35.28 },
    { pais: 'Índia', bloco: 'BRICS', pibNominal: 4.10, pibPPC: 14.59 },
    { pais: 'Brasil', bloco: 'BRICS', pibNominal: 2.33, pibPPC: 4.41 },
    { pais: 'Rússia', bloco: 'BRICS', pibNominal: 2.15, pibPPC: 5.48 },
];

const GraficoBlocos = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const axisColor = theme.palette.text.primary;
    const gridColor = theme.palette.divider;
    const tooltipBg = isDarkMode ? theme.palette.background.paper : 'rgba(255, 255, 255, 0.9)';
    const tooltipBorder = isDarkMode ? theme.palette.divider : '#ccc';
    const patternLineColor = isDarkMode ? theme.palette.grey[400] : '#FFFFFF';
    

    const renderTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const dataItem = rawDataBlocos.find(d => d.pais === label);
            const nominal = dataItem.pibNominal;
            const ppc = dataItem.pibPPC;

            return (
                <Paper 
                    sx={{ 
                        p: 1, 
                        bgcolor: tooltipBg, 
                        border: `1px solid ${tooltipBorder}` 
                    }}
                >
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {label} ({dataItem.bloco})
                    </Typography>
                    <Typography variant="body2" sx={{ color: dataItem.bloco === 'G7' ? G7 : BRICS }}>
                        PIB Nominal: ${nominal.toFixed(2)} trilhões
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        PIB PPC: ${ppc.toFixed(2)} trilhões (com padrão)
                    </Typography>
                </Paper>
            );
        }
        return null;
    };

    const renderXAxisTick = ({ x, y, payload }) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <text 
                    x={0} 
                    y={0} 
                    dy={16} 
                    textAnchor="middle" 
                    fill={axisColor}
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    const formattedData = rawDataBlocos.map(d => ({
        pais: d.pais,
        'G7 Nominal': d.bloco === 'G7' ? d.pibNominal : undefined,
        'G7 PPC': d.bloco === 'G7' ? d.pibPPC : undefined,
        'BRICS Nominal': d.bloco === 'BRICS' ? d.pibNominal : undefined,
        'BRICS PPC': d.bloco === 'BRICS' ? d.pibPPC : undefined,
    }));

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                Comparativo Econômico: 4 Maiores Países (PIB em Trilhões USD)
            </Typography>
            
            <ResponsiveContainer width="100%" height={450}>
                <BarChart
                    data={formattedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barCategoryGap="10%"
                >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    
                    <XAxis 
                        dataKey="pais" 
                        interval={0} 
                        tick={renderXAxisTick} 
                        stroke={isDarkMode ? theme.palette.divider : theme.palette.grey[300]}
                    />
                    
                    <YAxis 
                        name="PIB (Trilhões USD)"
                        unit="T"
                        domain={[0, 40]}
                        tick={{ fill: axisColor }}
                        stroke={isDarkMode ? theme.palette.divider : theme.palette.grey[300]}
                    />

                    <Tooltip content={renderTooltip} cursor={{ fill: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}/>
                    
                    <Legend 
                        wrapperStyle={{ top: 0, left: 0, paddingBottom: '10px' }} 
                        verticalAlign="top" 
                        align="center"
                        formatter={(value) => <span style={{ color: axisColor }}>{value}</span>}
                    />

                    <defs>
                        <pattern 
                            id="pattern-ppc-g7" 
                            x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"
                        >
                            <rect width="10" height="10" fill={G7} opacity="0.3" /> 
                            <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke={patternLineColor} strokeWidth="1" />
                        </pattern>
                        <pattern 
                            id="pattern-ppc-brics" 
                            x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"
                        >
                            <rect width="10" height="10" fill={BRICS} opacity="0.3" />
                            <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke={patternLineColor} strokeWidth="1" />
                        </pattern>
                    </defs>

                    <Bar 
                        dataKey="G7 Nominal" 
                        name="G7 Nominal" 
                        fill={G7} 
                        stroke={G7}
                    />

                    <Bar 
                        dataKey="G7 PPC" 
                        name="G7 PPC" 
                        fill="url(#pattern-ppc-g7)"
                        stroke={G7}
                    />

                    <Bar 
                        dataKey="BRICS Nominal" 
                        name="BRICS Nominal" 
                        fill={BRICS} 
                        stroke={BRICS}
                    />
                    
                    <Bar 
                        dataKey="BRICS PPC" 
                        name="BRICS PPC" 
                        fill="url(#pattern-ppc-brics)"
                        stroke={BRICS}
                    />

                </BarChart>
            </ResponsiveContainer>
            <Typography variant="caption" color="text.secondary" align="center" component="div" sx={{ mt: 1 }}>
                Fonte: Dados simulados baseados em projeções do FMI e ONU para 2024/2025.
            </Typography>
        </Box>
    );
};

export default GraficoBlocos;