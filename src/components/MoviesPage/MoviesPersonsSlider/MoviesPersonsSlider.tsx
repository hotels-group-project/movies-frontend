import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../hooks/redux';

import Slider from '../../Shared/Slider/Slider';

import styles from './MoviesPersonsSlider.module.scss';

export const BASE_URL = 'http://localhost:3000';

const MoviePersonsSlider: FC = () => {
  const persons = useAppSelector(state => state.persons).persons;
  const slides = persons.map(item => {
    return (
      <SwiperSlide key={item.person_id} className={styles.moviesPersonsSliderSlide}>
        <Link href={`${BASE_URL}/person=${item.firstName}${item.lastName}`}>
          <div className={styles.moviesPersonsSliderWrapper}>
            <Image
              className={styles.moviesPersonsSliderImg}
              src={item.photo}
              alt="person"
              width={240}
              height={380}
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
          <p className={styles.moviesPersonsSliderFilmsAmount}>{item.films_count} фильмов</p>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Персоны</h2>
        <Slider
          slidesCount={7}
          slidesPerView="auto"
          spaceBetween={24}
          sliderClassName={styles.moviesPersonsSlider}
          prevButtonClassName={styles.prevButton}
          nextButtonClassName={styles.nextButton}
        >
          {slides}
        </Slider>
      </section>
    </>
  );
};

export default memo(MoviePersonsSlider);
