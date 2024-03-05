import { Meta, StoryObj } from '@storybook/angular';
import { NavigationButtonComponent } from './navigation-button.component';

// Meta information about the component
const meta: Meta<NavigationButtonComponent> = {
  title: 'Components/NavigationButton',
  component: NavigationButtonComponent,
  args: {
    label: 'notifications',
    iconType: 'Heart',
    active: true,
  },
};

export default meta;
type Story = StoryObj<NavigationButtonComponent>;

// Story for the primary heart button with the label 'notifications'
export const HeartButton: Story = {
  args: {
    label: 'Notifications',
    iconType: 'Heart',
    active: true,
  },
};

export const SendButton: Story = {
  args: {
    label: 'Messages',
    iconType: 'Send',
    active: true,
  },
};
