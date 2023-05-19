import { ReactNode } from 'react';

import { FilterTitle } from '../../../../types/types';

export interface FilterButtonProps {
  title: FilterTitle;
  children?: ReactNode;
}
