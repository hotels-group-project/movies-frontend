import { FC, memo } from 'react';

import { ButtonAndLinkProps } from '../../../types/types';

import styles from './Button.module.scss';

const Button: FC<ButtonAndLinkProps> = ({ variant, className, onClick, startIcon, children, endIcon }) => {
  return (
    <button onClick={onClick} className={`${styles[`${variant}`]} ${className && className}`}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
