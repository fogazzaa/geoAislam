// Arquivo: src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Componente de Layout Base (antigo Home.jsx)
import Layout from "./components/Layout";
// Conteúdo da Home (nova)
import HomePage from "./pages/Home"; 
// Páginas de Conteúdo
import GuerraUcraniaPage from "./pages/GuerraUcrania";
import BlocosEconomicosPage from "./pages/BlocosEconomicos";
import EUAvsChinaPage from "./pages/EUAvsChina";
import CrisesAmbientaisPage from "./pages/CrisesAmbientais";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          A rota pai com o 'element={<Layout />}' garante que Header e Footer
          sejam exibidos em todas as sub-rotas. O Outlet dentro de Layout
          renderizará os elementos abaixo.
        */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> 

          {/* Páginas de Conteúdo Mapeadas */}
          <Route path="guerra-ucrania" element={<GuerraUcraniaPage />} />
          <Route path="blocos-economicos" element={<BlocosEconomicosPage />} />
          <Route path="eua-china" element={<EUAvsChinaPage />} />
          <Route path="crises-ambientais" element={<CrisesAmbientaisPage />} />
          
          {/* Opcional: Rota de Erro 404 */}
          <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;