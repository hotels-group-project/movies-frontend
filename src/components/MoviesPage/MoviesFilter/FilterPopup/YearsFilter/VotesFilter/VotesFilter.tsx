import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FC, memo, useState, useMemo } from 'react';

import styles from './VotesFilter.module.scss';

const VotesFilter: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('moviesPage');
  const { query } = router;
  const [value, setValue] = useState(query.votes || '0');
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const currentValue = evt.target.value;

    clearTimeout(timerId);

    const id = setTimeout(() => {
      if (currentValue === '0') {
        delete query.votes;
        router.replace({ query }, undefined, { shallow: true });
      } else {
        router.replace(
          {
            query: { ...router.query, votes: `${+currentValue * 10000}` },
          },
          undefined,
          { shallow: true },
        );
      }
    }, 1000);
    setTimerId(id);
    setValue(currentValue);
  };

  const viewedValue = useMemo(() => {
    return +value * 10000;
  }, [value]);

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{t('votes.title')}</h6>
      <label className={styles.label} htmlFor="votes">{`${t('votes.search-1')} ${viewedValue} ${t(
        'votes.search-2',
      )}`}</label>
      <div className={styles.wrapper}>
        <span>0</span>
        <input className={styles.input} id="votes" type="range" value={value} onChange={onChange} />
        <span>{t('votes.million')}</span>
      </div>
    </div>
  );
};

export default memo(VotesFilter);
