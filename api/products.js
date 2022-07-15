const getBeers = () =>
  fetch("https://api.punkapi.com/v2/beers", { method: "GET" }).then((res) =>
    res.json()
  );

export default getBeers;
