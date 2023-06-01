import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import Button from '../../Shared/Button/Button';
import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './MoviePersons.module.scss';
import { MoviePersonsProps } from './MoviePersons.types';

const MoviePersons: FC<MoviePersonsProps> = ({ film }) => {
  const { t } = useTranslation('moviePage');
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLink}>
          <Button variant="info" elemClassName={styles.link}>
            <div className={styles.back}>{film.kprating}</div>
          </Button>
          <LinkComponent link="/" variant="text_element" elemClassName={styles.linkText}>
            {t('rating')}
          </LinkComponent>
        </div>
        {film.staff.slice(0, 4).map(i => (
          <div key={i.person_id} className={styles.containerLink}>
            <LinkComponent
              link={`http://localhost:3000/person/${i.person_id}`}
              variant="info"
              elemClassName={styles.link}
            >
              <div className={styles.back} style={{ backgroundImage: `url(${i.photo})` }} />
            </LinkComponent>
            <LinkComponent
              link={`http://localhost:3000/person/${i.person_id}`}
              variant="text_element"
              elemClassName={styles.linkText}
            >
              {router.locale === 'ru' ? (i.name ? i.name : i.enName) : i.enName ? i.enName : i.name}
            </LinkComponent>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(MoviePersons);
