import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import MoviesPage from '../../components/MoviesPage/MoviesPage';
import { useAppDispatch } from '../../hooks/redux';
import { setFilterActivated } from '../../store/reducers/filterActivatedSlice';
import { setFilteredMovies } from '../../store/reducers/filteredMoviesSlice';
import { setGenres } from '../../store/reducers/genresSlice';
import { findMovies, getGenres } from '../../utils/Api';
import { routerQueryToString } from '../../utils/helpers';

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
    if (!routerQuery.genres && !routerQuery.years && !routerQuery.countries) {
      dispatch(setFilterActivated(false));
      return;
    }

    const genresUrl = routerQueryToString(routerQuery.genres);
    const yearsUrl = routerQueryToString(routerQuery.years);
    const countriesUrl = routerQueryToString(routerQuery.countries);

    findMovies(genresUrl, yearsUrl, countriesUrl)
      .then(res => dispatch(setFilteredMovies(res)))
      .catch(err => console.log(err));
    dispatch(setFilterActivated(true));
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer', 'moviesPage'])),
    },
  };
};

export default Movies;
