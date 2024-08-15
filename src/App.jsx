import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Kabinet from "./views/Kabinet";
import Departemen from "./views/Departemen";
import Bph from "./components/Departemen/Bph";
import Tentang from "./views/Tentang";
import CommingSoon from "./views/CommingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/kabinet" element={<Kabinet />}></Route>
        <Route path="/departemen/*" element={<CommingSoon />}></Route>
        <Route path="/tentang" element={<Tentang />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
