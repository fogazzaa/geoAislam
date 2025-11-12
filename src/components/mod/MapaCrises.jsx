import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Box, Typography } from "@mui/material";
import L from 'leaflet';

const hotspotsData = [
    {
        id: 1,
        lat: 16.0,
        lng: 5.0,
        nome: "Região do Sahel (Desertificação/Conflitos)",
        risco: "Extremo (Hídrico)",
        impacto: "Migração forçada, insegurança alimentar. +2°C de aquecimento.",
        cor: "#B03A2E",
        radius: 600000,
    },
    {
        id: 2,
        lat: -4.0,
        lng: -55.0,
        nome: "Bacia Amazônica (Desmatamento e Seca)",
        risco: "Alto (Ecológico)",
        impacto: "Ponto de não retorno (Tipping point). Perda de 'serviços ecossistêmicos'.",
        cor: "#2E86C1",
        radius: 800000,
    },
    {
        id: 3,
        lat: 78.0,
        lng: 30.0,
        nome: "Ártico e Groenlândia (Degelo Acelerado)",
        risco: "Crítico (Nível do Mar)",
        impacto: "Aumento da elevação do mar, desbloqueio de rotas marítimas (geopolítica).",
        cor: "#1ABC9C",
        radius: 500000,
    },
    {
        id: 4,
        lat: 34.0,
        lng: -118.0,
        nome: "Califórnia/Oeste dos EUA (Megaincêndios)",
        risco: "Alto (Fogo/Seca)",
        impacto: "Destruição de infraestrutura, poluição do ar e perdas econômicas anuais.",
        cor: "#F39C12",
        radius: 400000,
    },
    {
        id: 5,
        lat: 25.0,
        lng: 85.0,
        nome: "Delta do Ganges (Inundações/Elevação do Mar)",
        risco: "Extremo (População)",
        impacto: "Submersão de terras agrícolas e deslocamento de milhões de pessoas em Bangladesh e Índia.",
        cor: "#8E44AD",
        radius: 550000,
    },
    {
        id: 6,
        lat: -30.0,
        lng: 135.0,
        nome: "Bacia Murray-Darling, Austrália (Secas Crônicas)",
        risco: "Alto (Hídrico)",
        impacto: "Colapso de indústrias agrícolas e tensões sobre a alocação de água.",
        cor: "#E74C3C",
        radius: 400000,
    },
];

const MapaCrises = () => {
    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
    }, []);

    const mapStyle = { height: "400px", width: "100%", borderRadius: '8px', border: '1px solid #ddd' };
    const initialCenter = [10, 20];

    return (
        <Box sx={{ mt: 3, mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                Mapa Interativo de Hotspots de Crises Ambientais 🌍
            </Typography>

            <MapContainer center={initialCenter} zoom={2.5} scrollWheelZoom={false} style={mapStyle}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {hotspotsData.map((hotspot) => (
                    <React.Fragment key={hotspot.id}>
                        <Circle
                            center={[hotspot.lat, hotspot.lng]}
                            pathOptions={{ color: hotspot.cor, fillColor: hotspot.cor, fillOpacity: 0.2 }}
                            radius={hotspot.radius}
                        />

                        <Marker position={[hotspot.lat, hotspot.lng]}>
                            <Popup>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: hotspot.cor }}>
                                    {hotspot.nome}
                                </Typography>
                                <Typography variant="body2">
                                    Risco: <strong>{hotspot.risco}</strong>
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>
                                    Impacto Geopolítico: {hotspot.impacto}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    (Clique no círculo para ver o risco na área.)
                                </Typography>
                            </Popup>
                        </Marker>
                    </React.Fragment>
                ))}
            </MapContainer>
        </Box>
    );
};

export default MapaCrises;