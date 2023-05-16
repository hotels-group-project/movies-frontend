import { ForwardRefExoticComponent, memo, forwardRef, RefAttributes } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: ForwardRefExoticComponent<Omit<ButtonProps, 'ref'> & RefAttributes<HTMLButtonElement>> = forwardRef(
  ({ variant, elemClassName, onClick, startIcon, children, endIcon, disabled }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`${styles[`${variant}`]} ${elemClassName ? elemClassName : ''}`}
        disabled={disabled}
      >
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  },
);

export default memo(Button);
