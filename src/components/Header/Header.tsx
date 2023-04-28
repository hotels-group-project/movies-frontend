import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useCallback } from 'react';
import { BiUser } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { SlBell } from 'react-icons/sl';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setDropdownMenuHoveredItem } from '../../store/reducers/dropdownMenuSlice';
import Button from '../Shared/Button/Button';

import DropdownMenu from './DropdownMenu/DropdownMenu';
import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { HeaderMenuTypes } from './HeaderMenu/HeaderMenu.types';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { t } = useTranslation('header');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);

  const onMouseEnter = useCallback(
    (title: HeaderMenuTypes['title']) => {
      if (title === 'my-ivi' || title === 'new') {
        return dispatch(setDropdownMenuHoveredItem(''));
      }
      dispatch(setDropdownMenuHoveredItem(title));
    },
    [dispatch],
  );

  const onMouseLeave = useCallback(() => {
    dispatch(setDropdownMenuHoveredItem(''));
  }, [dispatch]);

  const onToggleLanguageClick = useCallback(
    (newLocale: string) => {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: newLocale });
    },
    [router],
  );

  const changeTo = router.locale === 'en' ? 'ru' : 'en';

  return (
    <header className={styles.section}>
      {isDesktop && <DropdownMenu onMouseLeave={onMouseLeave} />}
      <div className={styles.leftContainer} onMouseEnter={onMouseLeave}>
        <Link href="/">
          <Image
            src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
            width={isTablet ? 66 : 55}
            height={isTablet ? 48 : 40}
            priority
            alt={t('alt')}
          />
        </Link>
        {isDesktop && <HeaderMenu translate={t} onMouseEnter={onMouseEnter} />}
      </div>
      <div className={styles.rightContainer} onMouseEnter={onMouseLeave}>
        <Button elemClassName={styles.subscribe} variant="default">
          <span className={styles.subscribeTitle}>{t('subscription')}</span>
        </Button>
        <Button
          variant="default"
          elemClassName={styles.changeLang}
          onClick={() => onToggleLanguageClick(changeTo)}
        >{`${changeTo.toUpperCase()}`}</Button>
        {isDesktop && (
          <Link onMouseEnter={onMouseLeave} className={styles.search} href="/ivi_search">
            <RiSearchLine className={styles.searchIcon} />
            <span className={styles.searchText}>{t('search')}</span>
          </Link>
        )}
        {isTablet && (
          <>
            <Link
              onMouseEnter={() => onMouseEnter('bell')}
              className={styles.bell}
              href="https://www.ivi.ru/profile/pull_notifications"
            >
              <SlBell className={styles.bellIcon} />
            </Link>
            <div onMouseEnter={() => onMouseEnter('user')} className={styles.userWrapper}>
              <Link className={styles.user} href="https://www.ivi.ru/profile">
                <BiUser className={styles.userIcon} />
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
