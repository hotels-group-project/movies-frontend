import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import MovieCard from '../../Shared/MovieCard/MovieCard';
import Slider from '../../Shared/Slider/Slider';

import styles from './MovieSlider.module.scss';

import { MovieSliderProps } from './MovieSlider.types';

const MovieSlider: FC<MovieSliderProps> = ({
  images,
  slidesCount,
  spaceBetween,
  title,
  slidesPerView,
  breakpoints,
  link,
}) => {
  const { t } = useTranslation('movieSlider');
  const router = useRouter();
  const isMoviePage = router.pathname === '/movies/[id]';
  return (
    <>
      <section className={styles.container}>
        {isMoviePage ? (
          <h2 className={styles.title}>
            {title} <span>&rang;</span>
          </h2>
        ) : (
          <LinkComponent link={link || '/'}>
            <h2 className={styles.title}>
              {title} <span>&rang;</span>
            </h2>
          </LinkComponent>
        )}
        <Slider
          slidesCount={slidesCount}
          spaceBetween={spaceBetween}
          sliderClassName={styles.movieSlider}
          slidesPerView={slidesPerView}
          variant="arrow"
          breakpoints={breakpoints}
        >
          {images.map(image => (
            <SwiperSlide key={image.film_id} className={styles.movieSwiper}>
              <MovieCard movie={image} />
            </SwiperSlide>
          ))}
          {!isMoviePage && (
            <SwiperSlide>
              <LinkComponent link="/" variant="dark_big" elemClassName={styles.link}>
                {t('all')}
              </LinkComponent>
            </SwiperSlide>
          )}
        </Slider>
      </section>
    </>
  );
};

export default memo(MovieSlider);
