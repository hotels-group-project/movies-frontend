import { FC, memo } from 'react';

import styles from './Input.module.scss';

import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ placeholder, inputClassName, id, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        id={id}
        className={`${styles.input} ${inputClassName ? inputClassName : ''}`}
        placeholder=" "
      />
      <label htmlFor={id} className={styles.input__placeholder}>
        {placeholder}
      </label>
    </>
  );
};

export default memo(Input);
