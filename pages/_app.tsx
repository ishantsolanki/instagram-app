import '../styles/globals.css'
import { FilterContextProvider } from '../context/filter'
import { BasketContextProvider } from '../context/basket'
import React from 'react'

interface MyAppProps {
  Component: React.ElementType
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => (
  <FilterContextProvider>
    <BasketContextProvider>
      <Component {...pageProps} />
    </BasketContextProvider>
  </FilterContextProvider>
)

export default MyApp
