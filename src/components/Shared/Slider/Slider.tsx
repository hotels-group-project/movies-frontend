import { useRef } from 'react';
import { FC, memo } from 'react';

import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { Swiper as SwiperType, Navigation, Autoplay, FreeMode } from 'swiper';
import { Swiper } from 'swiper/react';

import Button from '../Button/Button';

import styles from './Slider.module.scss';
import { SliderProps } from './Slider.types';

import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';

const autoPlayParams = {
  delay: 2000,
  disableOnInteraction: false,
};

const Slider: FC<SliderProps> = ({
  slidesCount,
  autoplayDelay = false,
  children,
  spaceBetween,
  sliderClassName,
  prevButtonClassName,
  nextButtonClassName,
}) => {
  const isAutoPlay = autoplayDelay ? autoPlayParams : false;
  const swiperRef = useRef<SwiperType>();
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
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {children}
        <Button
          variant="arrow_s"
          elemClassName={`${styles.sliderButtonPrev} ${prevButtonClassName ? prevButtonClassName : ''}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <SlArrowLeft />
        </Button>
        <Button
          variant="arrow_s"
          elemClassName={`${styles.sliderButtonNext} ${nextButtonClassName ? nextButtonClassName : ''}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <SlArrowRight />
        </Button>
      </Swiper>
    </>
  );
};

export default memo(Slider);
