import { FC, memo } from 'react';

import styles from './ArrowButton.module.scss';

import { ArrowButtonProps } from './ArrowButton.types';

const ArrowButton: FC<ArrowButtonProps> = ({ buttonClassName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button}
      ${buttonClassName ? buttonClassName : ''}`}
    />
  );
};

export default memo(ArrowButton);
