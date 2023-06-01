import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import Button from '../../Shared/Button/Button';

import styles from './MovieRatingButton.module.scss';
import { MovieRatingButtonProps } from './MovieRatingButton.types';

const MovieRatingButton: FC<MovieRatingButtonProps> = ({ film }) => {
  const { t } = useTranslation('moviePage');
  return (
    <>
      <Button variant="info" elemClassName={styles.buttonContainer}>
        <div className={styles.rating}>{film.kprating}</div>
        <div className={styles.text}>
          <p>{t('rating')}</p>
          <p>
            {film.kpvotes} {t('ratings')}
          </p>
        </div>
        <div className={styles.estimate}>{t('estimate')}</div>
      </Button>
    </>
  );
};

export default memo(MovieRatingButton);
