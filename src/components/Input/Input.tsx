import { FC, memo } from 'react';

import styles from './Input.module.scss';

import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ placeholder, inputClassName }) => {
  return (
    <input className={`${styles.input} ${inputClassName ? inputClassName : ''}`} placeholder={placeholder}/>
  );
};

export default memo(Input);