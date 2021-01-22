const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
   if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Botlist Yetkili Log Ayarlanmamış. Ayarlamak İçin : y!botlist-yetkili-log-ayarla #kanal.")
   db.delete(`basvuruk_${message.guild.id}`)
  message.channel.send("Botlist Yetkili Log Sıfırlandı.")
 } 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-log-sıfırla', 
  description: "",
  usage: ''
};