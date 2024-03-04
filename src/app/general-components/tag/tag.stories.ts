import { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';

// Meta information about the component
const meta: Meta<TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
};

export default meta;
type Story = StoryObj<TagComponent>;

// Story for the primary heart button with the label 'notifications'
export const CertifiedTag: Story = {
  args: {
    type: 'Certified',
    size: 'medium',
  },
};