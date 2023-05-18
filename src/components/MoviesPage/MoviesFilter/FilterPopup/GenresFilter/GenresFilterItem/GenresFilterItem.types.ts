import { GenresFilterProps } from '../GenresFilter.types';

export interface GenresFilterItemProps {
  item: string;
  type: GenresFilterProps['type'];
  onFilterClick(item: string): void;
}
