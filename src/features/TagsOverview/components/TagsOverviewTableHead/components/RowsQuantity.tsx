import { FC } from 'react';
import { TableCell, Typography } from '@mui/material';
import useRowsQuantity from '../hooks/useRowsQuantity';

const RowsQuantity: FC = () => {
  const { handleQuantityChange, inputValue, handleOnBlur, handleOnEnterPress } = useRowsQuantity();

  return (
    <TableCell
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
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
    </TableCell>
  );
};

export default RowsQuantity;
