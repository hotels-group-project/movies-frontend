import Image from 'next/image';
import { FC, memo, useCallback, useState, useRef } from 'react';
import { BsFillDisplayFill } from 'react-icons/bs';

import { CSSTransition } from 'react-transition-group';

import Button from '../../../Shared/Button/Button';

import InfinityAnimatedGroup from './InfinityAnimatedGroup/InfinityAnimatedGroup';
import styles from './WidgetDropdownMenu.module.scss';
import { WidgetDropdownMenuProps } from './WidgetDropdownMenu.types';

const WidgetDropdownMenu: FC<WidgetDropdownMenuProps> = ({ animatedImages }) => {
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
              <h3 className={styles.subscribe__title}>Подписка Иви</h3>
              <p className={styles.subscribe__text}>От 199 ₽ за месяц</p>
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
              <Button variant="default" buttonClassName={styles.subscribe__hoverButton}>
                <p>Подключить</p>
              </Button>
              <p className={styles.subscribe__hoverText}>Отключить можно в любой момент</p>
            </div>
          </CSSTransition>
        </div>
      </div>
      <Button
        variant="default"
        buttonClassName={styles.watchSmartTV}
        startIcon={<BsFillDisplayFill className={styles.displayIcon} />}
      >
        <p>Смотреть на SmartTV</p>
      </Button>
    </div>
  );
};

export default memo(WidgetDropdownMenu);
