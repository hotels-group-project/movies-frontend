import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import { PersonForPageProps } from '../../types/types';
import { wordEndingChange } from '../../utils/helpers';

import LinkComponent from '../Shared/LinkComponent/LinkComponent';

import styles from './PersonPage.module.scss';

const PersonPage: FC<PersonForPageProps> = ({ person }) => {
  const { t } = useTranslation('personPage');
  const { name, enName, photo, profession, description, enProfession, films } = person;
  const filmsCount = films.length;
  const filmsUnit = wordEndingChange(filmsCount, [
    `${t(`movies-count.first-form`)}`,
    `${t(`movies-count.second-form`)}`,
    `${t(`movies-count.third-form`)}`,
  ]);
  return (
    <main className={styles.main}>
      <section className={styles.person}>
        <Image src={photo} alt="Фото актера" width={120} height={120} className={styles.personImg} />
        <h1 className={styles.personMainTitle}>{name}</h1>
        {enName ? <h4 className={styles.personForeignTitle}>{enName}</h4> : ''}
        {description ? <p>{description}</p> : ''}

        <LinkComponent variant="text_reverse" link="#filmography" elemClassName={styles.personFilmCount_white}>
          {filmsCount} {filmsUnit}
        </LinkComponent>
        <div className={styles.personContainer}>
          <h2 id="filmography" className={styles.personFilmographyTitle}>
            {t(`filmography`)}
          </h2>
          <span className={styles.personFilmCount}>
            {filmsCount} {filmsUnit}
          </span>
        </div>
        <ul className={styles.personFilmList}>
          {films
            ? films.map(film => {
                return (
                  <li key={film.film_id} className={styles.personFilmItem}>
                    <Image
                      src={film.poster}
                      alt="Постер фильма"
                      width={75}
                      height={115}
                      className={styles.personFilmsPoster}
                    />
                    <div className={styles.personFilmContainer}>
                      <div className={styles.personFilmInfo}>
                        <p className={styles.personFilmTitle}>{film.name}</p>
                        <p className={styles.personFilmTitle}>{film.year}</p>
                        <p className={styles.personFilmRating}>
                          {t(`rating-title`)} {film.kprating}
                        </p>
                        <p className={styles.personFilmRating}>
                          {profession.slice(0, -1)}/{enProfession}
                        </p>
                      </div>
                      <LinkComponent variant="dark_big" link={`/movies/${film.film_id}`}>
                        <h3>{t(`button-title`)}</h3>
                      </LinkComponent>
                    </div>
                  </li>
                );
              })
            : ''}
        </ul>
      </section>
    </main>
  );
};

export default memo(PersonPage);
