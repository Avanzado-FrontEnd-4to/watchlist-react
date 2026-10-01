import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

/**
 * ============================================================================
 * 🪝 PASO 8: Custom Hook para consumir el contexto de forma sencilla y segura
 * ============================================================================
 * En lugar de usar useContext(WatchlistContext) en cada componente, abstraemos
 * el consumo en este hook personalizado.
 */
export function useWatchlist() {
  // TODO:
  // 1. Obtener el contexto usando useContext(WatchlistContext).
  // 2. Validar: si 'context' es null/falsy, lanzar un Error explicativo
  //    ej: throw new Error("useWatchlist debe usarse dentro de un WatchlistProvider");
  // 3. Retornar 'context'.
  // (Pista: miren el hook usePokemonContext del ejemplo visto en clase)

  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist debe usarse dentro de un WatchlistProvider");
  }
  return context;
}
