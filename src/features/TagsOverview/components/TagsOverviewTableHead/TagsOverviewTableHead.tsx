import { FC } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { useTagsOverviewContext } from '../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import RowsQuantity from './components/RowsQuantity';
import RowsPagination from './components/RowsPagination';
import SortButton from '../../../../components/SortButton/SortButton';
import useTagsOverviewTableHead from './hooks/useTagsOverviewTableHead';
import SortOptions from './components/SortOptions';

const TagsOverviewTableHead: FC = () => {
  const { sortType } = useTagsOverviewContext();
  const { handleSortType } = useTagsOverviewTableHead();

  return (
    <TableHead>
      <TableRow>
        <SortOptions />
        <RowsPagination />
        <RowsQuantity />
      </TableRow>

      <TableRow>
        <TableCell
          colSpan={2}
          sx={{
            fontSize: '18px',
            color: '#000000',
            fontWeight: '700',
            position: 'sticky',
            top: '60px',
            zIndex: '2',
            background: 'white'
          }}
        >
          Tag name <SortButton sortType={sortType} onClick={handleSortType} />
        </TableCell>
        <TableCell
          sx={{
            fontSize: '18px',
            color: '#000000',
            fontWeight: '700',
            position: 'sticky',
            top: '60px',
            zIndex: '2',
            background: 'white'
          }}
        >
          Number of related posts
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TagsOverviewTableHead;
