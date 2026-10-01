import type { Movie } from "../types/movie";

// ============================================================================
// 📝 PASO 10: Conectar la tarjeta con el estado global
// ============================================================================
// TODO:
// 1. Importar el hook useWatchlist:
// import { useWatchlist } from "../hooks/useWatchlist";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  // TODO:
  // 2. Ejecutar useWatchlist() para obtener isInWatchlist y toggleWatchlist:
  // 3. Comprobar si esta película específica está guardada: usar la funcion inWatchList del contexto y pasarle movie.id

  const inWatchlist = false; // 👈 Reemplazar con el valor real usando isInWatchlist(movie.id)

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        inWatchlist
          ? "border-rose-500/80 bg-slate-900/90 shadow-xl shadow-rose-500/10 ring-1 ring-rose-500/40"
          : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70"
      }`}
    >
      {/* Poster */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-slate-950">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Rating */}
        {movie.rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-lg bg-slate-950/85 px-2.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-md border border-slate-800">
            ★ {movie.rating}
          </div>
        )}
        {/* Year */}
        <div className="absolute top-3 left-3 rounded-lg bg-slate-950/85 px-2 py-0.5 text-[11px] font-semibold text-slate-300 backdrop-blur-md border border-slate-800">
          {movie.premiered}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-slate-100 line-clamp-1 group-hover:text-rose-400 transition-colors">
          {movie.title}
        </h3>

        {/* Genres */}
        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-400 border border-slate-750"
            >
              {genre}
            </span>
          ))}
        </div>

        <p className="mt-2.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {movie.summary}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-4">
          <button
            // TODO:
            // 4. Conectar el evento onClick para alternar la película en la watchlist:
            // onClick={() => toggleWatchlist(movie.id)}
            onClick={() => {
              console.log("Hiciste click en la película con ID:", movie.id);
            }}
            className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] ${
              inWatchlist
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40 hover:bg-rose-500/30"
                : "bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700 hover:border-slate-600"
            }`}
          >
            {inWatchlist ? "✓ En Watchlist (Quitar)" : "+ Agregar a Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
