export interface MoviesDropdownMenuProps {
  genres: Array<string>;
  countries: Array<string>;
  years: Array<string>;
  alternativeFilters: Array<{ id: number; title: string; link: string }>;
}
