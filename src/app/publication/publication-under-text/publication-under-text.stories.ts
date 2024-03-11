import { Meta, StoryObj } from '@storybook/angular';
import { PublicationUnderTextComponent } from './publication-under-text.component';

const meta: Meta<PublicationUnderTextComponent> = {
  title: 'Components/Publication Under Text',
  component: PublicationUnderTextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PublicationUnderTextComponent>;

export const PublicationUnderText: Story = {
    args: {
        likes: 3,
        whoLiked: [],
        userName: 'daisymaggy',
        caption: 'nouvelle photo de profil ! \n \n #newprofilepic #paris #selfie',
        language: 'fr',
        commentsStatistics: 8,
    }
};
