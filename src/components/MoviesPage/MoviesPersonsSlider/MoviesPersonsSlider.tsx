import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

//import { useAppSelector } from '../../../hooks/redux';
import Slider from '../../Shared/Slider/Slider';

import styles from './MoviesPersonsSlider.module.scss';

export const BASE_URL = 'http://localhost:3000';

const MoviePersonsSlider: FC = () => {
  // const persons = useAppSelector(store => store.filters).genres;

  // const slides = persons.map(item => {
  // return (
  //   <SwiperSlide key={item.name} className={styles.moviesPersonsSliderSlide}>
  //     <LinkComponent variant="dark_middle" link={`${BASE_URL}/movies?genres=${item.name}`}>
  //       <div className={styles.moviesPersonsSliderContainer}>
  //         <div className={styles.moviesPersonsSliderImg}>
  //           <Image
  //             src="https://thumbs.dfs.ivi.ru/storage23/contents/a/e/2d9c7984b2a598f898b84f07c82ee4.jpg/153x183/?q=85"
  //             alt="person"
  //             width={83}
  //             height={153}
  //           />
  //         </div>
  //         <div className={styles.moviesPersonsSliderBadge}>10</div>
  //         <h3>Семюел Л. Джексон</h3>
  //         <p>10 фильмов</p>
  //       </div>
  //     </LinkComponent>
  //   </SwiperSlide>
  // );
  // });
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
          {/* {slides} */}
          <SwiperSlide className={styles.moviesPersonsSliderSlide}>
            <Link href="https://www.ivi.ru/person/samuel-l-jackson-1278">
              <div className={styles.moviesPersonsSliderWrapper}>
                <Image
                  className={styles.moviesPersonsSliderImg}
                  src="https://thumbs.dfs.ivi.ru/storage23/contents/a/e/2d9c7984b2a598f898b84f07c82ee4.jpg/153x183/?q=85"
                  alt="person"
                  width={153}
                  height={183}
                />
                <div className={styles.moviesPersonsSliderBadge}>
                  <div className={styles.moviesPersonsSliderBadgeBack}> </div>
                  <div className={styles.moviesPersonsSliderBadgeText}>10</div>
                </div>
              </div>
              <h3 className={styles.moviesPersonsSliderName}>Сэмюэл Л. Джексон</h3>
              <p className={styles.moviesPersonsSliderFilmsAmount}>10 фильмов</p>
            </Link>
          </SwiperSlide>
        </Slider>
      </section>
    </>
  );
};

export default memo(MoviePersonsSlider);
