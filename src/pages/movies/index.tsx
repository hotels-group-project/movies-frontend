import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import MoviesPage from '../../components/MoviesPage/MoviesPage';
import { useAppDispatch } from '../../hooks/redux';
import { setFilters } from '../../store/reducers/filtresSlice';
import { getCountries, getGenres } from '../../utils/Api';

const Movies: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilters({ type: 'genres', value: _props.genres }));
    dispatch(setFilters({ type: 'countries', value: _props.countries }));
  }, [_props.countries, _props.genres, dispatch]);

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

    if (genres.statusCode || countries.statusCode) {
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
