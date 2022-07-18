import { FilterType } from '../types/filter'
import { ProductInterface, ProductInterfaceWithPrice } from '../types/product'

const process = (value: string) => value.split(' ').join('_')

const generateSearchParamsFromFilterValues = (
  filterValues: FilterType = {}
) => {
  const urlSearchParams = new URLSearchParams()
  Object.keys(filterValues).forEach((filterValue) => {
    if (filterValues[filterValue]) {
      urlSearchParams.set(filterValue, process(filterValues[filterValue]))
    }
  })
  return urlSearchParams
}

const addFakePrices = (
  products: ProductInterface[]
): ProductInterfaceWithPrice[] =>
  products.map((product) => ({
    ...product,
    price: Math.round(Math.random() * 15 + 5),
  }))

const getProducts = (
  filterValues: FilterType,
  page: number
): Promise<ProductInterface[]> => {
  const urlSearchParams = generateSearchParamsFromFilterValues(filterValues)
  urlSearchParams.set('page', page.toString())

  return fetch(
    `https://api.punkapi.com/v2/beers?${urlSearchParams.toString()}`,
    { method: 'GET' }
  )
    .then((res) => res.json())
    .then(addFakePrices)
}

export default getProducts
