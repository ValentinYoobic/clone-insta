import type { Meta, StoryObj } from '@storybook/angular';

import { LikesStatisticsComponent } from './likes-statistics.component';
import { User } from '../../user';
const meta: Meta<LikesStatisticsComponent> = {
    title: 'Components/Likes Statistics',
    component: LikesStatisticsComponent,
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
type Story = StoryObj<LikesStatisticsComponent>;

export const LikesStatistics: Story = {
    args: {
        likes: 18000,
        whoLiked: [user1, user2, user2],
    }
};