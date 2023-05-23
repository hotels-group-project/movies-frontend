import Image from 'next/legacy/image';
import { FC, memo } from 'react';

import LinkComponent from '../../Shared/LinkComponent/LinkComponent';

import styles from './TopCard.module.scss';
import { TopCardProps } from './TopCard.types';

const TopCard: FC<TopCardProps> = ({ movie }) => {
  const { poster, title, link, titleImg, number, id } = movie;
  return (
    <>
      <div className={styles.card}>
        <LinkComponent link={link}>
          <div className={styles.poster}>
            <Image
              className={styles.img}
              src={poster}
              object-fit="contain"
              alt={title}
              layout="responsive"
              width={224}
              height={456}
              priority
              loading="eager"
            />
            <div className={styles.title}>
              <Image src={titleImg} priority alt={title} layout="fill" className={styles.titleImg} loading="eager" />
            </div>
            <div className={styles.shadow} />
            <div className={styles.num}>
              <Image
                className={styles.numImg}
                src={number}
                priority
                alt={String(id)}
                object-fit="cover"
                layout="fill"
                loading="eager"
              />
            </div>
          </div>
        </LinkComponent>
      </div>
    </>
  );
};

export default memo(TopCard);
