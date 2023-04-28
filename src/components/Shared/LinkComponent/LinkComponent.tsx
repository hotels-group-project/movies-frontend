import Link from 'next/link';
import { FC, memo } from 'react';

import { ButtonAndLinkProps } from '../../../types/types';

import styles from './LinkComponent.module.scss';

const LinkComponent: FC<ButtonAndLinkProps> = ({ link, variant, elemClassName, startIcon, children, endIcon }) => {
  return (
    <Link href={link} className={`${variant && styles[`${variant}`]} ${elemClassName ? elemClassName : ''}`}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </Link>
  );
};

export default memo(LinkComponent);
