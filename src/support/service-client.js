function getPlacesQuery(filters = {}) {
  const { minPrice, maxPrice, keyword, city = 'tijuana' } = filters;

  return `{
    realState(
      first: 100
      city: "${city}"
      ${minPrice ? `minPrice: ${minPrice}` : ""}
      ${maxPrice ? `maxPrice: ${maxPrice}` : ""}
      ${keyword ? `keyword: "${keyword}"` : ""}
    ) {
      price
      currency
      description
      images
      url
      address
    }
  }`;
}

async function getPlaces() {
  const payload = {
    query: getPlacesQuery()
  }

  const result = await fetch('process.API_URL/graphiql', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const { data: { realState } } = await result.json()

  return realState
}


export {
  getPlaces
}
