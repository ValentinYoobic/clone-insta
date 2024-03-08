import { Meta, StoryObj } from '@storybook/angular';
import { PublicationComponent } from './publication.component';
import { User } from '../user';
const user1: User = {
  id: 1,
  userName: 'Michael_Jackson',
  hasStory: false,
  profilePhotoUrl: '/assets/profileImage.jpeg',
  isCertified: true,
  isFollowed: false
}

// Meta information about the component
const meta: Meta<PublicationComponent> = {
  title: 'Components/Publication',
  component: PublicationComponent,
};

export default meta;
type Story = StoryObj<PublicationComponent>;

export const Publication: Story = {
  args: {
    publication: {
        id: 1,
        publisher: user1,
        publicationDate: ((new Date(2024, 0, 1)).getTime()),
        subtitleType: 'Audio',
        audioName: 'Billie Jean',
        artistName: 'Michael Jackson',
        location: 'Heaven',
        likers: [user1,user1,user1],
        caption: 'nouvelle photo de profil ! \n \n #newprofilepic #paris #selfie',
        language: 'fr',
        comments: ['oui', 'génail'],
        content: ['/assets/profileImage.jpeg']
    }
  },
};
