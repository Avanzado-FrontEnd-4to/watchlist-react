# 🍿 CineVault - Práctica: React Context API

Repositorio template para la práctica de **Estado Global con React Context y Custom Hooks**.

## 🎯 Objetivo de la actividad
Implementar la funcionalidad de **Watchlist (lista de seguimiento)** utilizando **React Context API**, conectando el catálogo de películas con la barra de navegación y la página de Watchlist personal.

---

## 🚀 Cómo correr el proyecto
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 📂 Archivos clave a revisar:
- `src/hooks/useMovies.ts`: Hook 'caja negra' que consume la API de TVMaze y provee las películas ya formateadas.
- `src/context/WatchlistContext.tsx`: Archivo donde se define y crea el contexto.
- `src/context/WatchlistProvider.tsx`: Componente proveedor donde vive el `useState` y las funciones de negocio.
- `src/hooks/useWatchlist.ts`: Custom hook para consumir el contexto fácilmente.
- `src/components/MovieCard.tsx`: Tarjeta de cada película donde se conecta el botón de agregar/quitar.
- `src/components/Navbar.tsx`: Barra de navegación con el contador en tiempo real.
- `src/pages/WatchlistPage.tsx`: Vista con el listado de películas guardadas.
