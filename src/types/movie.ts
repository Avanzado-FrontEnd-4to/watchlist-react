export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number | null;
  genres: string[];
  summary: string;
  premiered: string;
}
