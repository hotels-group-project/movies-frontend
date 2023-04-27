import { DropdownMenuTypes } from '../../../types/types';

export interface HeaderMenuProps {
  translate(title: string): string;
  onMouseEnter(title: HeaderMenuTypes['title']): void;
}

export interface HeaderMenuTypes {
  id: number;
  title: keyof typeof DropdownMenuTypes;
  link: string;
}
