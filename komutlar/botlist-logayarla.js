const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Botlist Log Kanalı Ayarlı.Sıfırlamak İçin y!botlist-log-sıfırla")
     let botlog = message.mentions.channels.first();
     if(!botlog) return message.channel.send("Bir Kanal Etiketle.")
     db.set(`bot-log_${message.guild.id}`, botlog.id)
     message.channel.send("Botlist Log Kanalı Ayarlandı.")
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-log-ayarla', 
  description: "",
  usage: ''
};