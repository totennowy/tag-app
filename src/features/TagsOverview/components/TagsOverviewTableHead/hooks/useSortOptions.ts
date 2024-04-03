import { useTagsOverviewContext } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';
import { SelectChangeEvent } from '@mui/material';

const useSortOptions = () => {
  const { setSortOptions } = useTagsOverviewContext();

  const handleChangeSelectValue = (e: SelectChangeEvent) => {
    setSortOptions(e.target.value as 'name' | 'popular' | 'activity');
  };

  return {
    handleChangeSelectValue
  };
};

export default useSortOptions;
