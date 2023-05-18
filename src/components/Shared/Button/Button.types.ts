import { ReactNode } from 'react';

export type Variant =
  | 'default'
  | 'arrow'
  | 'arrow_s'
  | 'arrow_m'
  | 'border'
  | 'border_min'
  | 'border_column'
  | 'info'
  | 'sort_circle'
  | 'sort_square'
  | 'dark_small'
  | 'dark_middle'
  | 'dark_big'
  | 'dark_large'
  | 'dark_round'
  | 'text_element'
  | 'text_special'
  | 'footer_tablet'
  | 'text_reverse';

export interface ButtonProps {
  variant?: Variant;
  elemClassName?: string;
  onClick?(): void;
  startIcon?: ReactNode;
  children?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
}

export interface ButtonAndLinkProps extends ButtonProps {
  link: string;
}
