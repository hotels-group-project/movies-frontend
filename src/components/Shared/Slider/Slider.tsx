import Image from 'next/image';
import { memo } from 'react';

import { Autoplay, Navigation, FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import { Props } from './Slider.types';

import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/navigation/navigation.scss';

function Slider({ items, slidesCount, autoplayDelay = false }: Props) {
  const autoPlayParams = {
    delay: 2000,
    disableOnInteraction: false,
  };
  const isAutoPlay = autoplayDelay ? autoPlayParams : false;

  return (
    <>
      <Swiper
        cssMode
        navigation
        spaceBetween={24}
        slidesPerView={slidesCount}
        slidesPerGroup={slidesCount}
        freeMode
        autoplay={isAutoPlay}
        modules={[Navigation, Autoplay, FreeMode]}
        className={styles.slider}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <div className="swiper-slide-transform">
              <Image src={item.src} alt="что-нибудь" width={150} height={200} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(Slider);
