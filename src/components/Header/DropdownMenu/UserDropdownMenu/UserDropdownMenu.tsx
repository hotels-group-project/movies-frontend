import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, ReactNode } from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { SlDiamond } from 'react-icons/sl';
import { TbDeviceTvOld } from 'react-icons/tb';
import { TfiMedall } from 'react-icons/tfi';

import Button from '../../../Shared/Button/Button';
import LinkComponent from '../../../Shared/LinkComponent/LinkComponent';

import { linksValue } from './UserDropdownMenu.constants';
import styles from './UserDropdownMenu.module.scss';

const UserDropdownMenu: FC = () => {
  const { t } = useTranslation('header');

  const getIconByTitle = useCallback((title: string): ReactNode => {
    if (title === 'purchases') return <MdOutlineVideoLibrary className={styles.link__icon} />;
    if (title === 'watch-later') return <BsBookmark className={styles.link__icon} />;
    if (title === 'history') return <MdHistory className={styles.link__icon} />;
    if (title === 'subscriptions') return <SlDiamond className={styles.link__icon} />;
    if (title === 'certificate') return <TfiMedall className={styles.link__icon} />;
    if (title === 'enter') return <TbDeviceTvOld className={styles.link__icon} />;
    if (title === 'payment') return <AiOutlineCreditCard className={styles.link__icon} />;
    if (title === 'friends') return <BiShareAlt className={styles.link__icon} />;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        {linksValue.map(({ id, title, link }) => (
          <div key={id}>
            {title === 'certificate' || title === 'enter' ? (
              <Button key={id} startIcon={getIconByTitle(title)} elemClassName={styles.link}>
                <p className={styles.link__text}>{t(title)}</p>
              </Button>
            ) : title === 'subscriptions' ? (
              <LinkComponent
                key={id}
                link={link}
                startIcon={getIconByTitle(title)}
                elemClassName={`${styles.link} ${styles.link_circle}`}
              >
                <div className={styles.subscriptions}>
                  <p className={styles.link__text}>{t(title)}</p>
                  <p className={styles.link__text_small}>{t('plug')}</p>
                </div>
              </LinkComponent>
            ) : (
              <LinkComponent key={id} link={link} startIcon={getIconByTitle(title)} elemClassName={styles.link}>
                <p className={styles.link__text}>{t(title)}</p>
              </LinkComponent>
            )}
          </div>
        ))}
      </div>
      <div className={styles.rightSection}>
        <Button variant="default" elemClassName={styles.button}>
          <p>{t('enter-and-registry')}</p>
        </Button>
        <div className={styles.settings}>
          <LinkComponent link="https://www.ivi.ru/profile/settings">
            <p className={styles.settings__link}>{t('settings')}</p>
          </LinkComponent>
          <LinkComponent link="https://ask.ivi.ru/">
            <p className={styles.settings__link}>{t('help')}</p>
          </LinkComponent>
        </div>
      </div>
    </div>
  );
};

export default memo(UserDropdownMenu);
