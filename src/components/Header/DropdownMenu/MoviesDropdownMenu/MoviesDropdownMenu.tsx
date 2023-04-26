import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FC, memo, useState, useCallback } from 'react';

import Button from '../../../Shared/Button/Button';

import styles from './MoviesDropdownMenu.module.scss';
import { MoviesDropdownMenuProps } from './MoviesDropdownMenu.types';

const MoviesDropdownMenu: FC<MoviesDropdownMenuProps> = ({ genres, countries, years, alternativeFilters }) => {
  const { t } = useTranslation('header');
  const [gutterStripePosition, setGutterStripePosition] = useState(0);
  const gutterStripeStyles = {
    transform: `translateY(${gutterStripePosition}px)`,
    transition: `transform 0.2s`,
  };

  const onMouseEnter = useCallback(
    (key: number) => {
      setGutterStripePosition(28 * (key - 1));
    },
    [setGutterStripePosition],
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.genres}>
          <h3 className={styles.title}>{t('genres')}</h3>
          <div className={styles.genres_list}>
            {genres.map((genre: string) => (
              <Link href="/" className={styles.link} key={genre}>
                {genre}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.filterSection}>
            <h3 className={styles.title}>{t('countries')}</h3>
            <div className={styles.filterSection_filters}>
              {countries.map((country: string) => (
                <Link href="/" className={styles.link} key={country}>
                  {country}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.filterSection}>
            <h3 className={styles.title}>{t('years')}</h3>
            <div className={styles.filterSection_filters}>
              {years.map((year: string) => (
                <Link href="/" className={styles.link} key={year}>
                  {year}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.alternativeFilters}>
          <div className={styles.gutter}>
            <div className={styles.gutter_stripe} style={gutterStripeStyles} />
          </div>
          <div className={styles.alternativeFilters_list}>
            {alternativeFilters.map(({ id, title, link }) => (
              <Link href={link} className={styles.link} key={id} onMouseEnter={() => onMouseEnter(id)}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.widget}>
          <div className={styles.widget_content} />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default memo(MoviesDropdownMenu);
