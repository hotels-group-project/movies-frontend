import { FC, memo } from 'react';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ variant, buttonClassName, onClick, startIcon, children, endIcon }) => {
  return (
    <button onClick={onClick} className={`${styles[`${variant}`]} ${buttonClassName ? buttonClassName : ''}`}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
