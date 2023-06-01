import { MovieCard, MoveCardBreakpoints } from '../../../types/types';

export interface MovieSliderProps {
  images: Array<MovieCard>;
  slidesCount: number;
  spaceBetween: number;
  title: string;
  slidesPerView: number | 'auto' | undefined;
  breakpoints?: MoveCardBreakpoints;
  link?: string;
}
