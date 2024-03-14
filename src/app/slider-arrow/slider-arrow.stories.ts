import type { Meta, StoryObj } from '@storybook/angular';

import { SliderArrowComponent } from './slider-arrow.component';

const meta: Meta<SliderArrowComponent> = {
    title: 'Components/Slider Arrow',
    component: SliderArrowComponent,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<SliderArrowComponent>;

export const Left: Story = {
    args: {
        direction: 'left',
    }
};

export const Right: Story = {
    args: {
        direction: 'right',
    }
};
