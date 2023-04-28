import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useAppSelector } from '../../../hooks/redux';

import {
  ALTERNATIVE_FILTERS_CARTOONS,
  ALTERNATIVE_FILTERS_MOVIES,
  ALTERNATIVE_FILTERS_SERIALS,
  CARTOONS_ANIMATION_BLOCK,
  COUNTRIES,
  GENRES,
  MOVIES_ANIMATION_BLOCK,
  SERIALS_ANIMATION_BLOCK,
  YEARS,
} from './DropdownMenu.constants';
import styles from './DropdownMenu.module.scss';
import { DropdownMenuProps } from './DropdownMenu.types';
import MoviesDropdownMenu from './MoviesDropdownMenu/MoviesDropdownMenu';
import NotifyDropdownMenu from './NotifyDropdownMenu/NotifyDropdownMenu';

const DropdownMenu: FC<DropdownMenuProps> = ({ onMouseLeave }) => {
  const dropdownMenu = useAppSelector(state => state.dropdownMenu.dropdownMenuHoveredItem);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={!!dropdownMenu}
      nodeRef={nodeRef}
      timeout={250}
      classNames={{
        enterActive: styles['section_entering'],
        enterDone: styles['section_entered'],
        exitActive: styles['section_exiting'],
        exitDone: styles['section_exited'],
      }}
      unmountOnExit
    >
      <section ref={nodeRef} className={`${styles.section}`} onMouseLeave={onMouseLeave}>
        <div className={`${styles.content} ${dropdownMenu ? styles[`content_${dropdownMenu}`] : ''}`}>
          {dropdownMenu === 'movies' && (
            <MoviesDropdownMenu
              genres={GENRES}
              countries={COUNTRIES}
              years={YEARS}
              alternativeFilters={ALTERNATIVE_FILTERS_MOVIES}
              animatedImages={MOVIES_ANIMATION_BLOCK}
            />
          )}
          {dropdownMenu === 'serial-movies' && (
            <MoviesDropdownMenu
              genres={GENRES}
              countries={COUNTRIES}
              years={YEARS}
              alternativeFilters={ALTERNATIVE_FILTERS_SERIALS}
              animatedImages={SERIALS_ANIMATION_BLOCK}
            />
          )}
          {dropdownMenu === 'cartoons' && (
            <MoviesDropdownMenu
              genres={GENRES}
              countries={COUNTRIES}
              years={YEARS}
              alternativeFilters={ALTERNATIVE_FILTERS_CARTOONS}
              animatedImages={CARTOONS_ANIMATION_BLOCK}
            />
          )}
          {dropdownMenu === 'tvplus' && (
            <div>
              <p>123</p>
              <p>123</p>
              <p>123</p>
              <p>123</p>
            </div>
          )}
          {dropdownMenu === 'bell' && <NotifyDropdownMenu />}
          {dropdownMenu === 'user' && (
            <div>
              <p>123</p>
              <p>123</p>
            </div>
          )}
        </div>
      </section>
    </CSSTransition>
  );
};

export default DropdownMenu;
