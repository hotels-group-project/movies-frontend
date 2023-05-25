import { FC, memo } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
  variant,
  type = 'button',
  elemClassName,
  onClick,
  startIcon,
  children,
  endIcon,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[`${variant}`]} ${elemClassName ? elemClassName : ''}`}
      disabled={disabled}
      type={type}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default memo(Button);
