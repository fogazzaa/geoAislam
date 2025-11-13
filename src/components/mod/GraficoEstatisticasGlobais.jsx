import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { Box, Card, CardContent, Typography } from "@mui/material";

const data = [
    { name: "2020", "Índice de Conflito Global (ICG)": 40, "Índice de Comércio Internacional (ICI)": 75 },
    { name: "2021", "Índice de Conflito Global (ICG)": 45, "Índice de Comércio Internacional (ICI)": 70 },
    { name: "2022", "Índice de Conflito Global (ICG)": 60, "Índice de Comércio Internacional (ICI)": 60 },
    { name: "2023", "Índice de Conflito Global (ICG)": 70, "Índice de Comércio Internacional (ICI)": 55 },
    { name: "2024", "Índice de Conflito Global (ICG)": 75, "Índice de Comércio Internacional (ICI)": 58 },
    { name: "2025 (Estim.)", "Índice de Conflito Global (ICG)": 72, "Índice de Comércio Internacional (ICI)": 62 },
];

export default function GraficoEstatisticasGlobais() {
    return (
        <Card sx={{ height: "100%", p: 2, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="h3" gutterBottom align="center" color="primary">
                    Tendência de Conflito vs. Comércio (2020-2025)
                </Typography>
                <Box sx={{ width: "100%", height: 300, minWidth: 1100 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="Índice de Conflito Global (ICG)"
                                stroke="#D32F2F"
                                strokeWidth={3}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="Índice de Comércio Internacional (ICI)"
                                stroke="#1976D2"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
                <Typography variant="caption" display="block" align="center" color="text.secondary" sx={{ mt: 1 }}>
                    Valores em escala normalizada de 0 a 100 (100 = Alto Conflito / Alto Comércio).
                </Typography>
            </CardContent>
        </Card>
    );
}