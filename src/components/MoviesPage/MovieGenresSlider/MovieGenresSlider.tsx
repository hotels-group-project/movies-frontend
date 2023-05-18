import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../hooks/redux';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import Slider from '../../Shared/Slider/Slider';

import { MOVIE_GENRES_ICON } from './icons';
import styles from './MovieGenresSlider.module.scss';

export const BASE_URL = 'http://localhost:3000';

const MovieGenresSlider: FC = () => {
  const { t } = useTranslation('moviesPage');
  const moviesGenres = useAppSelector(store => store.filters).genres;

  const slides = moviesGenres.map(item => {
    return (
      <SwiperSlide key={item.name} className={styles.movieGenresSliderSlide}>
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
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Жанры</h2>
        <Slider
          slidesCount={7}
          slidesPerView="auto"
          spaceBetween={24}
          sliderClassName={styles.movieGenresSlider}
          prevButtonClassName={styles.prevButton}
          nextButtonClassName={styles.nextButton}
        >
          {slides}
        </Slider>
      </section>
    </>
  );
};

export default memo(MovieGenresSlider);
