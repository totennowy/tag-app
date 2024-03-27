import { Box, Table, TableContainer, Typography } from '@mui/material';
import TagsOverviewTableHead from './components/TagsOverviewTableHead/TagsOverviewTableHead';
import TagsOverviewTableBody from './components/TagsOverviewTableBody/TagsOverviewTableBody';
import TagsOverviewTableFooter from './components/TagsOverviewTableFooter/TagsOverviewTableFooter';

const TagsOverview = () => {
  return (
    <Box>
      <Typography fontSize="28px" fontWeight="700">
        Tags Overview
      </Typography>
      <TableContainer sx={{ paddingTop: '60px' }}>
        <Table>
          <TagsOverviewTableHead />

          <TagsOverviewTableBody />

          <TagsOverviewTableFooter />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TagsOverview;
