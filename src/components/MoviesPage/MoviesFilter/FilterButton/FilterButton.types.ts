import { ReactNode } from 'react';

export interface FilterButtonProps {
  title: 'genres' | 'years' | 'countries' | 'rating' | 'producer' | 'actor';
  children?: ReactNode;
}
