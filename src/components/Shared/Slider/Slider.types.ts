import { ReactNode } from 'react';

export type Props = {
  slidesCount: number;
  autoplayDelay?: boolean;
  children?: ReactNode;
  spaceBetween: number;
  sliderClassName?: string;
};
