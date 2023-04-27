import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { TbBellRinging } from 'react-icons/tb';

import styles from './NotifyDropdownMenu.module.scss';

const NotifyDropdownMenu: FC = () => {
  const { t } = useTranslation('header');

  return (
    <div className={styles.container}>
      <TbBellRinging className={styles.icon} />
      <p>{t('notify-menu-text')}</p>
    </div>
  );
};

export default NotifyDropdownMenu;
