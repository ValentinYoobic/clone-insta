import type { Meta, StoryObj } from '@storybook/angular';
import { LikesPicturesComponent } from './likes-pictures.component';
import { User } from '../../user';
const meta: Meta<LikesPicturesComponent> = {
    title: 'Components/Likes Pictures',
    component: LikesPicturesComponent,
    tags: ['autodocs'],
}

const user1: User = {
    id: 1,
    userName: 'Michael_Jackson',
    hasStory: false,
    profilePhotoUrl: '/assets/profileImage.jpeg',
    isCertified: true,
    isFollowed: false
  }
  
const user2: User = {
    id: 2,
    userName: 'Marvin_Gaye',
    hasStory: false,
    profilePhotoUrl: '/assets/marvin_gaye.jpeg',
    isCertified: true,
    isFollowed: false
  }

const user3: User = {
    id: 3,
    userName: 'Lauren90',
    hasStory: false,
    profilePhotoUrl: '/assets/profileImage2.jpeg',
    isCertified: true,
    isFollowed: false
  }

export default meta;
type Story = StoryObj<LikesPicturesComponent>;

export const oneUser: Story = {
    args: {
        whoLiked: [user1],
    }
};

export const twoUsers: Story = {
    args: {
        whoLiked: [user1, user2],
    }
};

export const threeUsers: Story = {
    args: {
        whoLiked: [user1, user2, user3],
    }
};