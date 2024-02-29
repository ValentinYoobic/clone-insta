import type { Meta, StoryObj } from '@storybook/angular';

import {BannerComponent } from './banner.component';

const meta: Meta<BannerComponent> = {
  title: 'App/Banner',
  component: BannerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<BannerComponent>;

export const Test: Story = {

};
