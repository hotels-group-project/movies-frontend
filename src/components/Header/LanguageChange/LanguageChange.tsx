import { useRouter } from 'next/router';
import { FC, memo, useCallback, useMemo } from 'react';

import Button from '../../Shared/Button/Button';

import styles from './LanguageChange.module.scss';

const LanguageChange: FC = () => {
  const router = useRouter();

  const onToggleLanguageClick = useCallback(
    (newLocale: string) => {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: newLocale });
    },
    [router],
  );

  const changeTo = useMemo(() => (router.locale === 'en' ? 'ru' : 'en'), [router.locale]);
  return (
    <Button
      variant="default"
      elemClassName={styles.changeLang}
      onClick={() => onToggleLanguageClick(changeTo)}
    >{`${changeTo.toUpperCase()}`}</Button>
  );
};

export default memo(LanguageChange);
