import { useQuery } from '@tanstack/react-query';
import { useTagsOverviewContext } from '../../../contexts/TagsOverviewContext/TagsOverviewContext';
import getTags from '../services/getTags';
import { useEffect } from 'react';

const useTagsOverview = () => {
  const { tableRowsQuantity, currentPage, setTagsData, setHasMoreData } = useTagsOverviewContext();

  const { data, isSuccess } = useQuery({
    queryKey: ['tags', tableRowsQuantity, currentPage],
    queryFn: () => getTags(tableRowsQuantity, currentPage)
  });

  useEffect(() => {
    if (isSuccess && data) {
      setTagsData(data.items);
      setHasMoreData(data.has_more);
    }
  }, [data, isSuccess, setTagsData, setHasMoreData]);
};

export default useTagsOverview;
