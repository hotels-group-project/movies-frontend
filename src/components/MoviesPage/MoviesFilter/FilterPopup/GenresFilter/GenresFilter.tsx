import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../../../hooks/redux';
import Button from '../../../../Shared/Button/Button';
import Slider from '../../../../Shared/Slider/Slider';

import styles from './GenresFilter.module.scss';
import { GenresFilterProps } from './GenresFilter.types';
import GenresFilterItem from './GenresFilterItem/GenresFilterItem';

const GenresFilter: FC<GenresFilterProps> = ({ filters, type }) => {
  const router = useRouter();
  const { t } = useTranslation('moviesPage');
  const activeFilters = useAppSelector(state => state.activeFilters[type]);

  const onFilterClick = useCallback(
    (item: string) => {
      let newItems = [...activeFilters];
      if (newItems.includes(item)) {
        newItems = activeFilters.filter(value => value !== item);
      } else {
        newItems.push(item);
      }

      if (newItems.length === 0) {
        // Проходимся по существующим query-параметрам
        Object.keys(router.query).forEach(key => {
          if (key !== type) {
            // Отображаем все query-параметры, кроме текущего
            return router.replace({
              query: { [key]: router.query[key] },
            });
          }
          // Удаляем все query-параметры,
          return router.replace({
            query: {},
          });
        });
      } else {
        router.replace({
          query: { ...router.query, [type]: newItems.join('+') },
        });
      }
    },
    [activeFilters, router, type],
  );

  return (
    <>
      <Slider slidesPerView="auto" slidesCount={3} spaceBetween={12} sliderClassName={styles.slider}>
        {filters.slice(0, 10).map(({ name }) => (
          <SwiperSlide className={styles.slide} key={name}>
            <Button
              variant={type === 'genres' ? 'sort_square' : 'sort_circle'}
              elemClassName={`${styles.button} ${type ? styles[`button_${type}`] : ''} ${
                activeFilters && activeFilters.includes(name) ? styles.button_active : ''
              }`}
              onClick={() => onFilterClick(name)}
            >
              <p className={styles.button__text}>{t(`${type}.${name}`)}</p>
            </Button>
          </SwiperSlide>
        ))}
      </Slider>
      <ul className={styles.list}>
        {filters.map(({ name }) => (
          <li key={name} className={styles.list__item}>
            <GenresFilterItem item={name} type={type} onFilterClick={onFilterClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(GenresFilter);
