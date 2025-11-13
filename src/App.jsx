import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import { getDesignTokens } from "./theme";
import TemaContexto from './context/TemaContexto';

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import GuerraUcraniaPage from "./pages/GuerraUcrania";
import BlocosEconomicosPage from "./pages/BlocosEconomicos";
import EUAvsChinaPage from "./pages/EUAvsChina";
import CrisesAmbientaisPage from "./pages/CrisesAmbientais";


function App() {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <TemaContexto.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />} />

                            <Route path="guerra-ucrania" element={<GuerraUcraniaPage />} />
                            <Route path="blocos-economicos" element={<BlocosEconomicosPage />} />
                            <Route path="eua-china" element={<EUAvsChinaPage />} />
                            <Route path="crises-ambientais" element={<CrisesAmbientaisPage />} />

                            <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </TemaContexto.Provider>
    );
}

export default App;