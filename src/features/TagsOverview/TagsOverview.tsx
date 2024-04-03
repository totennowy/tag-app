import { Box, Table, Typography } from '@mui/material';
import TagsOverviewTableHead from './components/TagsOverviewTableHead/TagsOverviewTableHead';
import TagsOverviewTableBody from './components/TagsOverviewTableBody/TagsOverviewTableBody';
import TagsOverviewTableFooter from './components/TagsOverviewTableFooter/TagsOverviewTableFooter';
import TableLoader from '../../components/TableLoader/TableLoader';
import useTagsOverview from './hooks/useTagsOverview';

const TagsOverview = () => {
  const { isLoading } = useTagsOverview();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        height: '100%',
        overflow: 'visible'
      }}
    >
      <Typography fontSize="28px" fontWeight="700" paddingBottom={4}>
        Tags Overview
      </Typography>
      <TableLoader isLoading={isLoading}>
        <Table sx={{ border: '2px solid rgba(224, 224, 224, 1)' }}>
          <TagsOverviewTableHead />

          <TagsOverviewTableBody />

          <TagsOverviewTableFooter />
        </Table>
      </TableLoader>
    </Box>
  );
};

export default TagsOverview;
