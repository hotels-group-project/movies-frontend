import { ReactNode } from 'react';

export interface ButtonProps {
  title: string;
  titleClassName?: string;
  buttonClassName?: string;
  children?: ReactNode;
}
