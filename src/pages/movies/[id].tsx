import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import MoviePage from '../../components/MoviePage/MoviePage';
import { useAppSelector } from '../../hooks/redux';

import { useAppDispatch } from '../../hooks/redux';
import { setMovie } from '../../store/reducers/movieSlice';
import { getMovieById } from '../../utils/Api';

const Movie: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(state => state.movie);
  const film = movie.film;
  useEffect(() => {
    dispatch(setMovie(_props.movie));
  }, [_props.movie, dispatch]);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.locale === 'ru' ? film?.name : film?.alternativeName}</title>
      </Head>
      <MoviePage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params ?? {};
  try {
    const movie = await getMovieById(Number(id));
    if (movie.statusCode) {
      return { notFound: true };
    }

    return {
      props: {
        movie,
        ...(await serverSideTranslations(context.locale ?? 'ru', ['common', 'header', 'footer', 'moviePage'])),
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default Movie;
