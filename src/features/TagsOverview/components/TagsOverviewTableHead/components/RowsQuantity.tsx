import { FC } from 'react';
import { TableRow, Typography } from '@mui/material';
import useRowsQuantity from '../hooks/useRowsQuantity';

const RowsQuantity: FC = () => {
  const { handleQuantityChange, inputValue, handleOnBlur, handleOnEnterPress } = useRowsQuantity();

  return (
    <TableRow
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
    </TableRow>
  );
};

export default RowsQuantity;
