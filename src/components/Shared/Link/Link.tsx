import Link from 'next/link';
import { FC, memo } from 'react';

import { ButtonAndLinkProps } from '../../../types/types';

import styles from './Link.module.scss';

const LinkComponent: FC<ButtonAndLinkProps> = ({ link, variant, className, onClick, startIcon, children, endIcon }) => {
  return (
    <Link href={link} onClick={onClick} className={`${variant && styles[`${variant}`]} ${className && className}`}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </Link>
  );
};

export default memo(LinkComponent);
