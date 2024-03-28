import { ReactNode, createContext, useContext, useState } from 'react';
import { ModelTagsData, ModelTagsOverviewContext } from './types/modelTagsOverviewContext';

const TagsOverviewContext = createContext<ModelTagsOverviewContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTagsOverviewContext = () => {
  const context = useContext(TagsOverviewContext);
  if (context === undefined) {
    throw new Error('useTagsOverview must be used within a TagsOverviewProvider');
  }
  return context;
};

export const TagsOverviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tableRowsQuantity, setTableRowsQuantity] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tagsData, setTagsData] = useState<ModelTagsData[]>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);

  return (
    <TagsOverviewContext.Provider
      value={{
        tableRowsQuantity,
        setTableRowsQuantity,
        currentPage,
        setCurrentPage,
        tagsData,
        setTagsData,
        hasMoreData,
        setHasMoreData
      }}
    >
      {children}
    </TagsOverviewContext.Provider>
  );
};
