import type { StoryObj, Meta } from '@storybook/react';
import { FaRegBookmark } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { GiDualityMask } from 'react-icons/gi';
import { SlControlPlay, SlArrowRight, SlArrowLeft, SlArrowDown } from 'react-icons/sl';

import Button from './Button';

import { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'shared/Button',
  component: Button,
};
export default meta;
type ButtonStory = StoryObj<ButtonProps>;

export const Default: ButtonStory = {
  args: {
    variant: 'default',
    children: 'Смотреть 30 дней за 1 Р',
  },
};

export const ArrowRight: ButtonStory = {
  args: {
    variant: 'arrow',
    children: <SlArrowRight />,
  },
};

export const ArrowLeft: ButtonStory = {
  args: {
    variant: 'arrow',
    children: <SlArrowLeft />,
  },
};

export const ArrowS: ButtonStory = {
  args: {
    variant: 'arrow_s',
    children: <SlArrowRight />,
  },
};

export const ArrowM: ButtonStory = {
  args: {
    variant: 'arrow_m',
    children: <SlArrowRight />,
  },
};

export const Filter: ButtonStory = {
  args: {
    variant: 'filter',
    children: '2022 год',
  },
};

export const Feedback: ButtonStory = {
  args: {
    variant: 'feedback',
    children: 'Оставить отзыв',
  },
};

export const FeedbackMin: ButtonStory = {
  args: {
    variant: 'feedback_min',
    children: 'Оценить',
  },
};

export const FeedbackColumn: ButtonStory = {
  args: {
    variant: 'feedback_column',
    children: 'Комедии',
    startIcon: <GiDualityMask />,
  },
};

export const Info: ButtonStory = {
  args: {
    variant: 'info',
    children: 'Трейлер',
    startIcon: <SlControlPlay />,
  },
};

export const InfoShareIcon: ButtonStory = {
  args: {
    variant: 'info',
    startIcon: <FiShare />,
  },
};

export const InfoFavouriteIcon: ButtonStory = {
  args: {
    variant: 'info',
    startIcon: <FaRegBookmark />,
  },
};

export const SortButton: ButtonStory = {
  args: {
    variant: 'sort',
    children: 'Жанры',
    endIcon: <SlArrowDown />,
  },
};
