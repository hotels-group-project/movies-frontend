import { WidgetDropdownMenuProps } from '../WidgetDropdownMenu/WidgetDropdownMenu.types';

export interface MoviesDropdownMenuProps {
  countries: Array<string>;
  years: Array<string>;
  alternativeFilters: Array<{ id: number; title: string; link: string }>;
  animatedImages: Array<{ title: string; array: WidgetDropdownMenuProps['animatedImages'] }>;
}
