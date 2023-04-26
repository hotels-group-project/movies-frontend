import { useTranslation } from 'next-i18next';
import { FC, memo, useState } from 'react';

import { PLUS_LIST } from './Manifest.constants';
import styles from './Manifest.module.scss';

const Manifest: FC = () => {
  const { t } = useTranslation('manifest');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <section className={styles.manifest}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={`${styles.textContainer} ${!isExpanded && styles.collapse}`}>
          <p>{t('text-1')}</p>
          <p>{t('text-2')}</p>
          <p>{t('list-title')}</p>
          <ul className={styles.list}>
            {PLUS_LIST.map(({ id, title }) => (
              <li key={id}>{t(`${title}`)}</li>
            ))}
          </ul>
          <p>{t('total')}</p>
        </div>
        <button className={styles.button} type="button" aria-label="expand" onClick={handleExpand}>
          {isExpanded ? t('collapse') : t('expand')}
        </button>
      </section>
    </>
  );
};

export default memo(Manifest);
