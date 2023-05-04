import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Head>
        <title>{t('head-title.main')}</title>
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common', 'header', 'footer', 'description'])),
  },
});

export default Home;
