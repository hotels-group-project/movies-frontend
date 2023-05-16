import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback } from 'react';
import { ImCross } from 'react-icons/im';

import { useAppSelector } from '../../../hooks/redux';
import Button from '../../Shared/Button/Button';

import FilterButton from './FilterButton/FilterButton';
import { MOVIES_FILTERS_TITLE } from './MoviesFilter.constants';
import styles from './MoviesFilter.module.scss';

const MoviesFilter: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('moviesPage');
  const filterActivated = useAppSelector(store => store.filterActivated.filterActivated);

  const clearFilter = useCallback(() => {
    router.replace({ query: {} });
  }, [router]);

  return (
    <section className={styles.section}>
      <div className={styles.filters}>
        {MOVIES_FILTERS_TITLE.map(title => (
          <FilterButton key={title} title={title} />
        ))}
      </div>
      <Button
        variant="text_element"
        elemClassName={`${styles.cross} ${filterActivated ? styles.cross_active : styles.cross_disabled}`}
        startIcon={<ImCross className={styles.cross__icon} />}
        disabled={!filterActivated}
        onClick={clearFilter}
      >
        <p className={styles.cross__title}>{t('reset-filters')}</p>
      </Button>
    </section>
  );
};

export default memo(MoviesFilter);
