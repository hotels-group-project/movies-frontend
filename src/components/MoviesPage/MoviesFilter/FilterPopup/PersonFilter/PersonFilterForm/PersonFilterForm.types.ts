import { PersonFilterProps } from '../PersonFilter.types';

export interface PersonFilterFormProps {
  type: PersonFilterProps['type'];
  removeQueryParam: PersonFilterProps['removeQueryParam'];
  handlePersonStateChange(newItem: string): void;
}
