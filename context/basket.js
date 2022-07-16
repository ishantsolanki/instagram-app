import { createContext, useReducer } from 'react'

const BasketContext = createContext()

const basketReducer = (basket, action) => {
  if (action.type === 'ADD') {
    return [...basket, action.payload]
  }
  return []
}

export const BasketContextProvider = ({ children }) => {
  const basketState = useReducer(basketReducer, [])

  return (
    <BasketContext.Provider value={basketState}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
