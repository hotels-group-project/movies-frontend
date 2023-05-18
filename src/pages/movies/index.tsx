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
import { setFilters } from '../../store/reducers/filtresSlice';
import { findMovies, getCountries, getGenres } from '../../utils/Api';
import { changePlusToUnicode, routerQueryToString } from '../../utils/helpers';

const Movies: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const routerQuery = router.query;
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilters({ type: 'genres', value: _props.genres }));
    dispatch(setFilters({ type: 'countries', value: _props.countries }));
  }, [_props.countries, _props.genres, dispatch]);

  useEffect(() => {
    if (!routerQuery.genres && !routerQuery.years && !routerQuery.countries) {
      dispatch(setFilterActivated(false));
      return;
    }

    const genresUrl = changePlusToUnicode(routerQueryToString(routerQuery.genres));
    const yearsUrl = changePlusToUnicode(routerQueryToString(routerQuery.years));
    const countriesUrl = changePlusToUnicode(routerQueryToString(routerQuery.countries));
    const pageUrl = routerQueryToString(routerQuery.page);

    findMovies(genresUrl, yearsUrl, countriesUrl, pageUrl)
      .then(res => {
        if (res.statusCode) throw Error(`${res.statusCode} ${res.message}`);
        dispatch(setFilteredMovies(res));
      })
      .catch(err => console.log(err));
    dispatch(setFilterActivated(true));
  }, [dispatch, router, routerQuery]);

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
  try {
    const genres = await getGenres();
    const countries = await getCountries();

    if (!genres || !countries) {
      return { notFound: true };
    }

    return {
      props: {
        genres,
        countries,
        ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer', 'moviesPage'])),
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default Movies;
