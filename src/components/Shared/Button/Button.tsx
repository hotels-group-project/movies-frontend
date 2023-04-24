import { FC, memo } from 'react';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ title, titleClassName, buttonClassName, onClick, children }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${buttonClassName ? buttonClassName : ''}`}>
      {children}
      <span className={`${styles.title} ${titleClassName ? titleClassName : ''}`}>{title}</span>
    </button>
  );
};

export default memo(Button);