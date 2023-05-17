import { ReactNode } from 'react';

export type SliderProps = {
  slidesCount: number;
  slidesPerView: number | 'auto' | undefined;
  autoplayDelay?: boolean;
  children?: ReactNode;
  spaceBetween: number;
  sliderClassName?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
};
