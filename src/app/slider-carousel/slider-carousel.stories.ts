import type { Meta, StoryObj } from '@storybook/angular';

import { SliderCarouselComponent } from './slider-carousel.component';

const meta: Meta<SliderCarouselComponent> = {
  title: 'App/Slider Carousel',
  component: SliderCarouselComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SliderCarouselComponent>;

export const StorySlider: Story = {
  args: {
    type: 'story',
    slides: [
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user1',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user2',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user3',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user4',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user5',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user6',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user7',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user8',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user9',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user10',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user11',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user12',
      },
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'story',
        userName: 'user13',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'story',
        userName: 'user14',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user15',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user16',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'story',
        userName: 'user17',
      },
    ],
  },
};

export const PostSlider: Story = {
  args: {
    type: 'picturePost',
    slides: [
      {
        pictureUrl: 'assets/profileImage.jpeg',
        type: 'picturePost',
        userName: 'michael_jackson',
      },
      {
        pictureUrl: 'assets/profileImage2.jpeg',
        type: 'picturePost',
        userName: 'lauren90',
      },
      {
        pictureUrl: 'assets/marvin_gaye.jpeg',
        type: 'picturePost',
        userName: 'marvin_gaye',
      },
    ],
  },
};
