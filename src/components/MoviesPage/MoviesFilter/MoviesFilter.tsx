import { FC, memo } from 'react';

import { FilterTitle } from '../../../types/types';

import FilterButton from './FilterButton/FilterButton';
import FilterClear from './FilterClear/FilterClear';
import { MOVIES_FILTERS_TITLE } from './MoviesFilter.constants';
import styles from './MoviesFilter.module.scss';

const MoviesFilter: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.filters}>
        {MOVIES_FILTERS_TITLE.map(title => (
          <FilterButton key={title} title={title as FilterTitle} />
        ))}
      </div>
      <FilterClear />
    </section>
  );
};

export default memo(MoviesFilter);
