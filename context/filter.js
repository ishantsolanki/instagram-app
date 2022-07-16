import { createContext, useState } from 'react'

const initialValue = []

const FilterContext = createContext(initialValue)

export const FilterContextProvider = ({ children }) => {
  const filterState = useState([])

  return (
    <FilterContext.Provider value={filterState}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
