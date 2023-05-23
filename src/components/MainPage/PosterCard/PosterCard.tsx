import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import { useAppSelector } from '../../../hooks/redux';

import Button from '../../Shared/Button/Button';
import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './PosterCard.module.scss';
import { PosterCardProps } from './PosterCard.types';

const PosterCard: FC<PosterCardProps> = ({ cardElem }) => {
  const { t } = useTranslation('posterCard');
  const isTablet = useAppSelector(state => state.breakpoint.isTablet);
  const { img, titleImg, description, buttonTitle, title, link, height, heightTablet, imgTablet } = cardElem;
  return (
    <>
      <div className={styles.poster}>
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
              loading="eager"
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
                loading="eager"
              />
            </div>
            <p className={styles.text}>{description}</p>
            <Button variant="default" elemClassName={styles.posterButton}>
              {t(`${buttonTitle}`)}
            </Button>
          </div>
        </LinkComponent>
      </div>
    </>
  );
};

export default memo(PosterCard);
