import type { Meta, StoryObj } from '@storybook/angular';
import { StoryBannerComponent } from './story-banner.component';

const meta: Meta<StoryBannerComponent> = {
  title: 'App/Story Banner',
  component: StoryBannerComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<StoryBannerComponent>;

export const StoryBanner: Story = {
};
