import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';
import { FC, useMemo } from 'react';

import { useAppSelector } from '../../hooks/redux';
import Button from '../Shared/Button/Button';

import Description from './Description/Description';
import { BREAKPOINTS } from './MainPage.constants';
import styles from './MainPage.module.scss';
import MainSlider from './MainSlider/MainSlider';
import MovieSlider from './MovieSlider/MovieSlider';
import { POSTER_CARDS } from './PosterCard/PosterCard.constants';
import { TOP_CARDS } from './TopCard/TopCard.constants';

import TopSlider from './TopSlider/TopSlider';

const Main: FC = () => {
  const { t } = useTranslation('main');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);
  const TopPerView = useMemo(() => {
    return isDesktop ? 5 : isTablet ? 3 : 1.5;
  }, [isDesktop, isTablet]);
  const movies = useAppSelector(state => state.movies);
  const russianMovies = movies.russian;
  const foreignMovies = movies.foreign;
  const cartoons = movies.cartoons;
  return (
    <>
      <MainSlider items={POSTER_CARDS} />
      <div className={styles.buttonsContainer}>
        <Button variant="dark_big" elemClassName={`${styles.button} ${styles.buttonSpecial}`}>
          <Image src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg" width={32} height={32} />
          {t('30-days')}
        </Button>
        <Button variant="dark_big" elemClassName={styles.button}>
          <Image src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg" width={64} height={32} />
          {t('activate')}
        </Button>
      </div>
      <TopSlider
        images={TOP_CARDS}
        slidesCount={TopPerView - 1}
        slidesPerView={TopPerView}
        spaceBetween={24}
        title={t('top')}
      />
      <Description />
      <MovieSlider
        images={russianMovies}
        slidesCount={1}
        spaceBetween={24}
        slidesPerView={1}
        title={t('russian')}
        breakpoints={BREAKPOINTS}
      />
      <MovieSlider
        images={foreignMovies}
        slidesCount={1}
        spaceBetween={24}
        slidesPerView={1}
        title={t('foreign')}
        breakpoints={BREAKPOINTS}
      />
      <MovieSlider
        images={cartoons}
        slidesCount={1}
        spaceBetween={24}
        slidesPerView={1}
        title={t('cartoons')}
        breakpoints={BREAKPOINTS}
      />
    </>
  );
};

export default Main;
