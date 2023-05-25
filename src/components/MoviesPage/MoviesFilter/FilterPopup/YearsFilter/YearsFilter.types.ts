import { FilterTitle } from '../../../../../types/types';

export interface YearsFilterProps {
  type: 'years' | 'rating';
  filters: Array<{ id: number; name: string }>;
  removeQueryParam(title: FilterTitle): void;
}
