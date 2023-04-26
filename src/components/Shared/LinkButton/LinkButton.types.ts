import { ReactNode } from 'react';

export interface LinkButtonProps {
  link: string;
  title?: string;
  text?: string;
  src?: string;
  buttonStyle?: string;
  children?: ReactNode;
  onClick?: () => void;
  icon?: string;
  alt?: string;
}
