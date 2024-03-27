import { ReactNode, createContext, useContext, useState } from 'react';
import { ModelTagsOverviewContext } from './types/modelTagsOverviewContext';

const TagsOverviewContext = createContext<ModelTagsOverviewContext | undefined>(undefined);

export const useTagsOverviewContext = () => {
  const context = useContext(TagsOverviewContext);
  if (context === undefined) {
    throw new Error('useTagsOverview must be used within a TagsOverviewProvider');
  }
  return context;
};

export const TagsOverviewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tableRowsQuantity, setTableRowsQuantity] = useState<number>(20);

  return (
    <TagsOverviewContext.Provider
      value={{
        tableRowsQuantity,
        setTableRowsQuantity
      }}
    >
      {children}
    </TagsOverviewContext.Provider>
  );
};
