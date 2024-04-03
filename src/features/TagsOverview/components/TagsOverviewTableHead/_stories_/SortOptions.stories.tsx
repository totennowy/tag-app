import { StoryFn, Meta } from '@storybook/react';
import { TagsOverviewProvider } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import SortOptions from '../components/SortOptions';

export default {
  title: 'Components/SortOptions',
  component: SortOptions,
  decorators: [
    (Story) => (
      <TagsOverviewProvider>
        <Story />
      </TagsOverviewProvider>
    )
  ]
} as Meta;

const Template: StoryFn = () => <SortOptions />;

export const Default = Template.bind({});
