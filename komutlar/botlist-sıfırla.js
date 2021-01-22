const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Botlist Sistemi Ayarlanmamış. Ayarlarlamak İçin : y!botlist-sistemi.")
     if(!db.has(`bot-log_${message.guild.id}`)) return message.channel.send("Botlist Sistemi Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Botlist Sistemi Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
     if(!db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Botlist Sistemi Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
     db.delete(`basvuruk_${message.guild.id}`)
     db.delete(`bot-log_${message.guild.id}`)
     db.delete(`bot-ekle_${message.guild.id}`)
     db.delete(`byetkili_${message.guild.id}`)
     message.channel.send("Botlist Sistemi Sıfırlandı.")
     
    } 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-sistemi-sıfırla', 
  description: "",
  usage: ''
};