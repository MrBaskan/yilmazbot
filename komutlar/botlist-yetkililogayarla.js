const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(db.has(`basvuruk_${message.guild.id}`)) return message.channel.send("Botlist Yetkili Log Ayarlanmış. Sıfırlamak İçin : y!botlist-yetkili-log-sıfırla")
     let basvurukanal = message.mentions.channels.first();
     if(!basvurukanal) return message.channel.send("Bir Kanal Etiketle.")
     db.set(`basvuruk_${message.guild.id}`, basvurukanal.id)
     message.channel.send("Yetkili Log Kanalı Ayarlandı")
 } 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-log-ayarla', 
  description: "",
  usage: ''
};