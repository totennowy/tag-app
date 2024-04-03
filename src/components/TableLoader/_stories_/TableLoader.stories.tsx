import { StoryFn, Meta } from '@storybook/react';
import TableLoader from '../TableLoader';
import { ModelTableLoader } from '../types/modelTableLoader';

export default {
  title: 'Components/TableLoader',
  component: TableLoader
} as Meta;

const Template: StoryFn<ModelTableLoader> = (args) => <TableLoader {...args} />;

export const LoadingState = Template.bind({});
LoadingState.args = {
  isLoading: true,
  children: (
    <div style={{ width: '100%', height: '300px', backgroundColor: '#eee' }}>
      Placeholder for table content
    </div>
  )
};

export const LoadedState = Template.bind({});
LoadedState.args = {
  isLoading: false,
  children: (
    <div style={{ width: '100%', height: '300px', backgroundColor: '#eee' }}>
      Placeholder for table content
    </div>
  )
};
