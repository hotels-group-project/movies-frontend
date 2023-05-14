import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import TVSlider from '../../../../Shared/TVSlider/TVSlider';

import { ChannelSliderProps } from './ChannelSlider.types';

const ChannelSlider: FC<ChannelSliderProps> = ({ images, slidesCount }) => {
  return (
    <TVSlider slidesCount={slidesCount}>
      {images.map(image => (
        <SwiperSlide key={image.id}>
          <Link href={image.link}>
            <Image key={image.id} src={image.src} alt="Постер фильма" width={88} height={58} />
          </Link>
        </SwiperSlide>
      ))}
    </TVSlider>
  );
};

export default memo(ChannelSlider);
