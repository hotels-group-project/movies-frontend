import { useRouter } from 'next/router';
import { ChangeEvent, FC, memo, useCallback, useState } from 'react';

import { useAppSelector } from '../../../../../hooks/redux';

import styles from './PersonFilter.module.scss';
import { PersonFilterProps } from './PersonFilter.types';
import PersonFilterForm from './PersonFilterForm/PersonFilterForm';
import PersonFilterItem from './PersonFilterItem/PersonFilterItem';

const PersonFilter: FC<PersonFilterProps> = ({ type, removeQueryParam }) => {
  const router = useRouter();
  const persons = useAppSelector(state => state.personsFilter[`${type}s`]);
  const [personState, setPersonState] = useState(router.query[type] ? (router.query[type] as string) : '');

  const handlePersonStateChange = useCallback((newItem: string) => {
    setPersonState(newItem);
  }, []);

  const personChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const newItem = evt.target.name;

      handlePersonStateChange(newItem);

      router.replace(
        {
          query: { ...router.query, [type]: newItem },
        },
        undefined,
        { shallow: true },
      );
    },
    [handlePersonStateChange, router, type],
  );

  return (
    <div className={styles.container}>
      <PersonFilterForm
        type={type}
        removeQueryParam={removeQueryParam}
        handlePersonStateChange={handlePersonStateChange}
      />
      <ul className={styles.list}>
        {persons &&
          persons.map(({ person_id, name }) => (
            <li key={person_id} className={styles.list__item}>
              <PersonFilterItem name={name} personState={personState} onChange={personChange} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(PersonFilter);
