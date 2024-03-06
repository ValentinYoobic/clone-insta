import { Meta, StoryObj } from '@storybook/angular';
import { PublicationCaptionComponent } from './publication-caption.component';

const meta: Meta<PublicationCaptionComponent> = {
  title: 'Components/Publication Caption',
  component: PublicationCaptionComponent,
};

export default meta;
type Story = StoryObj<PublicationCaptionComponent>;

export const FrenchCaption: Story = {
  args: {
    userName: 'christal_queen',
    caption: 'Le Christ, Copacabana, de la danse, des noix de coco, le Carnaval, un arbre géant, un match de foot, la famille et les amis 🇧🇷❤️',
    language: 'fr'
  },
};

export const LongCaption: Story = {
    args: {
      userName: 'christal_queen',
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel condimentum leo, a cursus odio. Aenean pulvinar nunc felis, eget ornare ex laoreet at. Sed mi eros, ultricies eget massa eget, tincidunt ullamcorper ex. Etiam pretium iaculis sodales. Nunc eget arcu nec neque ornare venenatis. Integer quis tortor sagittis, tincidunt arcu id, volutpat risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mauris enim, tincidunt eu gravida sed, aliquam vel eros. Duis elementum arcu accumsan, ullamcorper nisi ac, viverra massa. Curabitur vulputate pretium nisl, ultrices maximus justo. Nullam ultrices suscipit ante dignissim pharetra. Phasellus vitae purus volutpat, commodo nulla sit amet, sagittis mauris. Suspendisse lobortis accumsan nisi vel sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sagittis vel urna sit amet dictum. Phasellus tellus elit, maximus id leo ac, malesuada tristique augue. Ut et sodales tortor, ultricies dictum diam. Proin laoreet maximus nunc, sed dictum massa ultrices eu. Cras ac euismod metus. Duis scelerisque dignissim urna, eu convallis erat vulputate ut. Pellentesque gravida tincidunt vestibulum. Nulla molestie arcu eget placerat gravida. Vestibulum rhoncus tristique nunc sit amet sodales. Duis dictum molestie ante at scelerisque. Nunc lectus diam, ultricies sit amet suscipit vel, cursus mollis urna. Donec rutrum dui turpis, id scelerisque leo accumsan quis. Mauris euismod lectus id pulvinar scelerisque. Nulla nec tellus neque. Donec sit amet ultrices dolor. Phasellus vel tellus quis lacus sodales facilisis. Suspendisse efficitur tortor diam, a viverra quam elementum ac. Pellentesque sagittis sodales quam, non luctus est mattis eu. Nam feugiat molestie libero. In hac habitasse platea dictumst. Quisque vel convallis turpis, at molestie nibh. Aenean rutrum molestie eros, et feugiat ex commodo non. Vivamus id mattis magna. Maecenas vehicula a sapien a suscipit. In ut quam metus. Nullam eleifend arcu non facilisis dignissim. Aenean id consectetur urna. Vivamus ornare tempor libero, in scelerisque eros condimentum ac. Nam eget ultrices ante. Cras suscipit, odio vitae gravida venenatis, sapien sapien lacinia ex, porta egestas sapien nisl ac mi. Suspendisse potenti. Ut pulvinar, enim eget malesuada laoreet, justo turpis egestas est, vitae placerat massa eros eget nisl. Suspendisse in gravida quam. Sed sed nulla ornare, faucibus nibh nec, elementum tellus. Mauris a aliquet eros. Sed a arcu nec purus consequat pharetra ut eu erat. Vestibulum enim sapien, facilisis eget pulvinar in, interdum ut turpis. Suspendisse purus dui, aliquet at mauris at, tempus varius odio. Pellentesque pretium eu neque quis eleifend. Praesent id egestas est. Donec pulvinar dui quis hendrerit laoreet. Nulla a venenatis dolor. Vivamus posuere venenatis eros, vitae tincidunt dolor tempus vitae. Vivamus a leo finibus, lacinia turpis eu, pulvinar neque. Proin consequat fermentum enim, quis faucibus velit malesuada eu. Praesent vel velit quam. Integer et volutpat eros. Pellentesque tincidunt mauris eu elementum accumsan.",
      language: null
    },
  };

  export const EnglishCaption: Story = {
    args: {
      userName: 'cool-Influenza',
      caption: 'This is my new Covid Mask!!!',
      language: 'en'
    }
  }
