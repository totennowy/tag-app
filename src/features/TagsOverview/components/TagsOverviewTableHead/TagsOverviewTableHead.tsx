import { FC } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import RowsQuantity from './components/RowsQuantity';

const TagsOverviewTableHead: FC = () => {
  return (
    <TableHead>
      <RowsQuantity />
      <TableRow>
        <TableCell sx={{ fontSize: '18px', color: '#000000', fontWeight: '700' }}>
          Nazwa tagu
        </TableCell>
        <TableCell sx={{ fontSize: '18px', color: '#000000', fontWeight: '700' }}>
          Powiązane posty
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TagsOverviewTableHead;
