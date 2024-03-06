import type { Meta, StoryObj } from '@storybook/angular';
import { LightenHoverIconButtonComponent } from './lighten-hover-icon-button.component';

const meta: Meta<LightenHoverIconButtonComponent> = {
  title: 'Components/Icon Button',
  component: LightenHoverIconButtonComponent,
};


export default meta  ;
type Story = StoryObj<LightenHoverIconButtonComponent>;

export const LightenHoverHeartButton: Story = {
  render: () => ({
    props: {
        iconType: 'Heart',
        defaultIconColor: 'black',
        iconSize: 'medium',
        buttonWidth: 24,
        buttonHeight: 24
    },
  }),
};

