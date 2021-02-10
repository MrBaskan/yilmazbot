const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
    if(db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Başvuru Kanalı Ayarlı, Sıfırlamak İçin : y!başvuru-kanal-sıfırla")
    let botekle = message.mentions.channels.first();
    if(!botekle) return message.channel.send("Bir Kanal Etiketle")
    db.set(`bot-ekle_${message.guild.id}`, botekle.id)
    message.channel.send("Başvuru Kanalı Ayarlandı.")

  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-kanalı-ayarla',
  description: "",
  usage: ''
};
