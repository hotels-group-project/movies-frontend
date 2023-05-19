import { FilterTitle } from '../../../../../types/types';

export interface GenresFilterProps {
  filters: Array<{ name: string }>;
  type: 'genres' | 'countries';
  removeQueryParam(title: FilterTitle): void;
}
