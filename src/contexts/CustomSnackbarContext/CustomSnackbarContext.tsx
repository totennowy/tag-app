import { FC, createContext, useContext, useState, ReactNode } from 'react';
import { AlertColor } from '@mui/material';
import CustomSnackbar from '../../components/Snackbar/CustomSnackbar';
import { ModelSnackbarContext } from './types/modelSnackbarContext';

const CustomSnackbarContext = createContext<ModelSnackbarContext | undefined>(undefined);

export const CustomSnackbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [snackbarInfo, setSnackbarInfo] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'info' as AlertColor
  });

  const showSnackbar = (message: string, severity: AlertColor = 'info') => {
    setSnackbarInfo({ open: true, message, severity });
  };

  const closeSnackbar = () => {
    setSnackbarInfo({ ...snackbarInfo, open: false });
  };

  return (
    <CustomSnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <CustomSnackbar
        open={snackbarInfo.open}
        message={snackbarInfo.message}
        severity={snackbarInfo.severity}
        onClose={closeSnackbar}
      />
    </CustomSnackbarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCustomSnackbar = () => {
  const context = useContext(CustomSnackbarContext);
  if (context === undefined) {
    throw new Error('iseCustomSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
