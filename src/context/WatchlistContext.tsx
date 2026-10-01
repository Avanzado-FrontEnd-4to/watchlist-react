import { createContext } from "react";

// 📝 Interfaz del Contexto:
// Define qué datos y qué funciones estarán disponibles en toda la app.
export interface WatchlistContextType {
  watchlistIds: number[];
  toggleWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
  clearWatchlist: () => void;
}

// TODO: Crear y exportar el WatchlistContext usando createContext con valor inicial null
// Ejemplo: export const WatchlistContext = createContext<WatchlistContextType | null>(null);
export const WatchlistContext = createContext<WatchlistContextType | null>(null);
