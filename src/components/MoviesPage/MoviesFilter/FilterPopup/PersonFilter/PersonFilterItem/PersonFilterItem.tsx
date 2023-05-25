import { FC, memo, useCallback, useMemo, useState } from 'react';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { IoMdRadioButtonOn } from 'react-icons/io';

import styles from './PersonFilterItem.module.scss';
import { PersonFilterItemProps } from './PersonFilterItem.types';

const PersonFilterItem: FC<PersonFilterItemProps> = ({ name, personState, onChange }) => {
  const [hovered, setHovered] = useState(false);

  const isChecked = useMemo(() => {
    return name === personState;
  }, [name, personState]);

  const onMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  return (
    <>
      <label
        htmlFor={name}
        className={`${styles.itemLabel} ${isChecked ? styles.itemLabel_active : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {name}
      </label>
      <input
        type="radio"
        id={name}
        name={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
        className={styles.itemInput}
      />
      {isChecked && <IoMdRadioButtonOn className={`${styles.itemIcon} ${styles.itemIcon_active}`} />}
      {!isChecked && hovered && <IoMdRadioButtonOff className={styles.itemIcon} />}
    </>
  );
};

export default memo(PersonFilterItem);
