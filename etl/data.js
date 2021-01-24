const fs = require('fs');
const debug = require('debug')('etl:data')

const { getPlaces } = require('./mint-service-client')

function load(filename, rawData) {
  const data = JSON.stringify(rawData);
  fs.writeFileSync(`./static/data/${filename}.json`, data);
}

async function saveHomepage() {
  const places = await getPlaces()

  load('homepage', places)
}

function createDirectory() {
  const dir = './static/data'

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

async function main() {
  createDirectory()

  await saveHomepage()
}


if (require.main === module) {
  main().then(() => {
    debug('data generated')
    process.exit(0);
  });
}
