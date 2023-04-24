import { FC } from 'react';

import { useAppSelector } from '../../../hooks/redux';

import styles from './DropdownMenu.module.scss';
import { DropdownMenuProps } from './DropdownMenu.types';

const DropdownMenu: FC<DropdownMenuProps> = ({ onMouseLeave }) => {
  const dropdownMenu = useAppSelector(state => state.dropdownMenu.dropdownMenuHoveredItem);

  if (!dropdownMenu) return null;

  return (
    <div className={`${styles.section} ${dropdownMenu ? styles.sectionActive : ''}`} onMouseLeave={onMouseLeave}>
      <div className={styles.content} onMouseLeave={onMouseLeave}>
        {dropdownMenu === 'movies' && <p>movies</p>}
        {dropdownMenu === 'serial-movies' && (
          <div>
            <div>serial-movies</div>
            <div>serial-movies</div>
            <div>serial-movies</div>
          </div>
        )}
        {dropdownMenu === 'cartoons' && <p>cartoons</p>}
        {dropdownMenu === 'tvplus' && <p>tvplus</p>}
        {dropdownMenu === 'bell' && <p>bell</p>}
        {dropdownMenu === 'user' && <p>user</p>}
      </div>
    </div>
  );
};

export default DropdownMenu;
