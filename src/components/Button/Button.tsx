import { FC, memo } from 'react';

import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ title, titleClassName, buttonClassName, children }) => {
  return (
    <button className={`${styles.button} ${buttonClassName ? buttonClassName : ''}`}>
      {children}
      <span className={`${styles.title} ${titleClassName ? titleClassName : ''}`}>{title}</span>
    </button>
  );
};

export default memo(Button);
