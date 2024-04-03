export type ModelTagsData = {
  has_synonyms: boolean;
  is_moderator_only: false;
  is_required: false;
  count: number;
  name: string;
};

export type ModelTagsOverviewContext = {
  tableRowsQuantity: number;
  setTableRowsQuantity: (quantity: number) => void;
  tagsData: ModelTagsData[];
  setTagsData: (tags: ModelTagsData[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  hasMoreData: boolean;
  setHasMoreData: (hasMore: boolean) => void;
  sortType: 'asc' | 'desc';
  setSortType: (type: 'asc' | 'desc') => void;
  sortOptions: 'name' | 'popular' | 'activity';
  setSortOptions: (type: 'name' | 'popular' | 'activity') => void;
};
