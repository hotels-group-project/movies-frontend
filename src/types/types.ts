import { SwiperOptions } from 'swiper';

export interface Breakpoint {
  isDesktop: boolean;
  isTablet: boolean;
}

type Filter = {
  name: string;
};

export interface Filters {
  genres: Array<Filter>;
  countries: Array<Filter>;
}

export enum DropdownMenuTypes {
  'my-ivi' = 'my-ivi',
  'new' = 'new',
  'movies' = 'movies',
  'serial-movies' = 'serial-movies',
  'cartoons' = 'cartoons',
  'tvplus' = 'tvplus',
  'bell' = 'bell',
  'user' = 'user',
}

export interface DropdownMenu {
  dropdownMenuHoveredItem: keyof typeof DropdownMenuTypes | '';
}

export interface MovieCard {
  film_id: number;
  poster: string;
  name: string;
  type?: string;
  ageRating: number;
  genres: Array<string>;
  countries?: Array<string>;
  year: number;
  kprating: number;
  movieLength: number;
  alternativeName: string;
}

export interface FilteredMovies {
  filteredMovies: Array<MovieCard>;
}

export interface Movies {
  movies: Array<MovieCard>;
  russian: Array<MovieCard>;
  foreign: Array<MovieCard>;
  cartoons: Array<MovieCard>;
}

export interface FilterActivated {
  filterActivated: boolean;
}

export interface ActiveFilters {
  genres: Array<string>;
  countries: Array<string>;
  years: Array<string>;
  rating: Array<string>;
  producer: Array<string>;
  actor: Array<string>;
}

export interface TopCard {
  id: number;
  poster: string;
  title: string;
  titleImg: string;
  link: string;
  number: string;
}

export interface MoveCardBreakpoints {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}
