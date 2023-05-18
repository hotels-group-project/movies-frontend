import { ReactNode } from 'react';

export interface TVSliderProps {
  spaceBetween: number;
  slidesPerView: number | 'auto' | undefined;
  slidesCount: number;
  children: ReactNode;
}
