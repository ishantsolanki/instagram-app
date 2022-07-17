const process = (value) => value?.split(' ').join('_')

const generateSearchParamsFromFilterValues = (filterValues = {}) => {
  const urlSearchParams = new URLSearchParams()
  Object.keys(filterValues).forEach((filterValue) => {
    if (filterValues[filterValue]) {
      urlSearchParams.set(filterValue, process(filterValues[filterValue]))
    }
  })
  return urlSearchParams
}

const addFakePrices = (products) =>
  products.map((product) => ({
    ...product,
    price: Math.round(Math.random() * 15 + 5),
  }))

const getBeers = (filterValues, page) => {
  const urlSearchParams = generateSearchParamsFromFilterValues(filterValues)
  urlSearchParams.set('page', page)

  return fetch(
    `https://api.punkapi.com/v2/beers?${urlSearchParams.toString()}`,
    { method: 'GET' }
  )
    .then((res) => res.json())
    .then(addFakePrices)
}

export default getBeers
