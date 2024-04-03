import { StoryFn, Meta } from '@storybook/react';
import { TagsOverviewProvider } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import RowsPagination from '../components/RowsPagination';

export default {
  title: 'Components/RowsPagination',
  component: RowsPagination,
  decorators: [
    (Story) => (
      <TagsOverviewProvider>
        <Story />
      </TagsOverviewProvider>
    )
  ]
} as Meta;

const Template: StoryFn = () => <RowsPagination />;

export const Default = Template.bind({});
