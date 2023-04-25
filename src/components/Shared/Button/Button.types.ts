import { ReactNode } from 'react';

export interface ButtonProps {
  variant:
    | 'default'
    | 'arrow'
    | 'arrow_s'
    | 'arrow_m'
    | 'filter'
    | 'feedback'
    | 'feedback_min'
    | 'feedback_column'
    | 'info'
    | 'sort';
  buttonClassName?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
}
