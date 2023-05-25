import { ChangeEvent } from 'react';

export interface PersonFilterItemProps {
  name: string;
  personState: string;
  onChange(evt: ChangeEvent<HTMLInputElement>): void;
}
