const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('RED')
  .setThumbnail('https://cdn.glitch.com/928f4033-17da-404e-b0cb-9d76f0546c29%2F_20201225_113308.JPG')
  .setDescription(`

➥[Bot Davet](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n➥[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n➥[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n➥[Web Site](https://yilmazbotu.glitch.me)

`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}