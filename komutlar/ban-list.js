const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var s = message.guild.fetchBans().then(bans => {
  message.channel.send(`Bulunduğunuz sunucda **${bans.size}** banlı üye var`)
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};
exports.help = {
  name: "banlist",
  usage: ""
};