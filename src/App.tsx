import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CatalogPage } from "./pages/CatalogPage";
import { WatchlistPage } from "./pages/WatchlistPage";

// ============================================================================
// 📝 PASO 9: Conectar el Provider en la raíz de la aplicación
// ============================================================================
// TODO:
// 1. Importar el WatchlistProvider:
// 2. Envolver todo el contenido (<BrowserRouter>...) dentro de <WatchlistProvider>...</WatchlistProvider>

export default function App() {
  return (
    //  Envolver aca con <WatchlistProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    //  Cerrar </WatchlistProvider>
  );
}
