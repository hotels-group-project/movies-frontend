import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const NotFound: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Head>
        <title>{t('head-title.not-found')}</title>
      </Head>
      <NotFoundPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer', 'not-found'])),
  },
});

export default NotFound;
