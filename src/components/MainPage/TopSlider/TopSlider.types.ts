import { TopCard } from '../../../types/types';
export interface TopSliderProps {
  images: Array<TopCard>;
  title: string;
  slidesCount: number;
  spaceBetween: number;
  slidesPerView: number | 'auto' | undefined;
}
