import Image from 'next/image';
import { FC, memo } from 'react';

import styles from './InfinityAnimatedGroup.module.scss';
import { InfinityAnimatedGroupProps } from './InfinityAnimatedGroup.types';

const InfinityAnimatedGroup: FC<InfinityAnimatedGroupProps> = ({ images }) => {
  return (
    <div className={styles.images}>
      {images.map(image => (
        <Image
          key={image.id}
          src={image.src}
          alt="Постер фильма"
          width={128}
          height={72}
          className={styles.image}
          priority
        />
      ))}
    </div>
  );
};

export default memo(InfinityAnimatedGroup);
