import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';

import styles from './YearsFilterItem.module.scss';
import { YearsFilterItemProps } from './YearsFilterItem.types';

const YearsFilterItem: FC<YearsFilterItemProps> = ({ year, yearState, onChange, type }) => {
  const { t } = useTranslation('moviesPage');
  const [hovered, setHovered] = useState(false);

  const isChecked = useMemo(() => {
    return year === yearState;
  }, [year, yearState]);

  const onMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <>
      <label
        htmlFor={year}
        className={`${styles.itemLabel} ${isChecked ? styles.itemLabel_active : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {t(`${type}.${year}`)}
      </label>
      <input
        type="radio"
        id={year}
        name={year}
        value={year}
        checked={isChecked}
        onChange={onChange}
        className={styles.itemInput}
      />
      {isChecked && <IoMdRadioButtonOn className={`${styles.itemIcon} ${styles.itemIcon_active}`} />}
      {!isChecked && hovered && <IoMdRadioButtonOff className={styles.itemIcon} />}
    </>
  );
};

export default memo(YearsFilterItem);
