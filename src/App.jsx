import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Unidades from "./pages/Unidades.jsx";
import VistaEvidencia from "./pages/VistaEvidencia.jsx";
import Reflexion from "./pages/Reflexion.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/evidencia/:id" element={<VistaEvidencia />} />
        <Route path="/reflexion" element={<Reflexion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
