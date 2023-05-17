import { ReactNode } from 'react';

export type SliderProps = {
  slidesCount: number;
  autoplayDelay?: boolean;
  isBreakpoints?: boolean;
  children?: ReactNode;
  spaceBetween: number;
  sliderClassName?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
};
