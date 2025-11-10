import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home"; 
import GuerraUcraniaPage from "./pages/GuerraUcrania";
import BlocosEconomicosPage from "./pages/BlocosEconomicos";
import EUAvsChinaPage from "./pages/EUAvsChina";
import CrisesAmbientaisPage from "./pages/CrisesAmbientais";


function App() {
  return (
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
  );
}

export default App;