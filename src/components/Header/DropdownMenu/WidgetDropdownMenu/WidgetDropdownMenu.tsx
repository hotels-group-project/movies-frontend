import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FC, memo, useCallback, useState, useRef } from 'react';
import { BsFillDisplayFill } from 'react-icons/bs';
import { CSSTransition } from 'react-transition-group';

import Button from '../../../Shared/Button/Button';
import LinkComponent from '../../../Shared/LinkComponent/LinkComponent';

import InfinityAnimatedGroup from './InfinityAnimatedGroup/InfinityAnimatedGroup';
import styles from './WidgetDropdownMenu.module.scss';
import { WidgetDropdownMenuProps } from './WidgetDropdownMenu.types';

const WidgetDropdownMenu: FC<WidgetDropdownMenuProps> = ({ animatedImages }) => {
  const { t } = useTranslation('header');
  const [onSubscribe, setOnSubscribe] = useState(false);
  const nodeRef = useRef(null);

  const toggleActivateOnHover = useCallback(() => {
    setOnSubscribe(!onSubscribe);
  }, [onSubscribe]);

  return (
    <div className={styles.widget}>
      <div className={styles.widget__content}>
        <div className={`${styles.shadowBox} ${styles.shadowBox_left}`} />
        <div className={`${styles.shadowBox} ${styles.shadowBox_right}`} />
        <div className={styles.images}>
          {animatedImages.map((row, id) => (
            <div key={row.id} className={id % 2 !== 0 ? styles.images_even : styles.images_uneven}>
              <InfinityAnimatedGroup images={row.images} />
            </div>
          ))}
        </div>
        <div className={styles.images}>
          {animatedImages.map((row, id) => (
            <div key={row.id} className={id % 2 !== 0 ? styles.images_even_copy : styles.images_uneven_copy}>
              <InfinityAnimatedGroup images={row.images} />
            </div>
          ))}
        </div>
        <div className={styles.subscribe} onMouseEnter={toggleActivateOnHover} onMouseLeave={toggleActivateOnHover}>
          <div className={styles.subscribe__wrapper}>
            <Image
              src="https://solea-parent.dfs.ivi.ru/picture/bypass/reposition_subscription_ivi.svg"
              alt="Логотип Иви"
              width={48}
              height={48}
              className={styles.logo}
            />
            <div className={styles.subscribe__textWrapper}>
              <h3 className={styles.subscribe__title}>{t('widget.subscription')}</h3>
              <p className={styles.subscribe__text}>{t('widget.price')}</p>
            </div>
          </div>
          <CSSTransition
            in={onSubscribe}
            nodeRef={nodeRef}
            timeout={300}
            classNames={{
              enterActive: styles['subscribe__hover_entering'],
              enterDone: styles['subscribe__hover_entered'],
              exitActive: styles['subscribe__hover_exiting'],
              exitDone: styles['subscribe__hover_exited'],
            }}
            unmountOnExit
          >
            <div ref={nodeRef} className={styles.subscribe__hover}>
              <Button variant="default" elemClassName={styles.subscribe__hoverButton}>
                <p>{t('widget.activate')}</p>
              </Button>
              <p className={styles.subscribe__hoverText}>{t('widget.turn-off')}</p>
            </div>
          </CSSTransition>
        </div>
      </div>
      <LinkComponent
        link="https://www.ivi.ru/pages/tvsmart/"
        variant="default"
        elemClassName={styles.watchSmartTV}
        startIcon={<BsFillDisplayFill className={styles.displayIcon} />}
      >
        <p>{t('widget.watch-smart-tv')}</p>
      </LinkComponent>
    </div>
  );
};

export default memo(WidgetDropdownMenu);
