import { FC, memo } from 'react';

import MovieDescription from '../MovieDescription/MovieDescription';
import MovieGeneralInfo from '../MovieGeneralInfo/MovieGeneralInfo';
import MoviePersons from '../MoviePersons/MoviePersons';

import styles from './MovieInfo.module.scss';
import { MovieInfoProps } from './MovieInfo.types';

const MovieInfo: FC<MovieInfoProps> = ({ film }) => {
  return (
    <>
      <div className={styles.info}>
        <MovieGeneralInfo film={film} />
        <MoviePersons film={film} />
        <MovieDescription film={film} />
      </div>
    </>
  );
};

export default memo(MovieInfo);
