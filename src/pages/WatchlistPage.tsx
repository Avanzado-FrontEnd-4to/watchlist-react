import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";
// TODO: Importar useWatchlist para obtener watchlistIds y clearWatchlist
import { useWatchlist } from "../hooks/useWatchlist";

export function WatchlistPage() {
  const { movies, loading } = useMovies();

  // TODO: Obtener watchlistIds y clearWatchlist desde useWatchlist()
  const { watchlistIds, clearWatchlist } = useWatchlist();

  // Filtramos las películas que están en la watchlist
  const savedMovies = movies.filter((m) => watchlistIds.includes(m.id));

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Mi Watchlist Personal
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Películas seleccionadas para tu próxima maratón ({savedMovies.length})
          </p>
        </div>

        {savedMovies.length > 0 && (
          <button
            onClick={clearWatchlist}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 transition-all cursor-pointer"
          >
            Vaciar Watchlist
          </button>
        )}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-rose-500/20 border-t-rose-500 rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Cargando...</p>
        </div>
      ) : savedMovies.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl p-8 bg-slate-900/20">
          <span className="text-5xl">🎬</span>
          <h2 className="mt-4 text-lg font-bold text-slate-200">
            Tu Watchlist está vacía
          </h2>
          <p className="mt-1 text-xs text-slate-400 max-w-sm mx-auto">
            Aún no has agregado ninguna película. Ve al catálogo y haz clic en '+ Agregar a Watchlist'.
          </p>
          <Link
            to="/"
            className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-all shadow-lg shadow-rose-600/30"
          >
            Explorar Catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
