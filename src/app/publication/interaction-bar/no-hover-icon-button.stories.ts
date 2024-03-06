import type { Meta, StoryObj } from '@storybook/angular';
import { InteractionBarComponent } from './interaction-bar.component';

const meta: Meta<InteractionBarComponent> = {
  title: 'Components/Interaction Bar',
  component: InteractionBarComponent,
};

export default meta  ;
type Story = StoryObj<InteractionBarComponent>;

export const InteractionBar: Story = {
  render: () => ({
    props: {
    },
  }),
};


