import Input from "./Input";

import styles from './Input.module.scss';
import '../../styles/constants.scss';
import { InputProps } from "./Input.types";

import type { StoryObj, Meta } from '@storybook/react';


const meta: Meta<InputProps> = {
    title: 'shared/Input',
    component: Input,
};
export default meta;
type Story = StoryObj<InputProps>;

export const Primary: Story = {
    args: {
      inputClassName: 'primary',
      placeholder: 'Расскажите первым о персоне',
    },
  };

  export const Secondary: Story = {
    args: {
      placeholder: 'Написать отзыв',
    },
  };

