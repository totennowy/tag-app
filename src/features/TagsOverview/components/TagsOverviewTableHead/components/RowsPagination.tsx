import { FC } from 'react';
import { Box, Pagination, TableCell } from '@mui/material';
import useRowsPagination from '../hooks/useRowsPagination';

const RowsPagination: FC = () => {
  const { handleChange, count, currentPage } = useRowsPagination();
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '360px',
          '& .MuiPaginationItem-root': {
            fontSize: '14px'
          }
        }}
      >
        <Pagination count={count} page={currentPage} onChange={handleChange} />
      </Box>
    </TableCell>
  );
};

export default RowsPagination;
