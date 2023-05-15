import { useRef } from 'react';
import { FC, memo } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { Swiper as SwiperType, Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../../Shared/Button/Button';

import PosterCard from '../PosterCard/PosterCard';

import styles from './MainSlider.module.scss';

import { MainSliderProps } from './MainSlider.types';

import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';

const MainSlider: FC<MainSliderProps> = ({ items }) => {
  const swiperRef = useRef<SwiperType>();
  const slides = items.map(item => {
    return (
      <SwiperSlide key={item.id} className={styles.mainSliderSlide}>
        {({ isActive }) => (
          <div className={`${isActive ? `${styles.slideContainerActive}` : `${styles.slideContainerNotActive}`}`}>
            <PosterCard cardElem={item} />
          </div>
        )}
      </SwiperSlide>
    );
  });
  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView="auto"
        cssMode
        spaceBetween={24}
        slidesPerGroup={1}
        centeredSlides
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        className={styles.mainSlider}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        loop
        loopedSlides={1}
        speed={700}
      >
        {slides}
        <Button
          variant="arrow"
          elemClassName={styles.mainSliderButtonPrev}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <SlArrowLeft />
        </Button>
        <Button
          variant="arrow"
          elemClassName={styles.mainSliderButtonNext}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <SlArrowRight />
        </Button>
      </Swiper>
    </section>
  );
};

export default memo(MainSlider);
