import { ReactNode } from 'react';

export type FilterTitle = 'genres' | 'years' | 'countries' | 'rating' | 'producer' | 'actor';

export interface FilterButtonProps {
  title: FilterTitle;
  children?: ReactNode;
}
