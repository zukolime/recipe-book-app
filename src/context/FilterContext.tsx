import { createContext, useContext, useState, ReactNode } from 'react';

type FilterContextType = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  triggerRandom: boolean;
  setTriggerRandom: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [triggerRandom, setTriggerRandom] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{ activeFilter, setActiveFilter, triggerRandom, setTriggerRandom }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used inside FilterProvider');
  return context;
};
