import { createContext, useContext, useState, ReactNode } from 'react';

type FilterContextType = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used inside FilterProvider');
  return context;
};
