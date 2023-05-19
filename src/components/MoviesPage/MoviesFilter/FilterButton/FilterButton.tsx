import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useState, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';

import { useAppSelector } from '../../../../hooks/redux';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import Button from '../../../Shared/Button/Button';
import FilterPopup from '../FilterPopup/FilterPopup';

import ActivatedFiltersList from './ActivatedFiltersList/ActivatedFiltersList';
import styles from './FilterButton.module.scss';
import { FilterButtonProps } from './FilterButton.types';

const FilterButton: FC<FilterButtonProps> = ({ title }) => {
  const { t } = useTranslation('moviesPage');
  const ref = useRef<HTMLDivElement>(null);
  const activeFilters = useAppSelector(state => state.activeFilters[title]);
  const [filterPopupOpened, setFilterPopupOpened] = useState(false);

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
          {activeFilters && <ActivatedFiltersList title={title} />}
        </div>
      </Button>
      {filterPopupOpened && <FilterPopup title={title} />}
    </div>
  );
};

export default memo(FilterButton);
