import { useState, type ReactNode } from "react";
import { WatchlistContext } from "./WatchlistContext";

export function WatchlistProvider({ children }: { children: ReactNode }) {
  // TODO 1: Declarar el estado 'watchlistIds' usando useState<number[]> inicializado en []
  const [watchlistIds, setWatchlistIds] = useState<number[]>([]);

  // TODO 2: Completar la función toggleWatchlist(id)
  // - Si el id ya está en watchlistIds -> quitarlo del array (filtrar)
  // - Si no está -> agregarlo al array
  // (Pista: pueden guiarse de cómo hicimos toggleCapture en el ejemplo de Pokémon)
  const toggleWatchlist = (id: number) => {
    setWatchlistIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  // TODO 3: Completar la función isInWatchlist(id)
  // - Debe retornar true si el id ya está en watchlistIds, o false si no
  const isInWatchlist = (id: number) => watchlistIds.includes(id);

  // TODO 4: Completar la función clearWatchlist()
  // - Debe vaciar el array watchlistIds dejándolo en []
  const clearWatchlist = () => setWatchlistIds([]);

  return (
    // TODO 5: Proveer los valores a los componentes hijos a través de WatchlistContext.Provider
    <WatchlistContext.Provider
      value={{ watchlistIds, toggleWatchlist, isInWatchlist, clearWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}
