import { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

// Meta information about the component
const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  args: {
    iconType: 'Heart',
    size: 'medium',
    color: 'black',
  },
};

export default meta;
type Story = StoryObj<IconComponent>;

// Story for the heart icon with medium size and black color
export const HeartIconMedium: Story = {
  args: {
    iconType: 'Heart',
    size: 'medium',
    color: 'black',
  },
};

export const HeartIconSmall: Story = {
    args: {
      iconType: 'Heart',
      size: 'small',
      color: 'black',
    },
  };

export const AddIcon: Story = {
    args: {
      iconType: 'Add',
      size: 'medium',
      color: 'black',
    },
  };

export const CompassIcon: Story = {
args: {
    iconType: 'Compass',
    size: 'medium',
    color: 'blue',
},
};

export const HomeIcon: Story = {
args: {
    iconType: 'Home',
    size: 'medium',
    color: 'blue',
},
};

export const SearchIcon: Story = {
args: {
    iconType: 'Search',
    size: 'medium',
    color: 'blue',
    },
};

export const SendIcon: Story = {
    args: {
        iconType: 'Send',
        size: 'medium',
        color: 'blue',
    },
};

export const VideoIcon: Story = {
    args: {
        iconType: 'Video',
        size: 'medium',
        color: 'blue',
    },
};

export const ThreadsIcon: Story = {
    args: {
        iconType: 'Threads',
        size: 'medium',
        color: 'blue',
    },
};

export const BurgerIcon: Story = {
    args: {
        iconType: 'Burger',
        size: 'medium',
        color: 'blue',
    },
};

export const InstagramIcon: Story = {
    args: {
        iconType: 'Instagram',
        size: 'medium',
        color: 'blue',
    },
};

export const FiledHeartIcon: Story = {
    args: {
        iconType: 'Heart-Filled',
        size: 'medium',
        color: 'blue',
    },
};

export const MeatballsIcon: Story = {
    args: {
        iconType: 'Meatballs',
        size: 'medium',
        color: 'blue',
    },
};
export const ChatBubbleIcon: Story = {
    args: {
        iconType: 'ChatBubble',
        size: 'medium',
        color: 'blue',
    },
};
export const SaveIcon: Story = {
    args: {
        iconType: 'Save',
        size: 'medium',
        color: 'blue',
    },
};
export const FilledHomeIcon: Story = {
    args: {
        iconType: 'Home-Filled',
        size: 'medium',
        color: 'blue',
    },
};
export const EmojiIcon: Story = {
    args: {
        iconType: 'Emoji',
        size: 'medium',
        color: 'blue',
    },
};
export const CloseIcon: Story = {
    args: {
        iconType: 'Close',
        size: 'medium',
        color: 'blue',
    },
};
export const FilledCompassIcon: Story = {
    args: {
        iconType: 'Compass-Filled',
        size: 'medium',
        color: 'blue',
    },
};
export const FilledVideoIcon: Story = {
    args: {
        iconType: 'Video-Filled',
        size: 'medium',
        color: 'blue',
    },
};
export const SendFilledIcon: Story = {
    args: {
        iconType: 'Send-Filled',
        size: 'medium',
        color: 'blue',
    },
};
export const SaveFilledIcon: Story = {
    args: {
        iconType: 'Save-Filled',
        size: 'medium',
        color: 'blue',
    },
};
