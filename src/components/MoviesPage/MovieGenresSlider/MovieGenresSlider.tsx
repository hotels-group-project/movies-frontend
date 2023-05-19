import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../hooks/redux';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import Slider from '../../Shared/Slider/Slider';

import { MOVIE_GENRES_ICON } from './MovieGenresSlider.constants';
import styles from './MovieGenresSlider.module.scss';

export const BASE_URL = 'http://localhost:3000';

const MovieGenresSlider: FC = () => {
  const { t } = useTranslation('moviesPage');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);
  const moviesGenres = useAppSelector(store => store.filters).genres;

  const AdaptiveSlidesCount = useMemo(() => {
    return isDesktop ? 7 : isTablet ? 3 : 1;
  }, [isDesktop, isTablet]);

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
          slidesCount={AdaptiveSlidesCount}
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
