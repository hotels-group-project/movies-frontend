import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import { FC, memo, useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { useAppSelector } from '../../../hooks/redux';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';
import Slider from '../../Shared/Slider/Slider';

import { MOVIES_NEWS_SLIDER } from './constant';

import styles from './MoviesNewsSlider.module.scss';

const MoviesNewsSlider: FC = () => {
  const { t } = useTranslation('moviesPage');
  const isDesktop = useAppSelector(state => state.breakpoint.isDesktop);
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);

  const AdaptiveSlidesCount = useMemo(() => {
    return isDesktop ? 4 : isTablet ? 2 : 1;
  }, [isDesktop, isTablet]);
  const slides = MOVIES_NEWS_SLIDER.map(item => {
    return (
      <SwiperSlide key={item.id} className={styles.moviesNewsSliderSlide}>
        <LinkComponent
          variant="text_reverse"
          link={`https://www.ivi.ru/collections/${item.type}`}
          elemClassName={styles.moviesNewsSliderLink}
        >
          <div className={styles.moviesNewsSliderContainer}>
            <Image
              className={styles.moviesPersonsSliderImg}
              src={item.src}
              alt="promoPoster"
              width={269}
              height={180}
              priority
              loading="eager"
            />
          </div>
          <p>{t(`new-movies.${item.type}`)}</p>
        </LinkComponent>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t(`movies-sections.news`)}</h2>
        <Slider
          slidesCount={AdaptiveSlidesCount}
          slidesPerView="auto"
          spaceBetween={20}
          sliderClassName={styles.moviesNewsSlider}
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
export default memo(MoviesNewsSlider);
