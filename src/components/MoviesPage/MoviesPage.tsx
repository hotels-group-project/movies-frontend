import { FC, memo } from 'react';

import MovieGenresSlider from './MovieGenresSlider/MovieGenresSlider';
import MoviesFilter from './MoviesFilter/MoviesFilter';
import MoviesNewsSlider from './MoviesNewsSlider/MoviesNewsSlider';
import styles from './MoviesPage.module.scss';
import MoviesPersonsSlider from './MoviesPersonsSlider/MoviesPersonsSlider';

const MoviesPage: FC = () => {
  return (
    <main className={styles.main}>
      <MoviesFilter />
      <MoviesNewsSlider />
      <MovieGenresSlider />
      <MoviesPersonsSlider />
    </main>
  );
};

export default memo(MoviesPage);
