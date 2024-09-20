import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Kabinet from "./views/Kabinet";
import Departemen from "./views/Departemen";
import Bph from "./components/Departemen/Bph";
import Tentang from "./views/Tentang";
import CommingSoon from "./views/CommingSoon";
import Artikel from "./views/Artikel";
import DetailArtikel from "./views/DetailArtikel";
import Galeri from "./views/Galeri";
import GaleriDetail from "./views/GaleriDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/kabinet" element={<Kabinet />}></Route>
        <Route path="/departemen/*" element={<CommingSoon />}></Route>
        <Route path="/tentang" element={<Tentang />}></Route>
        <Route path="/artikel" element={<Artikel />}></Route>
        <Route path="/artikel/:slug" element={<DetailArtikel />}></Route>
        <Route path="/galeri" element={<Galeri />}></Route>
        <Route path="/galeri/:slug" element={<GaleriDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
