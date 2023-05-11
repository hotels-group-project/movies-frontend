import { ReactNode } from 'react';

export type SliderProps = {
  slidesCount: number;
  autoplayDelay?: boolean;
  children?: ReactNode;
  spaceBetween: number;
  sliderClassName?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
};
