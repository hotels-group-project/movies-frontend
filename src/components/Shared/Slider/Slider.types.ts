import { ReactNode } from 'react';

import { MoveCardBreakpoints } from '../../../types/types';
import { Variant } from '../../Shared/Button/Button.types';

export type SliderProps = {
  slidesCount: number;
  slidesPerView: number | 'auto' | undefined;
  autoplayDelay?: boolean;
  children?: ReactNode;
  spaceBetween: number;
  sliderClassName?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
  variant?: Variant | undefined;
  breakpoints?: MoveCardBreakpoints;
};
