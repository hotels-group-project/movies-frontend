import Link from 'next/link';
import { FC, memo } from 'react';

import { MAIN_MENU } from '../../../utils/MainMenu.constants';

import styles from './HeaderMenu.module.scss';
import { HeaderMenuProps } from './HeaderMenu.types';

const HeaderMenu: FC<HeaderMenuProps> = ({ translate }) => {
  return (
    <ul className={styles.list}>
      {MAIN_MENU.map(({ id, title, link }) => (
        <li className={styles.listItem} key={id}>
          <Link className={styles.link} href={link}>
            {translate(title)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(HeaderMenu);
