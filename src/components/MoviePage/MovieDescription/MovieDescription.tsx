import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useState, useCallback } from 'react';

import Button from '../../Shared/Button/Button';

import { QUALITY } from './MovieDescription.constants';
import styles from './MovieDescription.module.scss';
import { MovieDescriptionProps } from './MovieDescription.types';

const MovieDescription: FC<MovieDescriptionProps> = ({ film }) => {
  const { t } = useTranslation('moviePage');
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  return (
    <>
      <div className={styles.descriptionContainer}>
        <div className={`${styles.description} ${!isExpanded && styles.collapse}`}>
          <p>{film.slogan}</p>
          <p>{film.shortDescription}</p>
          <p>{film.description}</p>
          <p>
            {`${t('invite')} «${router.locale === 'ru' ? film.name : film.alternativeName}» ${t('in-online-cinema')}`}
          </p>
          <div className={styles.moreInfo}>
            <p>{t('language')}</p>
            <p className={styles.text}>{t('rus')}</p>
            <p>{t('subtitles')}</p>
            <p className={styles.text}>{t('rus')}</p>
            <p>
              {t('image-and-sound')}
              <span>{t('quality')}</span>
            </p>
            <div className={styles.qualityContainer}>
              {QUALITY.map(i => (
                <div className={styles.quality} key={i}>
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Button variant="text_element" onClick={toggleExpand} elemClassName={styles.button}>
          {isExpanded ? t('collapse') : t('details')}
        </Button>
      </div>
    </>
  );
};

export default memo(MovieDescription);
