import Image from 'next/image';
import { FC, memo } from 'react';

import { SwiperSlide } from 'swiper/react';

import TVSlider from '../../../Shared/TVSlider/TVSlider';

import { ChannelSliderProps } from './ChannelSlider.types';

const ChannelSlider: FC<ChannelSliderProps> = ({ images }) => {
  const slides = images.map(image => {
    return (
      <SwiperSlide key={image.id}>
        <div className="swiper-slide-transform">
          <a href={image.link}>
            <Image key={image.id} src={image.src} alt="Постер фильма" width={88} height={58} />
          </a>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="slider-container">
      <TVSlider slidesCount={6.4}>{slides}</TVSlider>
    </div>
  );
};

export default memo(ChannelSlider);
