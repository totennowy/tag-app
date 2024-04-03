import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTagsOverviewContext } from '../../../contexts/TagsOverviewContext/TagsOverviewContext';
import { useCustomSnackbar } from '../../../contexts/CustomSnackbarContext/CustomSnackbarContext';
import getTags from '../services/getTags';

const useTagsOverview = () => {
  const { tableRowsQuantity, currentPage, sortType, sortOptions, setTagsData, setHasMoreData } =
    useTagsOverviewContext();
  const { showSnackbar } = useCustomSnackbar();

  const { data, isSuccess, isLoading, status } = useQuery({
    queryKey: ['tags', tableRowsQuantity, currentPage, sortType, sortOptions],
    queryFn: () => getTags(tableRowsQuantity, currentPage, sortType, sortOptions)
  });

  useEffect(() => {
    if (isSuccess && data) {
      setTagsData(data.items);
      setHasMoreData(data.has_more);
      showSnackbar('Data has been successfully loaded', 'success');
    } else if (status === 'error') {
      showSnackbar('An error occurred', 'error');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isSuccess, setTagsData, setHasMoreData, status]);

  return {
    isLoading
  };
};

export default useTagsOverview;
