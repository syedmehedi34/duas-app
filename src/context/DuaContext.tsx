import React, { createContext, useContext, ReactNode } from 'react';
import { DuaCategory, Categories } from '../types/dua';
import duaData from '../data/duas';

interface DuaContextType {
  categories: DuaCategory[];
  getCategoryDuas: (category: Categories) => DuaCategory | undefined;
}

const DuaContext = createContext<DuaContextType | undefined>(undefined);

export const DuaProvider = ({ children }: { children: ReactNode }) => {
  const getCategoryDuas = (category: Categories) => {
    return duaData.find((c) => c.id === category);
  };

  return (
    <DuaContext.Provider value={{ categories: duaData, getCategoryDuas }}>
      {children}
    </DuaContext.Provider>
  );
};

export const useDua = () => {
  const context = useContext(DuaContext);
  if (!context) {
    throw new Error('useDua must be used within a DuaProvider');
  }
  return context;
};