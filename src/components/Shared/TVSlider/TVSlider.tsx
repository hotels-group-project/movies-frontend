import { FC, memo } from 'react';

import Slider from '../Slider/Slider';

import styles from './TVSlider.module.scss';

import { TVSliderProps } from './TVSlider.types';

const TVSlider: FC<TVSliderProps> = ({ slidesCount, children }) => {
  return (
    <div className={styles.tvSliderContainer}>
      <Slider slidesCount={slidesCount} spaceBetween={30} sliderClassName={styles.tvSlider}>
        {children}
      </Slider>
    </div>
  );
};

export default memo(TVSlider);
