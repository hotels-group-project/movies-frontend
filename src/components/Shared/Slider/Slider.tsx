import { FC, memo, useState, useEffect, useRef } from 'react';

import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { Swiper as SwiperType, Navigation, Autoplay, FreeMode, Grid } from 'swiper';
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
  slidesPerView,
  autoplayDelay = false,
  children,
  spaceBetween,
  sliderClassName,
  prevButtonClassName,
  nextButtonClassName,
  variant,
  breakpoints,
}) => {
  const isAutoPlay = autoplayDelay ? autoPlayParams : false;
  const swiperRef = useRef<SwiperType>();

  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('reachEnd', () => {
        setIsEnd(true);
      });
      swiperRef.current.on('reachBeginning', () => {
        setIsEnd(false);
        setIsBeginning(true);
      });
      swiperRef.current.on('slideChange', () => {
        setIsEnd(false);
        setIsBeginning(false);
      });
    }
  }, [isEnd, isBeginning]);
  return (
    <>
      <Swiper
        cssMode
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesCount}
        freeMode
        autoplay={isAutoPlay}
        modules={[Navigation, Autoplay, FreeMode, Grid]}
        className={`${styles.slider} ${sliderClassName ? sliderClassName : ''}`}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        breakpoints={breakpoints}
      >
        {children}
        <Button
          variant={variant ? variant : 'arrow_s'}
          elemClassName={`${styles.sliderButtonPrev} ${prevButtonClassName ? prevButtonClassName : ''}
          ${isBeginning ? styles.btnHidden : ''}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <SlArrowLeft />
        </Button>
        <Button
          variant={variant ? variant : 'arrow_s'}
          elemClassName={`${styles.sliderButtonNext} ${nextButtonClassName ? nextButtonClassName : ''}
          ${isEnd ? styles.btnHidden : ''}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <SlArrowRight />
        </Button>
      </Swiper>
    </>
  );
};

export default memo(Slider);
