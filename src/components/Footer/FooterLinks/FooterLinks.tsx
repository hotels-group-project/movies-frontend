import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { MdMonitor } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import { FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from '../FooterMenu.constants';

import styles from './FooterLinks.module.scss';

const FooterLinks: FC = () => {
  const { t } = useTranslation('footer');

  return (
    <>
      <div className={styles.links}>
        <ul className={styles.linkList}>
          {FOOTER_LINKS.map(({ id, title, link, text, icon, src }) => (
            <li key={id}>
              <LinkComponent link={link} variant="dark_middle">
                {src ? <Image src={src} width={16} height={16} priority alt={title || link} /> : ''}
                {icon === 'monitor' && <MdMonitor />}
                {icon === 'devices' && <MdDevicesOther />}
                <div>
                  <p>{t(`${text}`)}</p>
                  <h3>{t(`${title}`)}</h3>
                </div>
              </LinkComponent>
            </li>
          ))}
        </ul>
        <ul className={styles.linkList}>
          {FOOTER_SOCIAL_LINKS.map(({ id, title, link, src }) => (
            <li key={id}>
              <LinkComponent link={link} variant="dark_round">
                <Image src={src} width={16} height={16} priority alt={title} />
              </LinkComponent>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(FooterLinks);
