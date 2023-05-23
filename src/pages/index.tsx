import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import Main from '../components/MainPage/MainPage';
import { useAppDispatch } from '../hooks/redux';
import { setMovies } from '../store/reducers/moviesSlice';
import { getMovies } from '../utils/Api';

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setMovies(_props.movies));
  }, [_props.movies, dispatch]);

  return (
    <>
      <Head>
        <title>{t('head-title.main')}</title>
      </Head>
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const movies = await getMovies();

    return {
      props: {
        movies,
        ...(await serverSideTranslations(locale ?? 'ru', [
          'common',
          'header',
          'footer',
          'description',
          'movieCardTooltips',
          'main',
          'posterCard',
          'movieSlider',
        ])),
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default Home;
