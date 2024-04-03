import { StoryFn, Meta } from '@storybook/react';
import SortButton from '../SortButton';
import { ModelSortButton } from '../types/modelSortButton';

export default {
  title: 'Components/SortButton',
  component: SortButton
} as Meta;

const Template: StoryFn<ModelSortButton> = (args) => <SortButton {...args} />;

export const Ascending = Template.bind({});
Ascending.args = {
  sortType: 'asc',
  onClick: () => alert('Ascending sort activated')
};

export const Descending = Template.bind({});
Descending.args = {
  sortType: 'desc',
  onClick: () => alert('Descending sort activated')
};
