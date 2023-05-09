// eslint-disable-next-line no-restricted-imports
import React from 'react';
import { memo } from 'react';

import { Autoplay, Navigation, FreeMode } from 'swiper';

import { Swiper } from 'swiper/react';

import styles from './Slider.module.scss';
import { Props } from './Slider.types';

import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';

function Slider({ slidesCount, autoplayDelay = false, children, spaceBetween, sliderClassName }: Props) {
  const autoPlayParams = {
    delay: 2000,
    disableOnInteraction: false,
  };
  const isAutoPlay = autoplayDelay ? autoPlayParams : false;
  return (
    <>
      <Swiper
        cssMode
        spaceBetween={spaceBetween}
        slidesPerView={slidesCount}
        slidesPerGroup={slidesCount}
        freeMode
        autoplay={isAutoPlay}
        modules={[Navigation, Autoplay, FreeMode]}
        className={`${styles.slider} ${sliderClassName ? sliderClassName : ''}`}
        navigation
      >
        {children}
      </Swiper>
    </>
  );
}

export default memo(Slider);
