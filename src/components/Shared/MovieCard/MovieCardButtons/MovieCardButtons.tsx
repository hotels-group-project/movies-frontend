import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { GoCircleSlash } from 'react-icons/go';
import { IoMdColorWand } from 'react-icons/io';
import { RiFlag2Line } from 'react-icons/ri';

import Button from '../../../Shared/Button/Button';

import styles from './MovieCardButtons.module.scss';

const MovieCardButtons: FC = () => {
  const { t } = useTranslation(['movieCardTooltips']);
  return (
    <>
      <div className={styles.btnContainer}>
        <Button variant="text_element">
          <span className={styles.tooltip} data-title={t('later')}>
            <RiFlag2Line className={styles.icon} />
          </span>
        </Button>
        <Button variant="text_element">
          <span className={styles.tooltip} data-title={t('similar')}>
            <IoMdColorWand className={`${styles.icon} ${styles.iconWand}`} />
          </span>
        </Button>
        <Button variant="text_element">
          <span className={styles.tooltip} data-title={t('rate')}>
            <AiOutlineStar className={styles.icon} />
          </span>
        </Button>
        <Button variant="text_element">
          <span className={styles.tooltip} data-title={t('do-not-like')}>
            <GoCircleSlash className={styles.icon} />
          </span>
        </Button>
      </div>
    </>
  );
};

export default memo(MovieCardButtons);
