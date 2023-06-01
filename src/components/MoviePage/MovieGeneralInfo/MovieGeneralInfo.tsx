import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useMemo } from 'react';
import { MdOutlineSubtitles } from 'react-icons/md';
import { RxSpeakerModerate } from 'react-icons/rx';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './MovieGeneralInfo.module.scss';
import { MovieGeneralInfoProps } from './MovieGeneralInfo.types';

const MovieGeneralInfo: FC<MovieGeneralInfoProps> = ({ film }) => {
  const { t } = useTranslation('moviePage');
  const router = useRouter();

  const countLength = (l: number): Array<number> | undefined => {
    if (l && l <= 60) {
      return [l];
    }
    if (l > 60) {
      const hour = Math.floor(l / 60);
      const minutes = l - hour * 60;
      return [hour, minutes];
    }
  };
  const time = useMemo(() => countLength(film.movieLength), [film.movieLength]);
  const timeLeng = useMemo(() => {
    if (time && time.length === 2) {
      const a = router.locale === 'ru' ? `${time[0]} ч. ${time[1]} мин.` : `${time[0]} h. ${time[1]} m.`;
      return a;
    }
    if (time && time.length === 1) {
      const b = router.locale === 'ru' ? `${time[0]} мин.` : `${time[0]} m.`;
      return b;
    }
  }, [time, router.locale]);

  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{router.locale === 'ru' ? film.name : film.alternativeName}</h2>
        <p className={styles.title}>
          ({t(`${film.type}`)} {film.year})
        </p>
      </div>
      <ul className={styles.subtitleContainer}>
        <li>
          <LinkComponent link="/movies" variant="text_element" elemClassName={styles.link}>
            {film.year}
          </LinkComponent>
        </li>
        <li>{timeLeng}</li>
        <li>{film.ageRating > 0 && `${film.ageRating}+`}</li>
      </ul>
      <ul className={styles.subtitleContainer}>
        <li>
          <LinkComponent
            link={`http://localhost:3000/movies?countries=${film.countries[0]}`}
            variant="text_element"
            elemClassName={styles.link}
          >
            {t(`countries.${film.countries[0]}`)}
          </LinkComponent>
        </li>
        {film.genres.slice(0, 3).map(i => (
          <li key={i}>
            <LinkComponent
              link={`http://localhost:3000/movies?genres=${i}`}
              variant="text_element"
              elemClassName={styles.link}
            >
              {t(`genres.${i}`)}
            </LinkComponent>
          </li>
        ))}
      </ul>
      <ul className={styles.subInfo}>
        <li>
          <div className={styles.quality}>FullHD</div>
        </li>
        <li>
          <RxSpeakerModerate />
          <p>{t('ru')}</p>
        </li>
        <li>
          <MdOutlineSubtitles />
          <p>{t('ru')}</p>
        </li>
      </ul>
    </>
  );
};

export default memo(MovieGeneralInfo);
