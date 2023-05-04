import { useTranslation } from 'next-i18next';
import { FC } from 'react';

import styles from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation('not-found');

  return (
    <section className={styles.section}>
      <span className={styles.image} />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t('title')}</h1>
        <h2 className={styles.subtitle}>{t('subtitle')}</h2>
      </div>
    </section>
  );
};

export default NotFoundPage;
