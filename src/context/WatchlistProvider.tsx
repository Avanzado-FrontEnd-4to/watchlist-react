import { useState, type ReactNode } from "react";
import { WatchlistContext } from "./WatchlistContext";

export function WatchlistProvider({ children }: { children: ReactNode }) {
  // ============================================================================
  // 📝 PASO 3: Estado de la Watchlist
  // ============================================================================
  // TODO: Declarar un estado 'watchlistIds' de tipo number[] inicializado como array vacío [].
  const [watchlistIds, setWatchlistIds] = useState<number[]>([]);

  // ============================================================================
  // 📝 PASO 4: Alternar película en la Watchlist (Agregar / Quitar)
  // ============================================================================
  // TODO: Completar la lógica de toggleWatchlist(id):
  // 1. Si el 'id' ya existe en 'watchlistIds', filtrarlo para removerlo del array.
  // 2. Si no existe, agregarlo al final del array.
  // (Pista: miren cómo usamos setCapturedIds y filter en el ejemplo de Pokémon)
  const toggleWatchlist = (id: number) => {
    // 👇 TU CÓDIGO AQUÍ 👇
    console.log("toggleWatchlist con ID:", id);
    setWatchlistIds((prev) => prev); // Temporal para que TypeScript no se queje
  };

  // ============================================================================
  // 📝 PASO 5: Saber si una película está guardada
  // ============================================================================
  // TODO: Retornar true si 'id' está presente en 'watchlistIds', false si no lo está.
  // (Pista: método includes())
  const isInWatchlist = (id: number): boolean => {
    // 👇 TU CÓDIGO AQUÍ 👇
    console.log("isInWatchlist con ID:", id);
    return false; // Reemplazar este return temporal
  };

  // ============================================================================
  // 📝 PASO 6: Vaciar la Watchlist
  // ============================================================================
  // TODO: Resetear el estado 'watchlistIds' a un array vacío [].
  const clearWatchlist = () => {
    // 👇 TU CÓDIGO AQUÍ 👇
    setWatchlistIds([]);
  };

  return (
    // ============================================================================
    // 📝 PASO 7: Proveer el contexto a los componentes hijos
    // ============================================================================
    // TODO: Pasar en el prop 'value' un objeto con:
    // { watchlistIds, toggleWatchlist, isInWatchlist, clearWatchlist }
    <WatchlistContext.Provider
      value={{ watchlistIds, toggleWatchlist, isInWatchlist, clearWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
