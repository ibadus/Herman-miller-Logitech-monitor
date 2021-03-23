module.exports = {sendWebhook};

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const {webhook_url} = require('../config.json');

function sendWebhook(){
  const hook = new Webhook(webhook_url);

      const embed = new MessageBuilder()
      .setColor('#3D49C6')
      .setTitle("Siege Gaming Embody Herman Miller X Logitech G - Noir")
      .setURL("https://frgaming.hermanmiller.com/products/embody-gaming-chair-black")
      .setDescription("Restock")
      .setThumbnail("https://cdn.shopify.com/s/files/1/0412/6674/1413/products/embody_b_prd_01.jpg?v=1615478228")
      .setFooter('Iba FnF', 'https://media.discordapp.net/attachments/805077907147718656/823909580635373609/image0_1.png?width=810&height=810')
      .setTimestamp();

      hook.send(embed);
}
