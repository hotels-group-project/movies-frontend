import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FC, memo, useState, useCallback, MouseEvent } from 'react';

import WidgetDropdownMenu from '../WidgetDropdownMenu/WidgetDropdownMenu';
import { WidgetDropdownMenuProps } from '../WidgetDropdownMenu/WidgetDropdownMenu.types';

import { FIRST_GUTTER_STRIPE_HEIGHT, TOTAL_GUTTER_OFFSET } from './MoviesDropdownMenu.constants';
import styles from './MoviesDropdownMenu.module.scss';
import { MoviesDropdownMenuProps } from './MoviesDropdownMenu.types';

const MoviesDropdownMenu: FC<MoviesDropdownMenuProps> = ({
  genres,
  countries,
  years,
  alternativeFilters,
  animatedImages,
}) => {
  const { t } = useTranslation('header');
  const [gutterStripePosition, setGutterStripePosition] = useState({
    height: FIRST_GUTTER_STRIPE_HEIGHT,
    top: 0,
  });
  const [activeAlternativeFilter, setActiveAlternativeFilter] = useState('news');

  const gutterStripeStyles = {
    transform: `translateY(${gutterStripePosition.top}px)`,
    height: `${gutterStripePosition.height}px`,
  };

  const onMouseEnter = useCallback((title: string, evt: MouseEvent<HTMLAnchorElement>) => {
    const target = evt.target as HTMLAnchorElement;
    const targetY = target.getBoundingClientRect().top - TOTAL_GUTTER_OFFSET;
    const targetHeight = target.offsetHeight;
    setGutterStripePosition({ height: targetHeight, top: targetY });
    setActiveAlternativeFilter(title);
  }, []);

  const getCurrentImages = useCallback(
    (param: string): WidgetDropdownMenuProps['animatedImages'] => {
      const currentIndex = animatedImages.findIndex(({ title }) => title === param);
      const currentArray = animatedImages[currentIndex].array;
      return currentArray;
    },
    [animatedImages],
  );

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.genres}>
          <h3 className={styles.title}>{t('genres-menu.genres')}</h3>
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
            <h3 className={styles.title}>{t('genres-menu.countries')}</h3>
            <div className={styles.filterSection_filters}>
              {countries.map((country: string) => (
                <Link href="/" className={styles.link} key={country}>
                  {country}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.filterSection}>
            <h3 className={styles.title}>{t('genres-menu.years')}</h3>
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
              <Link href={link} className={styles.link} key={id} onMouseEnter={evt => onMouseEnter(title, evt)}>
                {t(`alternative-filters.${title}`)}
              </Link>
            ))}
          </div>
        </div>
        {alternativeFilters.map(
          ({ id, title }) =>
            activeAlternativeFilter === title && (
              <WidgetDropdownMenu key={id} animatedImages={getCurrentImages(title)} />
            ),
        )}
      </div>
    </div>
  );
};

export default memo(MoviesDropdownMenu);
