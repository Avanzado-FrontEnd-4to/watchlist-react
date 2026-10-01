import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

/**
 * 🪝 Custom Hook para consumir el contexto de Watchlist
 */
export function useWatchlist() {
  // TODO: Consumir WatchlistContext con useContext
  // Validar si context es null y lanzar un error descriptivo si se usa fuera de WatchlistProvider.
  // (Pista: miren usePokemonContext)
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist debe usarse dentro de un WatchlistProvider");
  }
  return context;
}
