import { ReactNode } from 'react';

export interface Breakpoint {
  isDesktop: boolean;
  isTablet: boolean;
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

export type Variant =
  | 'default'
  | 'arrow'
  | 'arrow_s'
  | 'arrow_m'
  | 'border'
  | 'border_min'
  | 'border_column'
  | 'info'
  | 'sort_circle'
  | 'sort_square'
  | 'dark_small'
  | 'dark_middle'
  | 'dark_big'
  | 'dark_large'
  | 'dark_round'
  | 'text_element'
  | 'text_special'
  | 'footer_tablet'
  | 'text_reverse';

export interface ButtonProps {
  variant?: Variant;
  elemClassName?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
}

export interface ButtonAndLinkProps extends ButtonProps {
  link: string;
}

export interface IMovieCard {
  film_id: number;
  poster: string;
  name: string;
  ageRating: number;
  link: string;
  genres: Array<string>;
  year: number;
  kprating: number;
  moveLength: number;
  alternativeName: string;
}
