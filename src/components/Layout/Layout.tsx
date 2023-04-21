import { FC, useEffect, useCallback } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { setIsDesktop, setIsTablet } from '../../store/reducers/breakpointSlice';
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from '../../utils/constants';
import Header from '../Header/Header';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.types';

const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const handleResize = useCallback(() => {
    dispatch(setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT));
    dispatch(setIsTablet(window.innerWidth >= TABLET_BREAKPOINT));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
