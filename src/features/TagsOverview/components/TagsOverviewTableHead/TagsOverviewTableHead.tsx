import { FC } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import RowsQuantity from './components/RowsQuantity';
import RowsPagination from './components/RowsPagination';

const TagsOverviewTableHead: FC = () => {
  return (
    <TableHead>
      <TableRow>
        <RowsQuantity />
        <RowsPagination />
      </TableRow>

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
