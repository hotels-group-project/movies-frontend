import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FC, memo, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../hooks/redux';
import { wordEndingChange } from '../../../utils/helpers';

import Slider from '../../Shared/Slider/Slider';

import styles from './MoviesPersonsSlider.module.scss';

const MoviePersonsSlider: FC = () => {
  const { t } = useTranslation('moviesPage');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);
  const persons = useAppSelector(state => state.persons).persons;

  const AdaptiveSlidesCount = useMemo(() => {
    return isDesktop ? 7 : isTablet ? 3 : 1;
  }, [isDesktop, isTablet]);
  const slides = persons.map(item => {
    return (
      <SwiperSlide key={item.person_id} className={styles.moviesPersonsSliderSlide}>
        <Link href={`/actor/${item.firstName}${item.lastName}`}>
          <div className={styles.moviesPersonsSliderWrapper}>
            <Image
              className={styles.moviesPersonsSliderImg}
              src={item.photo}
              alt="person"
              width={170}
              height={170}
              priority
              loading="eager"
            />
            <div className={styles.moviesPersonsSliderBadge}>
              <div className={styles.moviesPersonsSliderBadgeBack}> </div>
              <div className={styles.moviesPersonsSliderBadgeText}>{item.films_count}</div>
            </div>
          </div>
          <h3 className={styles.moviesPersonsSliderName}>{item.firstName}</h3>
          <h3 className={styles.moviesPersonsSliderName}>{item.lastName}</h3>
          <p className={styles.moviesPersonsSliderFilmsAmount}>
            {item.films_count}{' '}
            {wordEndingChange(item.films_count, [
              `${t(`movies-count.first-form`)}`,
              `${t(`movies-count.second-form`)}`,
              `${t(`movies-count.third-form`)}`,
            ])}
          </p>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t(`movies-sections.persons`)}</h2>
        <Slider
          slidesCount={AdaptiveSlidesCount}
          slidesPerView="auto"
          spaceBetween={1}
          sliderClassName={styles.moviesPersonsSlider}
          prevButtonClassName={styles.prevButton}
          nextButtonClassName={styles.nextButton}
          variant="arrow"
        >
          {slides}
        </Slider>
      </section>
    </>
  );
};

export default memo(MoviePersonsSlider);
