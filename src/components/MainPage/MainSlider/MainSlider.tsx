import { FC, memo } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PosterCard from '../PosterCard/PosterCard';

import styles from './MainSlider.module.scss';

import { MainProps } from './MainSlider.types';

import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';

const MainSlider: FC<MainProps> = ({ items }) => {
  const slides = items.map(item => {
    return (
      <SwiperSlide key={item.id} className={styles.mainSliderSlide}>
        <div className="swiper-slide-transform">
          <PosterCard cardElem={item} />
        </div>
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
        navigation
        loop
        loopedSlides={1}
        speed={700}
      >
        {slides}
      </Swiper>
    </section>
  );
};

export default memo(MainSlider);
