import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useAppDispatch } from '../hooks/redux';
import { setGenres } from '../store/reducers/genresSlice';

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  dispatch(setGenres(_props.genres));

  return (
    <>
      <Head>
        <title>{t('head-title.main')}</title>
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const responseGenres = await fetch('http://localhost:5000/movies/genres');
  const genres = await responseGenres.json();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', [
        'common',
        'header',
        'footer',
        'description',
        'movieCardTooltips',
      ])),
      genres: genres,
    },
  };
};

export default Home;
