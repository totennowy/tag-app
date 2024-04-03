import { FC } from 'react';
import { ModelCustomSnackbar } from './types/modelCustomSnackbar';
import { Alert, Snackbar } from '@mui/material';

const CustomSnackbar: FC<ModelCustomSnackbar> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
