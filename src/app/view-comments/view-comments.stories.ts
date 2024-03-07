import { Meta, StoryObj } from '@storybook/angular';
import { ViewCommentsComponent } from './view-comments.component';

const meta: Meta<ViewCommentsComponent> = {
  title: 'Components/View Comments',
  component: ViewCommentsComponent,
};

export default meta;
type Story = StoryObj<ViewCommentsComponent>;

export const ViewComments: Story = {
    args: {
        commentsStatistics: 38
    }
};

