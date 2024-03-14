import type { Meta, StoryObj } from '@storybook/angular';

import { ProfilePictureComponent } from './profile-picture.component';

const meta: Meta<ProfilePictureComponent>= {
    title: 'Components/Profile Picture',
    component: ProfilePictureComponent,
    tags: ['autodocs'],
    // argTypes: {
    //     profilePictureUrl: {
    //       control: 'assets/profileImage.jpeg',
    //     },
};

export default meta;
type Story = StoryObj<ProfilePictureComponent>;
export const XXS: Story = {
    args: {
        size: 'xxs',
    }
}

export const XS: Story = {
    args: {
        size: 'xs',
    }
}

export const Small: Story = {
    args: {
        size: 'small',
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
    }
}

export const Large: Story = {
    args: {
        size: 'large',
    }
}

export const Story: Story = {
    args: {
        hasStory: true,
    }
}

export const ViewedStory: Story = {
    args: {
        viewedStory: true,
    }
}