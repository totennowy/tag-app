import { ChangeEvent } from "react";
import { useTagsOverviewContext } from "../../../../../contexts/TagsOverviewContext/TagsOverviewContext";

const useRowsPagination = () => {
  const { currentPage, setCurrentPage, hasMoreData } = useTagsOverviewContext();

  const handleChange = (_e: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const MIN_PAGE_COUNT = 5;
  const count = Math.max(MIN_PAGE_COUNT, hasMoreData ? currentPage + 1 : currentPage);

  return {
    handleChange,
    count,
    currentPage
  };
};

export default useRowsPagination;
