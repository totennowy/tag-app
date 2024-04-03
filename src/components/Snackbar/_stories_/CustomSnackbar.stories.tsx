import { StoryFn, Meta } from '@storybook/react';
import { ModelCustomSnackbar } from '../types/modelCustomSnackbar';
import CustomSnackbar from '../CustomSnackbar';

export default {
  title: 'Components/CustomSnackbar',
  component: CustomSnackbar,
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success']
    }
  }
} as Meta;

const Template: StoryFn<ModelCustomSnackbar> = (args) => <CustomSnackbar {...args} />;

export const Error = Template.bind({});
Error.args = {
  open: true,
  message: 'Error message',
  severity: 'error',
  onClose: () => {}
};

export const Warning = Template.bind({});
Warning.args = {
  open: true,
  message: 'Warning message',
  severity: 'warning',
  onClose: () => {}
};

export const Info = Template.bind({});
Info.args = {
  open: true,
  message: 'Info message',
  severity: 'info',
  onClose: () => {}
};

export const Success = Template.bind({});
Success.args = {
  open: true,
  message: 'Success message',
  severity: 'success',
  onClose: () => {}
};
