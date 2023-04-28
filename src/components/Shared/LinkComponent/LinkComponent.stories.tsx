import type { StoryObj, Meta } from '@storybook/react';

import { ButtonAndLinkProps } from '../../../types/types';

import LinkComponent from './LinkComponent';

const meta: Meta<ButtonAndLinkProps> = {
  title: 'shared/LinkComponent',
  component: LinkComponent,
};
export default meta;
type LinkComponentStory = StoryObj<ButtonAndLinkProps>;

export const Default: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'default',
    children: 'Смотреть',
  },
};

export const DarkSmall: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'dark_small',
    children: '>',
  },
};

export const DarkMiddle: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'dark_middle',
    children: 'Смотреть',
  },
};

export const DarkBig: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'dark_big',
    children: 'Смотреть',
  },
};

export const DarkLarge: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'dark_large',
    children: 'Смотреть',
  },
};

export const DarkRound: LinkComponentStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'dark_round',
    children: '+',
  },
};
