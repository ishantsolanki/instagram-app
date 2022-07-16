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

const getBeers = (filterValues) => {
  const urlSearchParams = generateSearchParamsFromFilterValues(filterValues)

  return fetch(
    `https://api.punkapi.com/v2/beers?${urlSearchParams.toString()}`,
    { method: 'GET' }
  ).then((res) => res.json())
}

export default getBeers
