import { FC } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useTagsOverviewContext } from '../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import { ModelTagsData } from '../../../../contexts/TagsOverviewContext/types/modelTagsOverviewContext';
import useTagsOverview from '../../hooks/useTagsOverview';

const TagsOverviewTableBody: FC = () => {
  const { tagsData } = useTagsOverviewContext();

  useTagsOverview();

  return (
    <TableBody>
      {tagsData?.map((tag: ModelTagsData, index: number) => (
        <TableRow
          key={index}
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          <TableCell colSpan={2}>{tag.name}</TableCell>
          <TableCell>{tag.count}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TagsOverviewTableBody;
