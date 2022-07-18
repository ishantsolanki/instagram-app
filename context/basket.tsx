import { createContext, Dispatch, useReducer } from 'react'
import { ProductInterfaceWithPrice } from '../types/product'

interface Action {
  type: 'ADD'
  payload: ProductInterfaceWithPrice
}

const BasketContext = createContext<
  [ProductInterfaceWithPrice[], Dispatch<Action>]
>([[], () => null])

const basketReducer = (basket: ProductInterfaceWithPrice[], action: Action) => {
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
