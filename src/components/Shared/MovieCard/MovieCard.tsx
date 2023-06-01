import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import MovieCardButtons from '../../Shared/MovieCard/MovieCardButtons/MovieCardButtons';

import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.types';

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { poster, name, ageRating, genres, year, movieLength, kprating, alternativeName } = movie;
  const router = useRouter();
  return (
    <>
      <div className={styles.card}>
        <LinkComponent link={`http://localhost:3000/movies/${movie.film_id}`}>
          <div className={styles.poster}>
            <Image
              src={poster}
              object-fit="contain"
              alt={name}
              layout="fill"
              priority
              className={styles.img}
              loading="eager"
            />
            <div className={styles.ageRating}>
              <p>{ageRating}+</p>
            </div>
            <div className={styles.overlay}>
              <MovieCardButtons />
              <div className={styles.info}>
                <p className={styles.rating}>
                  {String(kprating).slice(0, 1)},<span>{String(kprating).slice(2, 3)}</span>
                </p>
                <p className={styles.year}>
                  {year}, {genres.join(', ')}
                </p>
                {movieLength && <p>{movieLength} минут</p>}
              </div>
            </div>
          </div>
          <h3 className={styles.title}>{router.locale === 'ru' ? name : alternativeName}</h3>
        </LinkComponent>
      </div>
    </>
  );
};

export default memo(MovieCard);
