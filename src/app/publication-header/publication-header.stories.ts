import { Meta, StoryObj } from '@storybook/angular';
import { PublicationHeaderComponent } from './publication-header.component';
import { User } from '../user';

const user1: User = {
  id: 1,
  userName: 'Michael_Jackson',
  hasStory: false,
  profilePictureUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false
}

// Meta information about the component
const meta: Meta<PublicationHeaderComponent> = {
  title: 'Components/PublicationHeader',
  component: PublicationHeaderComponent,
};

export default meta;
type Story = StoryObj<PublicationHeaderComponent>;

export const PublicationHeader: Story = {
  args: {
    user: user1,
    publicationDate: ((new Date(2024, 0, 1)).getTime()),
    subTitleType: 'Audio',
    audioName: 'Billie Jean',
    artistName: 'Michael Jackson',
    location: 'Heaven'
  },
};
