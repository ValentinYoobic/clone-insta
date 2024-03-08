import { Meta, StoryObj } from '@storybook/angular';
import { ProfileCardComponent } from './profile-card.component';
import { User } from '../user';
const user1: User = {
  id: 1,
  userName: 'MJ_Official',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false
}

// Meta information about the component
const meta: Meta<ProfileCardComponent> = {
  title: 'Components/Profile Card',
  component: ProfileCardComponent,
};

export default meta;
type Story = StoryObj<ProfileCardComponent>;

export const ProfileCard: Story = {
  args: {
    user: user1,
    subTitle: 'Michael Jackson',
    interactionButtonType: 'Follow'
  },
};
