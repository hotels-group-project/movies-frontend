import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import LinkComponent from '../../../Shared/LinkComponent/LinkComponent';
import WidgetDropdownMenu from '../WidgetDropdownMenu/WidgetDropdownMenu';

import { TV_PLUS_ANIMATION_BLOCK, TV_PLUS_LINKS } from './TVPlusDropdownMenu.constants';
import styles from './TVPlusDropdownMenu.module.scss';

const TVPlusDropdownMenu: FC = () => {
  const { t } = useTranslation('header');

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.links}>
          {TV_PLUS_LINKS.map(({ id, title, link }) => (
            <div key={id}>
              {title === 'online' ? (
                <p className={styles.link_active}>{t(`tvplus-menu.${title}`)}</p>
              ) : (
                <LinkComponent variant="text" link={link}>
                  <p className={styles.link}>{t(`tvplus-menu.${title}`)}</p>
                </LinkComponent>
              )}
            </div>
          ))}
        </div>
        <LinkComponent
          variant="default"
          elemClassName={styles.program__link}
          link="https://www.ivi.ru/tvplus/tv-schedule-today"
        >
          <p>{t('tvplus-menu.TV-program')}</p>
        </LinkComponent>
      </div>
      <div className={styles.rightSection}>
        <WidgetDropdownMenu animatedImages={TV_PLUS_ANIMATION_BLOCK} />
      </div>
    </div>
  );
};

export default memo(TVPlusDropdownMenu);
