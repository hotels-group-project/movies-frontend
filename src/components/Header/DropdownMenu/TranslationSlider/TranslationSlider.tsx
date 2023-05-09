import Image from 'next/image';
import { FC, memo } from 'react';

import { TbPointFilled } from 'react-icons/tb';
import { SwiperSlide } from 'swiper/react';

import TVSlider from '../../../Shared/TVSlider/TVSlider';

import styles from './TranslationSlider.module.scss';
import { TranslationSliderProps } from './TranslationSlider.types';

const TranslationSlider: FC<TranslationSliderProps> = ({ images, slidesCount }) => {
  const slides = images.map(image => {
    return (
      <SwiperSlide key={image.id}>
        <div className="swiper-slide-transform">
          <a href={image.link} className={styles.translationSliderContainer}>
            <Image
              key={image.id}
              src={image.src}
              alt="Постер фильма"
              width={58}
              height={38}
              className={styles.translationSliderImg}
            />
            <div>
              <h2 className={styles.translationSliderTitle}>{image.title}</h2>
              <div className={styles.translationSliderDescription}>
                <div>{image.description}</div>
                <TbPointFilled />
                <div>{image.category}</div>
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="slider-container">
      <TVSlider slidesCount={slidesCount}>{slides}</TVSlider>
    </div>
  );
};

export default memo(TranslationSlider);
