import { useTranslation } from 'next-i18next';
import { FC, memo } from 'react';

import LinkComponent from '../../../Shared/LinkComponent/LinkComponent';
import { FEDERAL_CHANNEL_SLIDER } from '../constants/channels/federal';
import { SPORTS_CHANNEL_SLIDER } from '../constants/channels/sports';
import { TRANSLATION_SLIDER } from '../constants/channels/translation';
import WidgetDropdownMenu from '../WidgetDropdownMenu/WidgetDropdownMenu';

import ChannelSlider from './ChannelSlider/ChannelSlider';
import TranslationSlider from './TranslationSlider/TranslationSlider';
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
                <LinkComponent variant="text_element" link={link}>
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
        <div className={styles.sliders}>
          <div className={styles.sliders__channels}>
            <p className={styles.link_active}>{t(`tvplus-menu.federal-channels`)}</p>
            <ChannelSlider images={FEDERAL_CHANNEL_SLIDER} />
          </div>
          <div className={styles.sliders__channels}>
            <p className={styles.link_active}>{t(`tvplus-menu.sports-channels`)}</p>
            <ChannelSlider images={SPORTS_CHANNEL_SLIDER} />
          </div>
          <div className={styles.sliders__channels}>
            <p className={styles.link_active}>{t(`tvplus-menu.popular-broadcasts`)}</p>
            <TranslationSlider images={TRANSLATION_SLIDER} />
          </div>
        </div>
        <WidgetDropdownMenu animatedImages={TV_PLUS_ANIMATION_BLOCK} />
      </div>
    </div>
  );
};

export default memo(TVPlusDropdownMenu);
