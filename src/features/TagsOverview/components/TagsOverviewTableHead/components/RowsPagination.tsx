import { FC } from 'react';
import { Pagination, TableCell } from '@mui/material';
import useRowsPagination from '../hooks/useRowsPagination';

const RowsPagination: FC = () => {
  const { handleChange, count, currentPage } = useRowsPagination();
  return (
    <TableCell>
      <Pagination count={count} page={currentPage} onChange={handleChange} />
    </TableCell>
  );
};

export default RowsPagination;
