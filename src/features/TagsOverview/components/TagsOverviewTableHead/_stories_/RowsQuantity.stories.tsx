import { StoryFn, Meta } from '@storybook/react';
import { TagsOverviewProvider } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import RowsQuantity from '../components/RowsQuantity';

export default {
  title: 'Components/RowsQuantity',
  component: RowsQuantity,
  decorators: [
    (Story) => (
      <TagsOverviewProvider>
        <Story />
      </TagsOverviewProvider>
    )
  ]
} as Meta;

const Template: StoryFn<typeof RowsQuantity> = (args) => <RowsQuantity {...args} />;

export const Default = Template.bind({});
