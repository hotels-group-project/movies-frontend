import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import TVSlider from '../../../../Shared/TVSlider/TVSlider';

import styles from './ChannelSlider.module.scss';
import { ChannelSliderProps } from './ChannelSlider.types';

const ChannelSlider: FC<ChannelSliderProps> = ({ images }) => {
  return (
    <TVSlider spaceBetween={16} slidesPerView="auto" slidesCount={5}>
      {images.map(image => (
        <SwiperSlide className={styles.slide} key={image.id}>
          <Link href={image.link}>
            <Image key={image.id} src={image.src} alt="Постер фильма" width={88} height={58} priority />
          </Link>
        </SwiperSlide>
      ))}
    </TVSlider>
  );
};

export default memo(ChannelSlider);
