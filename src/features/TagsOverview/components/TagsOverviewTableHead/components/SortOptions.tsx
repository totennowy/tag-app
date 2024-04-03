import { Box, FormControl, MenuItem, Select, TableCell, Typography } from '@mui/material';
import { useTagsOverviewContext } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import useSortOptions from '../hooks/useSortOptions';

const SortOptions = () => {
  const { sortOptions } = useTagsOverviewContext();
  const { handleChangeSelectValue } = useSortOptions();

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Typography fontSize="12px" fontWeight="500">
          Sort by
        </Typography>
        <FormControl variant="outlined" size="small">
          <Select value={sortOptions} onChange={handleChangeSelectValue} sx={{ fontSize: '12px' }}>
            <MenuItem value="name" sx={{ fontSize: '12px' }}>
              Name
            </MenuItem>
            <MenuItem value="popular" sx={{ fontSize: '12px' }}>
              Popular
            </MenuItem>
            <MenuItem value="activity" sx={{ fontSize: '12px' }}>
              Acitivity
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </TableCell>
  );
};

export default SortOptions;
