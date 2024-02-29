import { Meta, StoryObj } from '@storybook/angular';
import { NavigationBarComponent } from './navigation-bar.component';

// Meta information about the component
const meta: Meta<NavigationBarComponent> = {
  title: 'Components/Navigation Bar',
  component: NavigationBarComponent,
};

export default meta;
type Story = StoryObj<NavigationBarComponent>;

// Story for the primary heart button with the label 'notifications'
export const NavigationBar: Story = {
};
