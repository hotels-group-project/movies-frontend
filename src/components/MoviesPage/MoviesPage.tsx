import { FC, memo } from 'react';

import MoviesFilter from './MoviesFilter/MoviesFilter';
import styles from './MoviesPage.module.scss';

const MoviesPage: FC = () => {
  return (
    <main className={styles.main}>
      <p>MoviesPage</p>
      <MoviesFilter />
    </main>
  );
};

export default memo(MoviesPage);
