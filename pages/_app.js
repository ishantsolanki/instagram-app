import '../styles/globals.css'
import { FilterContextProvider } from '../context/filter'
import { BasketContextProvider } from '../context/basket'

function MyApp({ Component, pageProps }) {
  return (
    <FilterContextProvider>
      <BasketContextProvider>
        <Component {...pageProps} />
      </BasketContextProvider>
    </FilterContextProvider>
  )
}

export default MyApp
