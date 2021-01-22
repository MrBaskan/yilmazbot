const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (bot, message, args) => {
message.delete();
const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      `**Sunucunun Sahibi Şuanda <@${message.guild.owner.id}> Kişisidir.**`)
return message.channel.send( embed1)
 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kurucu"],
  permLevel: 0
};
exports.help = {
  name: "taç",
  description: "",
  usage: ""
};