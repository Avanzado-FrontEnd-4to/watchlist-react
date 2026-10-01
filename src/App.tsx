import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CatalogPage } from "./pages/CatalogPage";
import { WatchlistPage } from "./pages/WatchlistPage";
// TODO: Importar WatchlistProvider desde "./context/WatchlistProvider"
import { WatchlistProvider } from "./context/WatchlistProvider";

export default function App() {
  return (
    // TODO: Envolver con <WatchlistProvider> para compartir el estado global
    <WatchlistProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </WatchlistProvider>
  );
}
