import { FilterTitle } from '../../../../../types/types';

export interface PersonFilterProps {
  type: 'actor' | 'producer';
  removeQueryParam(title: FilterTitle): void;
}
