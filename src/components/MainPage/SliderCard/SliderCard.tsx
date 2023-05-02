import Image from 'next/legacy/image';
import { FC, memo } from 'react';

import { useAppSelector } from '../../../hooks/redux';

import Button from '../../Shared/Button/Button';
import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './SliderCard.module.scss';
import { SliderCardProps } from './SliderCard.types';

const SliderCard: FC<SliderCardProps> = ({
  img,
  titleImg,
  description,
  buttonTitle,
  title,
  link,
  height,
  heightTablet,
  imgTablet,
}) => {
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);
  return (
    <>
      <div className={styles.sliderCard}>
        <LinkComponent link={link}>
          <div className={styles.shadow}>
            <Image
              className={styles.card}
              src={isTablet ? img : imgTablet}
              object-fit="cover"
              alt={title}
              layout="responsive"
              width={isTablet ? 1216 : 551}
              height={isTablet ? 524 : 617}
              priority
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.title}>
              <Image
                src={titleImg}
                priority
                alt={title}
                object-fit="contain"
                layout="responsive"
                width={isTablet ? 487 : 418}
                height={isTablet ? height : heightTablet}
              />
            </div>
            <p className={styles.text}>{description}</p>
            <Button variant="default" elemClassName={styles.slider}>
              {buttonTitle}
            </Button>
          </div>
        </LinkComponent>
      </div>
    </>
  );
};

export default memo(SliderCard);
