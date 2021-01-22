const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(db.has(`byetkili_${message.guild.id}`)) return message.channel.send("Botlist Yetkilisi Ayarlı. Sıfırlamak İçin : y!botlist-yetkili-sıfırla.")
    let yetkilirol = message.mentions.roles.first();
    if(!yetkilirol) return message.channel.send("Bir Rol Etiketle.")
    db.set(`byetkili_${message.guild.id}`, yetkilirol.id)
    message.channel.send("Botlist Yetkilisi Ayarlandı.")
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-ayarla', 
  description: "",
  usage: ''
};