import type { Meta, StoryObj } from '@storybook/angular';
import { LikeButtonComponent } from './like-button.component';

const meta: Meta<LikeButtonComponent> = {
  title: 'Components/Icon Button',
  component: LikeButtonComponent,
};

export default meta  ;
type Story = StoryObj<LikeButtonComponent>;

export const LikeButton: Story = {
  render: () => ({
    props: {
        buttonWidth: 24,
        buttonHeight: 24,
        isLiked: false
    },
  }),
};
