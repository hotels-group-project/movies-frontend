import { useRouter } from 'next/router';
import { FC, memo, useState, useCallback, ChangeEvent } from 'react';

import styles from './YearsFilter.module.scss';
import { YearsFilterProps } from './YearsFilter.types';
import YearsFilterItem from './YearsFilterItem/YearsFilterItem';

const YearsFilter: FC<YearsFilterProps> = ({ type, filters, removeQueryParam }) => {
  const router = useRouter();
  const [yearState, setYearState] = useState(router.query[type] ? (router.query[type] as string) : 'all');

  const yearChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const newItem = evt.target.name;

      setYearState(newItem);

      if (newItem === 'all') {
        removeQueryParam(type);
      } else {
        router.replace(
          {
            query: { ...router.query, [type]: newItem },
          },
          undefined,
          { shallow: true },
        );
      }
    },
    [removeQueryParam, router, type],
  );

  return (
    <ul className={styles.list}>
      {filters.map(({ id, name }) => (
        <li key={id} className={styles.list__item}>
          <YearsFilterItem year={name} yearState={yearState} onChange={yearChange} type={type} />
        </li>
      ))}
    </ul>
  );
};

export default memo(YearsFilter);
