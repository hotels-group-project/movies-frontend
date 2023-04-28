import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { BsHouse } from 'react-icons/bs';
import { BsFolderSymlink } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';

import { useAppSelector } from '../../hooks/redux';
import Button from '../Shared/Button/Button';
import LinkComponent from '../Shared/LinkComponent/LinkComponent';

import styles from './Footer.module.scss';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterMenu from './FooterMenu/FooterMenu';

const Footer: FC = () => {
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const { t } = useTranslation('footer');
  return (
    <>
      <footer className={styles.footer}>
        {isDesktop ? (
          <>
            <FooterMenu />
            <FooterLinks />
            <div className={styles.copyright}>
              <p className={styles.text}>© 2023 ООО «Иви.ру»</p>
              <p className={styles.text}>HBO ® and related service marks are the property of Home Box Office, Inc</p>
            </div>
          </>
        ) : (
          <>
            <p className={styles.tabletText}>
              HBO ® and related service marks are the property of Home Box Office, Inc
            </p>
            <div className={styles.tablet}>
              <LinkComponent link="/" elemClassName="tabletLink" variant="footer_tablet">
                <BsHouse className={styles.tabletIcon} />
                <p>{t(`my-ivi`)}</p>
              </LinkComponent>
              <LinkComponent link="/movies" elemClassName="tabletLink" variant="footer_tablet">
                <BsFolderSymlink className={styles.tabletIcon} />
                <p>{t(`catalog`)}</p>
              </LinkComponent>
              <Button variant="footer_tablet">
                <BsSearch className={styles.tabletIcon} />
                <p>{t(`search`)}</p>
              </Button>
              <LinkComponent link="https://www.ivi.ru/tvplus" elemClassName="tabletLink" variant="footer_tablet">
                <MdMonitor className={styles.tabletIcon} />
                <p>{t(`tv`)}</p>
              </LinkComponent>
              <Button variant="footer_tablet">
                <FaEllipsisH className={styles.tabletIcon} />
                <p>{t(`more`)}</p>
              </Button>
            </div>
          </>
        )}
      </footer>
    </>
  );
};

export default memo(Footer);
