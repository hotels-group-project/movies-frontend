import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useCallback } from 'react';
import { BiUser } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { SlBell } from 'react-icons/sl';

import { useAppSelector } from '../../hooks/redux';
import Button from '../Shared/Button/Button';

import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('header');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);

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
      <div className={styles.leftContainer}>
        <Image
          src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
          width={isTablet ? 66 : 55}
          height={isTablet ? 48 : 40}
          priority
          alt={t('alt')}
        />
        {isDesktop && <HeaderMenu translate={t} />}
      </div>
      <div className={styles.rightContainer}>
        <Button buttonClassName={styles.subscribe} titleClassName={styles.subscribeTitle} title={t('subscription')} />
        <Button
          buttonClassName={styles.changeLang}
          title={`${changeTo.toUpperCase()}`}
          onClick={() => onToggleLanguageClick(changeTo)}
        />
        {isDesktop && (
          <Link className={styles.search} href="/ivi_search">
            <RiSearchLine className={styles.searchIcon} />
            <span className={styles.searchText}>{t('search')}</span>
          </Link>
        )}
        {isTablet && (
          <>
            <Link className={styles.bell} href="https://www.ivi.ru/profile/pull_notifications">
              <SlBell className={styles.bellIcon} />
            </Link>
            <Link className={styles.user} href="https://www.ivi.ru/profile">
              <BiUser className={styles.userIcon} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
