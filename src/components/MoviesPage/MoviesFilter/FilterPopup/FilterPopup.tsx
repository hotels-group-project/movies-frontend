import { FC, memo } from 'react';

import styles from './FilterPopup.module.scss';
import { FilterPopupProps } from './FilterPopup.types';

const FilterPopup: FC<FilterPopupProps> = ({ children, className }) => {
  return <div className={`${styles.popup} ${className ? className : ''}`}>{children}</div>;
};

export default memo(FilterPopup);
