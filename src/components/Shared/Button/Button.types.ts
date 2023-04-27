import { ReactNode } from 'react';

import { Variant } from '../../../types/types';

export interface ButtonProps {
  variant: Variant;
  buttonClassName?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
}
