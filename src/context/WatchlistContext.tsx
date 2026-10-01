import { createContext } from "react";

// ============================================================================
// 📝 PASO 1: Contrato del Contexto (TypeScript)
// ============================================================================
// Define la forma de los datos y funciones que estarán disponibles en toda la app.
export interface WatchlistContextType {
  watchlistIds: number[];
  toggleWatchlist: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
  clearWatchlist: () => void;
}

// ============================================================================
// 📝 PASO 2: Crear el Contexto
// ============================================================================
// TODO: Crear y exportar 'WatchlistContext' usando createContext con valor inicial null.
// Tipado: createContext<WatchlistContextType | null>(null)
export const WatchlistContext = createContext<WatchlistContextType | null>(null);
