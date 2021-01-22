const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Başvuru Kanalı Ayarlı Değil.Ayarlamak İçin : y!başvuru-kanalı-ayarla #kanal.")
   db.delete(`bot-ekle_${message.guild.id}`)
  message.channel.send("Başvuru Kanalı Sıfırlandı.")
   } 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-kanalı-sıfırla', 
  description: "",
  usage: ''
};