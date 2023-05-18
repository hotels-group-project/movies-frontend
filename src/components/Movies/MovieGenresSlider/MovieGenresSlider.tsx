import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import Slider from '../../Shared/Slider/Slider';

import { MOVIE_GENRES_ICON } from './icons';
import styles from './MovieGenresSlider.module.scss';
import { GenresSliderProps } from './MovieGenresSlider.types';

export const BASE_URL = 'http://localhost:3000';

const MovieGenresSlider: FC<GenresSliderProps> = ({ items }) => {
  const { t } = useTranslation('header');

  const slides = items.map((item, i) => {
    return (
      <SwiperSlide key={i} className={styles.movieGenresSliderSlide}>
        <LinkComponent variant="dark_middle" link={`${BASE_URL}/movies?genres=${item.name}`}>
          <div className={styles.movieGenresSliderContainer}>
            <div className={styles.movieGenresSliderImg}>
              <Image src={MOVIE_GENRES_ICON[`${item.name}`]} alt="icon" width={32} height={32} />
            </div>
            <h3>{t(`genres.${item.name}`)}</h3>
          </div>
        </LinkComponent>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Slider
        slidesCount={7}
        spaceBetween={20}
        sliderClassName={styles.movieGenresSlider}
        prevButtonClassName={styles.prevButton}
        nextButtonClassName={styles.nextButton}
      >
        {slides}
      </Slider>
    </>
  );
};

export default memo(MovieGenresSlider);
