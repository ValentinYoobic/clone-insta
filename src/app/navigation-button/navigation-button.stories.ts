import { Meta, StoryObj } from '@storybook/angular';
import { NavigationButtonComponent } from './navigation-button.component';

// Meta information about the component
const meta: Meta<NavigationButtonComponent> = {
  title: 'Components/NavigationButton',
  component: NavigationButtonComponent,
  args: {
    label: 'notifications',
    icon: 'Heart',
    active: true,
  },
};

export default meta;
type Story = StoryObj<NavigationButtonComponent>;

// Story for the primary heart button with the label 'notifications'
export const HeartButton: Story = {
  args: {
    label: 'Notifications',
    icon: 'Heart',
    active: true,
  },
};

export const SendButton: Story = {
  args: {
    label: 'Messages',
    icon: 'Send',
    active: true,
  },
};
