import { FC, memo } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ variant, elemClassName, onClick, startIcon, children, endIcon, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[`${variant}`]} ${elemClassName ? elemClassName : ''}`}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default memo(Button);
