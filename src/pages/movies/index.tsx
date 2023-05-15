import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { setFilteredMovies } from '../../store/reducers/filteredMoviesSlice';
import { setGenres } from '../../store/reducers/genresSlice';
import { findMovies, getGenres } from '../../utils/Api';

import MoviesPage from '../../components/MoviesPage/MoviesPage';

const Movies: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const routerQuery = useRouter().query;
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getGenres()
      .then(res => {
        dispatch(setGenres(res));
      })
      .catch(err => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    findMovies(routerQuery.genres, routerQuery.years, routerQuery.countries)
      .then(res => dispatch(setFilteredMovies(res)))
      .catch(err => console.log(err));
  }, [dispatch, routerQuery]);

  return (
    <>
      <Head>
        <title>{t('head-title.movies')}</title>
      </Head>
      <MoviesPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer', 'description'])),
  },
});

export default Movies;
