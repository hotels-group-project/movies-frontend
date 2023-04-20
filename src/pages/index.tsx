import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC } from 'react';

const Home: FC = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common', 'header']);

  return (
    <>
      <Head>
        <title>{t('common:head-title')}</title>
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header'])),
  },
});

export default Home;
