import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Kabinet from "./views/Kabinet";

import CommingSoon from "./views/CommingSoon";
import Artikel from "./views/Artikel";
import DetailArtikel from "./views/DetailArtikel";
import Galeri from "./views/Galeri";
import GaleriDetail from "./views/GaleriDetail";
import Struktur from "./views/Struktur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/kabinet" element={<Kabinet />}></Route>
        <Route path="/departemen/*" element={<CommingSoon />}></Route>
        <Route path="/artikel" element={<Artikel />}></Route>
        <Route path="/artikel/:slug" element={<DetailArtikel />}></Route>
        <Route path="/galeri" element={<Galeri />}></Route>
        <Route path="/galeri/:slug" element={<GaleriDetail />}></Route>
        <Route path="/kabinet/:slug" element={<Struktur />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
