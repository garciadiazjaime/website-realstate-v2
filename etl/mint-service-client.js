const fetch = require('node-fetch');

const config = require('./config')

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
      _id
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

  const result = await fetch(`${config.get('apiUrl')}/graphiql`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const { data: { realState } } = await result.json()

  return realState
}


module.exports = {
  getPlaces
}
