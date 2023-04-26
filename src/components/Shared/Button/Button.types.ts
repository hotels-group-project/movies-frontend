import { ReactNode } from 'react';

import { Variants } from '../../../types/types';

export interface ButtonProps {
  variant: Variants['variant'];
  buttonClassName?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
}
