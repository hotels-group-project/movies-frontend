import type { StoryObj, Meta } from '@storybook/react';

import { ButtonAndLinkProps } from '../../../types/types';

import Link from './Link';

const meta: Meta<ButtonAndLinkProps> = {
  title: 'shared/Link',
  component: Link,
};
export default meta;
type LinkStory = StoryObj<ButtonAndLinkProps>;

export const Default: LinkStory = {
  args: {
    link: 'https://www.ivi.ru/watch/491962',
    variant: 'default',
    children: 'Смотреть',
  },
};
