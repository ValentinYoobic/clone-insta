import type { Meta, StoryObj } from '@storybook/angular';
import { NoHoverIconButtonComponent } from './no-hover-icon-button.component';

const meta: Meta<NoHoverIconButtonComponent> = {
  title: 'Components/Icon Button',
  component: NoHoverIconButtonComponent,
};

export default meta  ;
type Story = StoryObj<NoHoverIconButtonComponent>;

export const MeatballsButton: Story = {
  render: () => ({
    props: {
        iconType: 'Meatballs',
        defaultIconColor: 'black',
        iconSize: 'medium',
        buttonWidth: 24,
        buttonHeight: 24
    },
  }),
};

export const FilledHeartButton: Story = {
  render: () => ({
    props: {
        iconType: 'Heart-Filled',
        defaultIconColor: '#FF3040',
        iconSize: 'medium',
        buttonWidth: 24,
        buttonHeight: 24
    },
  }),
};

