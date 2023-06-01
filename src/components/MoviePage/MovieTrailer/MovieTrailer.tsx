import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { FiBell } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import { RiFlag2Line } from 'react-icons/ri';

import Button from '../../Shared/Button/Button';

import styles from './MovieTrailer.module.scss';
import { MovieTrailerProps } from './MovieTrailer.types';

const MovieTrailer: FC<MovieTrailerProps> = ({ film }) => {
  const { t } = useTranslation('moviePage');
  return (
    <div className={styles.trailerContainer}>
      <div className={styles.trailerWrapper}>
        <iframe
          className={styles.trailer}
          src={film.trailer}
          allowFullScreen
          seamless
          title={film.name}
          referrerPolicy="no-referrer"
        />
        <div className={styles.ageRating}>
          <p>{film.ageRating}+</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="info" elemClassName={styles.button} arial-lable="Трейлер">
          <FiPlay />
          {t('trailer')}
        </Button>
        <Button variant="info" elemClassName={styles.button} arial-lable="Поделиться">
          <RiFlag2Line />
        </Button>
        {(film.type === 'tv-series' || !film.movieLength) && (
          <Button variant="info" elemClassName={styles.button} arial-lable="Сообщить о новых сериях">
            <FiBell />
          </Button>
        )}
        <Button variant="info" elemClassName={styles.button} arial-lable="Смотреть позже">
          <HiOutlineArrowUpTray />
        </Button>
      </div>
    </div>
  );
};

export default memo(MovieTrailer);
