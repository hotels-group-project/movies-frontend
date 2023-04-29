import Image from 'next/image';
import { FC, memo } from 'react';

import Button from '../../Shared/Button/Button';
import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './SliderCard.module.scss';
import { SliderCardProps } from './SliderCard.types';

const SliderCard: FC<SliderCardProps> = ({ img, titleImg, description, buttonTitle, title, link, height }) => {
  return (
    <>
      <div className={styles.sliderCard}>
        <LinkComponent link={link}>
          <Image src={img} width={1216} height={524} priority alt={title} className={styles.card} />
          <div className={styles.infoContainer}>
            <Image src={titleImg} width={487} height={height} priority alt={title} />
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
