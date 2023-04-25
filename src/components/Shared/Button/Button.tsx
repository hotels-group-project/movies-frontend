import { FC, memo } from 'react';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ variant, buttonClassName, onClick, startIcon, children, endIcon }) => {
  return (
    <button onClick={onClick} className={`${styles[`${variant}`]} ${buttonClassName ? buttonClassName : ''}`}>
      {startIcon && <span className="icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="icon">{endIcon}</span>}
    </button>
  );
};

export default memo(Button);
