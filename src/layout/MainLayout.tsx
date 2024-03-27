import { FC } from 'react';
import { Box } from '@mui/material';
import { ModelMainLayout } from './types/modelMainLayout';

const MainLayout: FC<ModelMainLayout> = ({ children }) => {
  return (
    <Box
      sx={{
        maxHeight: '100vh',
        display: 'flex',
        height: '100%',
        padding: '40px'
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
