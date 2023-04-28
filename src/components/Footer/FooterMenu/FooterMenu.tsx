import { useTranslation } from 'next-i18next';
import { FC, memo, useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { CiBullhorn } from 'react-icons/ci';

import { MAIN_MENU } from '../../../utils/MainMenu.constants';
import Button from '../../Shared/Button/Button';
import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import { EXTRA_MAIN_MENU, ABOUT_US_MENU } from '../FooterMenu.constants';

import styles from './FooterMenu.module.scss';

const FooterMenu: FC = () => {
  const { t } = useTranslation(['footer', 'header']);
  const [isPhoneVisible, setIsPhoneVisible] = useState<boolean>(false);

  function handlePhone() {
    setIsPhoneVisible(!isPhoneVisible);
  }

  return (
    <>
      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>{t(`footer:about-us`)}</h2>
          <ul className={styles.listItem}>
            {ABOUT_US_MENU.map(({ id, title, link }) => (
              <li key={id}>
                <LinkComponent variant="text_element" link={link}>
                  <p>{t(`footer:${title}`)}</p>
                </LinkComponent>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.title}>{t(`footer:sections`)}</h2>
          <ul className={styles.listItem}>
            {MAIN_MENU.map(({ id, title, link }) => (
              <li key={id}>
                <LinkComponent variant="text_element" link={link}>
                  <p>{t(`header:${title}`)}</p>
                </LinkComponent>
              </li>
            ))}
            {EXTRA_MAIN_MENU.map(({ id, title, link, style }) => (
              <li key={id}>
                <LinkComponent variant={style === 'special-link' ? 'text_special' : 'text_element'} link={link}>
                  <p>{t(`footer:${title}`)}</p>
                </LinkComponent>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.support}>
          <h2 className={styles.title}>{t(`footer:support`)}</h2>
          <div className={styles.supportText}>
            <p className={styles.text}>{t(`footer:support-text`)}</p>
            <p className={styles.text}>{t(`footer:support-time`)}</p>
          </div>
          <LinkComponent link="https://www.ivi.tv/profile" variant="dark_big">
            <h3 className={styles.title}>{t(`footer:write-in-chat`)}</h3>
          </LinkComponent>
          <div className={styles.contacts}>
            <LinkComponent link="mailto:someone@yoursite.com" variant="dark_small">
              <BsEnvelope className={styles.icon} />
            </LinkComponent>
            <Button variant="dark_small" onClick={handlePhone}>
              <BsTelephone className={styles.icon} />
            </Button>
            {isPhoneVisible && (
              <LinkComponent link="tel:73512779161" variant="dark_large">
                <h3>+7 351 277-91-61</h3>
              </LinkComponent>
            )}
          </div>
          <LinkComponent
            variant="text_reverse"
            link="https://ask.ivi.ru/?_gl=1*8i7o46*_ga*MjA5ODU3Nzk5MC4xNjgxNzE4NDYy*_ga_GETQ4387MJ*MTY4MTg5MjEzNi4zLjEuMTY4MTg5OTI0OC41Ny4wLjA."
          >
            ask.ivi.ru
          </LinkComponent>
          <p className={styles.text}>{t(`footer:answers`)}</p>
        </div>
        <LinkComponent link="https://www.ivi.ru/subscribe?redirect_url=%2Fcollections%2Fserialyi-amediateka">
          <div className={styles.advertisment}>
            <div className={styles.advertismentIcon}>
              <CiBullhorn className={styles.horn} />
            </div>
            <p className={styles.text}>{t(`footer:without-ads`)}</p>
          </div>
        </LinkComponent>
      </div>
    </>
  );
};

export default memo(FooterMenu);
