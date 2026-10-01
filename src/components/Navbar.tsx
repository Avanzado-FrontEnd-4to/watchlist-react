import { Link, useLocation } from "react-router-dom";
// TODO: Importar useWatchlist para mostrar el contador real
import { useWatchlist } from "../hooks/useWatchlist";

export function Navbar() {
  const location = useLocation();

  // TODO: Obtener watchlistIds desde useWatchlist()
  const { watchlistIds } = useWatchlist();
  const count = watchlistIds.length;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav className="flex items-center justify-between border border-slate-800/90 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-3 rounded-2xl shadow-2xl">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
          <span className="text-2xl">🍿</span>
          <span className="text-slate-100">
            Cine<span className="text-rose-500">Vault</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              location.pathname === "/"
                ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            Explorar
          </Link>

          <Link
            to="/watchlist"
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              location.pathname === "/watchlist"
                ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <span>Mi Watchlist</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
                count > 0
                  ? "bg-rose-500 text-white shadow-sm shadow-rose-500/50"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              }`}
            >
              {count}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
