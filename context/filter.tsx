import { createContext, useState } from 'react'
import { FilterType, FilterContextType } from '../types/filter'

const initialValue: FilterContextType = [{}, () => null]

const FilterContext = createContext<FilterContextType>(initialValue)

interface FilterContextProviderProps {
  children: React.ReactNode
}
export const FilterContextProvider: React.FC<FilterContextProviderProps> = ({
  children,
}) => {
  const filterState = useState<FilterType>({})

  return (
    <FilterContext.Provider value={filterState}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
