import { Filter, FilterTitle } from '../../../../../types/types';

export interface GenresFilterProps {
  filters: Array<Filter>;
  type: 'genres' | 'countries';
  removeQueryParam(title: FilterTitle): void;
}
