import { FC, memo } from 'react';

import MovieGenresSlider from './MovieGenresSlider/MovieGenresSlider';
import MoviesFilter from './MoviesFilter/MoviesFilter';
import styles from './MoviesPage.module.scss';

const MoviesPage: FC = () => {
  return (
    <main className={styles.main}>
      <MoviesFilter />
      <MovieGenresSlider />
    </main>
  );
};

export default memo(MoviesPage);
