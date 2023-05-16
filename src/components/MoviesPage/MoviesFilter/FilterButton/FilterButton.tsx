import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useState, useRef } from 'react';
import { SlArrowDown } from 'react-icons/sl';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import Button from '../../../Shared/Button/Button';
import FilterPopup from '../FilterPopup/FilterPopup';

import styles from './FilterButton.module.scss';
import { FilterButtonProps } from './FilterButton.types';

const FilterButton: FC<FilterButtonProps> = ({ title, children }) => {
  const { t } = useTranslation('moviesPage');
  const ref = useRef<HTMLButtonElement>(null);
  const [filterPopupOpened, setFilterPopupOpened] = useState(false);

  const closePopup = useCallback(() => {
    setFilterPopupOpened(false);
  }, []);

  const openPopup = useCallback(() => {
    setFilterPopupOpened(true);
  }, []);

  useOnClickOutside(ref, closePopup);

  return (
    <>
      <Button
        ref={ref}
        variant="sort_square"
        elemClassName={`${styles.filter} ${filterPopupOpened ? styles.filter_active : ''}`}
        key={title}
        endIcon={
          <SlArrowDown className={`${styles.filter__icon} ${filterPopupOpened ? styles.filter__icon_rotate : ''}`} />
        }
        onClick={openPopup}
      >
        <p className={styles.filter__title}>{t(`movies-filters.${title}`)}</p>
        {filterPopupOpened && <FilterPopup>{children}</FilterPopup>}
      </Button>
    </>
  );
};

export default memo(FilterButton);
