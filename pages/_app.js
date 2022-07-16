import '../styles/globals.css'
import { FilterContextProvider } from '../context/filter'

function MyApp({ Component, pageProps }) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  )
}

export default MyApp
