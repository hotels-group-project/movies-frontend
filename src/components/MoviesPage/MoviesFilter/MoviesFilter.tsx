import { FC, memo } from 'react';
import { SlArrowDown } from 'react-icons/sl';

import Button from '../../Shared/Button/Button';

import styles from './MoviesFilter.module.scss';

const arr = ['Жанры', 'Страны', 'Годы', 'Рейтинг', 'Режиссер'];

const MoviesFilter: FC = () => {
  return (
    <section className={styles.section}>
      {arr.map(title => (
        <Button variant="sort_square" elemClassName={styles.filter} key={title} endIcon={<SlArrowDown />}>
          <p className={styles.filter__title}>{title}</p>
        </Button>
      ))}
    </section>
  );
};

export default memo(MoviesFilter);
