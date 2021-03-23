const {logger} = require('./packages/logger');
const {sleep} = require('./packages/sleep');
const {sendWebhook} = require('./packages/webhook');
const {requester} = require('./packages/requester');

const URL = "https://frgaming.hermanmiller.com/products.json";
var webhooksend;

async function init() {

  while(true){
    webhooksend = await requester(URL)
    while (!webhooksend) {
      logger("Monitoring...");
      webhooksend = await requester(URL)
      await sleep();
    }
    await sendWebhook();
    while(webhooksend) {
      logger("Waiting while stock is off...");
      webhooksend = await requester(URL)
      await sleep();
    }
  }
}

init()
