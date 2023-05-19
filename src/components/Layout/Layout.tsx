import dynamic from 'next/dynamic';
import { FC, useEffect, useCallback } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { setIsDesktop, setIsTablet } from '../../store/reducers/breakpointSlice';
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from '../../utils/constants';
const Footer = dynamic(() => import('../Footer/Footer'), { ssr: true });
const Header = dynamic(() => import('../Header/Header'), { ssr: true });

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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
