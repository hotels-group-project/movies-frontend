import { ChangeEvent } from 'react';

import { YearsFilterProps } from '../YearsFilter.types';

export interface YearsFilterItemProps {
  year: string;
  yearState: string;
  onChange(evt: ChangeEvent<HTMLInputElement>): void;
  type: YearsFilterProps['type'];
}
