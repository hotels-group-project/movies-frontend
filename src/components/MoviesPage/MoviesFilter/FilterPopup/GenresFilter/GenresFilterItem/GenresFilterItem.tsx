import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useState } from 'react';
import { HiCheck } from 'react-icons/hi';

import { useAppSelector } from '../../../../../../hooks/redux';

import styles from './GenresFilterItem.module.scss';
import { GenresFilterItemProps } from './GenresFilterItem.types';

const GenresFilterItem: FC<GenresFilterItemProps> = ({ item, type, onFilterClick }) => {
  const { t } = useTranslation('moviesPage');
  const activeFilters = useAppSelector(state => state.activeFilters[type]);
  const [hovered, setHovered] = useState(false);
  const checked = activeFilters.includes(item);

  const toggleChecked = useCallback(() => {
    onFilterClick(item);
  }, [item, onFilterClick]);

  const onMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <>
      <label
        className={`${styles.itemLabel} ${checked ? styles.itemLabel_active : ''}`}
        htmlFor={item}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {t(`${type}.${item}`)}
      </label>
      <input className={styles.itemInput} type="checkbox" id={item} onChange={toggleChecked} checked={checked} />
      {(checked || hovered) && <HiCheck className={`${styles.icon} ${checked ? styles.icon_active : ''}`} />}
    </>
  );
};

export default memo(GenresFilterItem);
