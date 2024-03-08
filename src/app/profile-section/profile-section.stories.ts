import { Meta, StoryObj } from '@storybook/angular';
import { ProfileSectionComponent } from './profile-section.component';
import { User } from '../user';
const mainUser: User = {
  id: 1,
  userName: 'MJ_Official',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false,
  subTitle: 'Michael Jackson'
}

const mySuggestedUsers: User[] = [
    {
  id: 2,
  userName: 'JohnnyLeBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 3,
  userName: 'JohnnyLeGrosBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 4,
  userName: 'JohnnyLeMégaBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 5,
  userName: 'JohnnyLeGigaBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: false,
  isFollowed: false
},
    {
  id: 6,
  userName: 'JohnnyLeTeraBg',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false,
  subTitle: '7 Bilion Followers'
},
]

// Meta information about the component
const meta: Meta<ProfileSectionComponent> = {
  title: 'Components/Profile Section',
  component: ProfileSectionComponent,
};

export default meta;
type Story = StoryObj<ProfileSectionComponent>;

export const ProfileSection: Story = {
  args: {
    activeUser: mainUser,
    suggestedUsers: mySuggestedUsers
  },
};
