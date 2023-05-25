import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { setActiveFilters } from '../../../../../store/reducers/activeFiltersSlice';

import styles from './ActivatedFiltersList.module.scss';
import { ActivatedFiltersListProps } from './ActivatedFiltersList.types';

const ActivatedFiltersList: FC<ActivatedFiltersListProps> = ({ title }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('moviesPage');
  const activeFilters = useAppSelector(state => state.activeFilters[title]);

  useEffect(() => {
    let items = router.query[title];
    if (!items) items = [];
    if (!Array.isArray(items)) items = items.split('+');
    dispatch(setActiveFilters({ key: title, value: items }));
  }, [dispatch, router.query, title]);

  return (
    <p className={styles.subtitle}>
      {activeFilters.slice(0, 5).map((filter, idx, arr) => {
        if (title === 'actor' || title === 'producer') return filter;
        return idx === arr.length - 1 ? `${t(`${title}.${filter}`)}` : `${t(`${title}.${filter}`)}, `;
      })}
    </p>
  );
};

export default memo(ActivatedFiltersList);
