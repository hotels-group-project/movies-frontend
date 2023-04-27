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
  | 'text';

export interface ButtonAndLinkProps {
  variant?: Variant;
  link: string;
  className?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
}
