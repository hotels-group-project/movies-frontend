import { FC, memo } from 'react';

import { ButtonProps } from '../../../types/types';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ variant, elemClassName, onClick, startIcon, children, endIcon }) => {
  return (
    <button onClick={onClick} className={`${styles[`${variant}`]} ${elemClassName ? elemClassName : ''}`}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
