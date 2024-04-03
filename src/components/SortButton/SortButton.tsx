import { FC } from 'react';
import { IconButton } from '@mui/material';
import { ModelSortButton } from './types/ModelSortButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SortButton: FC<ModelSortButton> = ({ sortType, onClick }) => {
  return (
    <IconButton onClick={onClick}>
      {sortType === 'desc' ? (
        <ArrowUpwardIcon fontSize="small" />
      ) : (
        <ArrowDownwardIcon fontSize="small" />
      )}
    </IconButton>
  );
};

export default SortButton;
