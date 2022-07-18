import { createContext, Dispatch, useReducer } from 'react'
import { BasketInterface } from '../types/basket'

interface Action {
  type: 'ADD'
  payload: BasketInterface
}

const BasketContext = createContext<[BasketInterface[], Dispatch<Action>]>([
  [],
  () => null,
])

const basketReducer = (basket: BasketInterface[], action: Action) => {
  if (action.type === 'ADD') {
    return [...basket, action.payload]
  }
  return []
}

interface BasketContextProviderProps {
  children: React.ReactNode
}

export const BasketContextProvider: React.FC<BasketContextProviderProps> = ({
  children,
}) => {
  const basketState = useReducer(basketReducer, [])

  return (
    <BasketContext.Provider value={basketState}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketContext
