import { FC, memo } from 'react';

import MovieGenresSlider from './MovieGenresSlider/MovieGenresSlider';
import MoviesFilter from './MoviesFilter/MoviesFilter';
import styles from './MoviesPage.module.scss';
import MoviesPersonsSlider from './MoviesPersonsSlider/MoviesPersonsSlider';

const MoviesPage: FC = () => {
  return (
    <main className={styles.main}>
      <MoviesFilter />
      <MovieGenresSlider />
      <MoviesPersonsSlider />
    </main>
  );
};

export default memo(MoviesPage);
