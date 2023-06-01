import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import { useAppSelector } from '../../hooks/redux';
import { BREAKPOINTS } from '../MainPage/MainPage.constants';
import MovieSlider from '../Shared/MovieSlider/MovieSlider';

import MovieDescription from './MovieDescription/MovieDescription';
import MovieGeneralInfo from './MovieGeneralInfo/MovieGeneralInfo';
import styles from './MoviePage.module.scss';
import MoviePersons from './MoviePersons/MoviePersons';
import MovieRatingButtonProps from './MovieRatingButton/MovieRatingButton';
import MovieTrailer from './MovieTrailer/MovieTrailer';

const MoviePage: FC = () => {
  const { isDesktop } = useAppSelector(state => state.breakpoint);
  const movie = useAppSelector(state => state.movie);
  const film = movie.film;
  const lookWith = movie.lookWith;
  const router = useRouter();
  const { t } = useTranslation('moviePage');
  return (
    <>
      <div className={styles.background} />
      <main className={styles.main}>
        {isDesktop ? (
          <div className={styles.infoContainer}>
            <MovieTrailer film={film} />
            <div className={styles.info}>
              <MovieGeneralInfo film={film} />
              <MoviePersons film={film} />
              <MovieDescription film={film} />
              <MovieRatingButtonProps film={film} />
            </div>
          </div>
        ) : (
          <div className={styles.infoContainer}>
            <MovieGeneralInfo film={film} />
            <MovieTrailer film={film} />
            <div className={styles.info}>
              <MoviePersons film={film} />
              <MovieDescription film={film} />
              <MovieRatingButtonProps film={film} />
            </div>
          </div>
        )}
        {/* <div className={styles.infoContainer}>
          <MovieTrailer film={film} />
          <div className={styles.info}>
            <MovieGeneralInfo film={film} />
            <MoviePersons film={film} />
            <MovieDescription film={film} />
            <MovieRatingButtonProps film={film} />
          </div>
        </div> */}
        <MovieSlider
          images={lookWith}
          slidesCount={1}
          spaceBetween={24}
          slidesPerView={1}
          title={`${t('with')} «${router.locale === 'ru' ? film.name : film.alternativeName}» ${t('watching')}`}
          breakpoints={BREAKPOINTS}
        />
      </main>
    </>
  );
};

export default memo(MoviePage);
