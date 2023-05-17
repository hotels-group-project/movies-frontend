import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useState, useRef, useEffect } from 'react';
import { SlArrowDown } from 'react-icons/sl';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { setActiveFilters } from '../../../../store/reducers/activeFiltersSlice';
import Button from '../../../Shared/Button/Button';
import FilterPopup from '../FilterPopup/FilterPopup';

import styles from './FilterButton.module.scss';
import { FilterButtonProps } from './FilterButton.types';

const FilterButton: FC<FilterButtonProps> = ({ title }) => {
  const router = useRouter();
  const { t } = useTranslation('moviesPage');
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const activeFilters = useAppSelector(state => state.activeFilters[title]);
  const [filterPopupOpened, setFilterPopupOpened] = useState(false);

  useEffect(() => {
    let items = router.query[title];
    if (!items) items = [];
    if (!Array.isArray(items)) items = items.split('+');
    dispatch(setActiveFilters({ key: title, value: items }));
  }, [dispatch, router.query, title]);

  const closePopup = useCallback(() => {
    setFilterPopupOpened(false);
  }, []);

  const togglePopup = useCallback(() => {
    setFilterPopupOpened(!filterPopupOpened);
  }, [filterPopupOpened]);

  useOnClickOutside(ref, closePopup, filterPopupOpened);

  return (
    <div ref={ref} className={styles.wrapper}>
      <Button
        variant="sort_square"
        elemClassName={`${styles.filter} ${filterPopupOpened ? styles.filter_active : ''}`}
        key={title}
        endIcon={
          <SlArrowDown className={`${styles.filter__icon} ${filterPopupOpened ? styles.filter__icon_rotate : ''}`} />
        }
        onClick={togglePopup}
      >
        <div className={styles.filter__textGroup}>
          <p className={styles.filter__title}>{t(`movies-filters.${title}`)}</p>
          {activeFilters && (
            <p className={styles.filter__subtitle}>
              {activeFilters
                .slice(0, 5)
                .map((filter, idx, arr) =>
                  idx === arr.length - 1 ? `${t(`${title}.${filter}`)}` : `${t(`${title}.${filter}`)}, `,
                )}
            </p>
          )}
        </div>
      </Button>
      {filterPopupOpened && <FilterPopup title={title} />}
    </div>
  );
};

export default memo(FilterButton);
