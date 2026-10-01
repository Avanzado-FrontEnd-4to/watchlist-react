import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard";

export function CatalogPage() {
  const { movies, loading } = useMovies();

  return (
    <main className="min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Catálogo de Películas & Series
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Explora los títulos disponibles de TVMaze y añade tus favoritos a tu lista personal usando React Context.
        </p>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-rose-500/20 border-t-rose-500 rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Cargando catálogo desde TVMaze...</p>
        </div>
      ) : (
        /* Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
