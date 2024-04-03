import { FC } from 'react';
import { Box, TableCell, Typography } from '@mui/material';
import useRowsQuantity from '../hooks/useRowsQuantity';

const RowsQuantity: FC = () => {
  const { handleQuantityChange, inputValue, handleOnBlur, handleOnEnterPress } = useRowsQuantity();

  return (
    <TableCell
      sx={{
        width: '33%',
        textAlign: 'center',
        position: 'sticky',
        top: '-2px',
        zIndex: '2',
        background: 'white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
        <Typography fontSize="12px" fontWeight="500">
          Rows per page
        </Typography>
        <input
          className="rowsQuantityInput"
          type="text"
          value={inputValue}
          onChange={handleQuantityChange}
          onBlur={handleOnBlur}
          onKeyDown={handleOnEnterPress}
        />
      </Box>
    </TableCell>
  );
};

export default RowsQuantity;
