import { AlertColor } from '@mui/material';

export type ModelCustomSnackbar = {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
};
