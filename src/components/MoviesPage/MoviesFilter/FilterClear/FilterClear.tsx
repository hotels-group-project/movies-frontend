import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback } from 'react';
import { ImCross } from 'react-icons/im';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilterActivated } from '../../../../store/reducers/filterActivatedSlice';
import Button from '../../../Shared/Button/Button';

import styles from './FilterClear.module.scss';

const FilterClear: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('moviesPage');
  const filterActivated = useAppSelector(store => store.filterActivated.filterActivated);

  const clearFilter = useCallback(() => {
    router.replace({ query: {} }, undefined, { shallow: true });
    dispatch(setFilterActivated(false));
  }, [dispatch, router]);

  return (
    <Button
      variant="text_element"
      elemClassName={`${styles.cross} ${filterActivated ? styles.cross_active : styles.cross_disabled}`}
      startIcon={<ImCross className={styles.cross__icon} />}
      disabled={!filterActivated}
      onClick={clearFilter}
    >
      <p className={styles.cross__title}>{t('reset-filters')}</p>
    </Button>
  );
};

export default memo(FilterClear);
