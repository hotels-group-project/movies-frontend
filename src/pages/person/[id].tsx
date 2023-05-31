import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

import PersonPage from '../../components/PersonPage/PersonPage';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import { setPerson } from '../../store/reducers/personSlice';
import { getPerson } from '../../utils/Api';

const Person: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPerson({ type: 'person', value: _props.person }));
  }, [_props.person, dispatch]);

  const personInfo = useAppSelector(state => state.person).person;

  return (
    <>
      <Head>
        <title>{`${personInfo.profession.slice(0, -1)}: ${personInfo.name}`}</title>
      </Head>
      <PersonPage person={personInfo} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params ?? {};
  try {
    const person = await getPerson(Number(id));
    if (person.statusCode) {
      return { notFound: true };
    }

    return {
      props: {
        person,
        ...(await serverSideTranslations(context.locale ?? 'ru', ['common', 'header', 'footer', 'personPage'])),
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};
export default Person;
