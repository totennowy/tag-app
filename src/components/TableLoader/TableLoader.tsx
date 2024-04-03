import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ModelTableLoader } from './types/modelTableLoader';

const TableLoader: FC<ModelTableLoader> = ({ isLoading, children }) => {
  return (
    <Box position="relative">
      {children}
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 2
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default TableLoader;
