import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';

import { useAppDispatch } from '../../../../../../hooks/redux';
import { setActors, setProducers } from '../../../../../../store/reducers/personsFilterSlice';
import { findPersons } from '../../../../../../utils/Api';
import Button from '../../../../../Shared/Button/Button';

import styles from './PersonFilterForm.module.scss';
import { PersonFilterFormProps } from './PersonFilterForm.types';

const PersonFilterForm: FC<PersonFilterFormProps> = ({ type, removeQueryParam, handlePersonStateChange }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { t } = useTranslation('moviesPage');
  const [name, setName] = useState('');

  const nameChahge = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, []);

  const resetFilter = useCallback(() => {
    removeQueryParam(type);
    handlePersonStateChange('');
  }, [handlePersonStateChange, removeQueryParam, type]);

  useEffect(() => {
    if (name === '') {
      if (type === 'producer') dispatch(setProducers([]));
      if (type === 'actor') dispatch(setActors([]));
      return;
    }
    findPersons(type, name).then(res => {
      if (type === 'producer') dispatch(setProducers(res));
      if (type === 'actor') dispatch(setActors(res));
    });
  }, [dispatch, name, type]);

  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={type}>
          {t(`person.name`)}
        </label>
        {router.query[type] && (
          <Button
            variant="dark_middle"
            elemClassName={styles.button}
            onClick={resetFilter}
            disabled={!router.query[type]}
          >
            {t('person.clear')}
          </Button>
        )}
      </div>
      <input className={styles.input} type="text" id={type} value={name} onChange={nameChahge} />
    </form>
  );
};

export default memo(PersonFilterForm);
