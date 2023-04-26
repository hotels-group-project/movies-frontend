import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import LinkButton from '../Shared/LinkButton/LinkButton';

import styles from './Footer.module.scss';
import FooterMenu from './FooterMenu/FooterMenu';

import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from './FooterMenu.constants';

const Footer: FC = () => {
  const { t } = useTranslation('footer');
  return (
    <>
      <footer className={styles.footer}>
        <FooterMenu />
        <div className={styles.links}>
          <ul className={styles.storeLinks}>
            {FOOTER_LINKS.map(({ id, title, link, text, icon, src }) => (
              <li key={id}>
                <LinkButton
                  link={link}
                  buttonStyle="middle"
                  title={t(`${title}`) || undefined}
                  text={t(`${text}`) || undefined}
                  src={src}
                  icon={icon}
                />
              </li>
            ))}
          </ul>
          <ul className={styles.storeLinks}>
            {FOOTER_SOCIAL_LINKS.map(({ id, title, link, src }) => (
              <li key={id}>
                <LinkButton link={link} buttonStyle="round" alt={title} src={src} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copyright}>
          <p className={styles.text}>© 2023 ООО «Иви.ру»</p>
          <p className={styles.text}>HBO ® and related service marks are the property of Home Box Office, Inc</p>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
