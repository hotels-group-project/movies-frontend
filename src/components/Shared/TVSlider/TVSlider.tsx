import { FC, memo } from 'react';

import Slider from '../Slider/Slider';

import styles from './TVSlider.module.scss';

import { TVSliderProps } from './TVSlider.types';

const TVSlider: FC<TVSliderProps> = ({ spaceBetween, slidesPerView, slidesCount, children }) => {
  return (
    <div className={styles.tvSliderContainer}>
      <Slider
        slidesPerView={slidesPerView}
        slidesCount={slidesCount}
        spaceBetween={spaceBetween}
        sliderClassName={styles.tvSlider}
        prevButtonClassName={styles.tvSliderButtonPrev}
        nextButtonClassName={styles.tvSliderButtonNext}
      >
        {children}
      </Slider>
    </div>
  );
};

export default memo(TVSlider);
