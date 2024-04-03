import { useTagsOverviewContext } from '../../../../../contexts/TagsOverviewContext/TagsOverviewContext';

const useTagsOverviewTableHead = () => {
  const { sortType, setSortType } = useTagsOverviewContext();

  const handleSortType = () => {
    setSortType(sortType === 'asc' ? 'desc' : 'asc');
  };

  return {
    handleSortType
  };
};

export default useTagsOverviewTableHead;
