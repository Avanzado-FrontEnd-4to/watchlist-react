import { useState, useEffect } from "react";
import type { Movie } from "../types/movie";

/**
 * 🪄 HOOK CAJA NEGRA:
 * No necesitas modificar este archivo.
 * Se encarga de conectarse con la API de TVMaze y devolverte
 * un arreglo de películas listas con sus posters y datos limpios.
 */
export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data: any[]) => {
        const formatted: Movie[] = data.slice(0, 36).map((show) => ({
          id: show.id,
          title: show.name,
          poster:
            show.image?.medium ||
            show.image?.original ||
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
          rating: show.rating?.average || null,
          genres: show.genres || [],
          summary: show.summary
            ? show.summary.replace(/<[^>]*>?/gm, "")
            : "Sin descripción disponible.",
          premiered: show.premiered ? show.premiered.slice(0, 4) : "N/A",
        }));
        setMovies(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener películas de TVMaze:", err);
        setLoading(false);
      });
  }, []);

  return { movies, loading };
}
