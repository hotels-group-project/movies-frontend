import Image from 'next/legacy/image';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import TopCard from '../../MainPage/TopCard/TopCard';
import Slider from '../../Shared/Slider/Slider';

import styles from './TopSlider.module.scss';

import { TopSliderProps } from './TopSlider.types';

const TopSlider: FC<TopSliderProps> = ({ images, slidesCount, spaceBetween, slidesPerView, title }) => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>
          <Image src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg" alt="топ10" width={116} height={28} />
          <span>{title}</span>
        </h2>
        <Slider
          slidesCount={slidesCount}
          spaceBetween={spaceBetween}
          sliderClassName={styles.topSlider}
          slidesPerView={slidesPerView}
          variant="arrow"
        >
          {images.map(image => (
            <SwiperSlide key={image.id}>
              <div className={styles.containerTop}>
                <TopCard movie={image} />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default memo(TopSlider);
