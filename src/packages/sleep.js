module.exports = {sleep}

const {delay} = require('../config.json')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
