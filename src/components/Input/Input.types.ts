import { ChangeEvent, ReactNode } from 'react';
import { ChangeEventHandler } from 'react';

export interface InputProps {
  id: string,
  placeholder: string;
  inputClassName?: string;
  primary?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
