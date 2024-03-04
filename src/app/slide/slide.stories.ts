import type { Meta, StoryObj } from '@storybook/angular';

import { SlideComponent } from './slide.component';

const meta: Meta<SlideComponent> = {
    title: 'App/Slide',
    component: SlideComponent,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<SlideComponent>;

export const Story: Story = {
    args: {
        type: 'story'
    }
};

export const PicturePost: Story = {
    args: {
        type: 'picturePost'
    }
};
