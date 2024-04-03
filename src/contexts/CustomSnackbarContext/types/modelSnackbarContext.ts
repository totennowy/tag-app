import { AlertColor } from '@mui/material';

export type ModelSnackbarContext = {
  showSnackbar: (message: string, severity?: AlertColor) => void;
};
