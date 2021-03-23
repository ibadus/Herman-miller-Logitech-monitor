module.exports = {logger};

const moment = require('moment');
const chalk = require('chalk');

function logger(text, color = "white") {
  console.log(`${chalk.cyan('[Shopify]')} - [${moment().format("HH:mm:sssss")}]: ${chalk[color](text)}`)
}
