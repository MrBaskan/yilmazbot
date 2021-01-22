const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
   var başarılı = [];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];
   var başarısız = [];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**y!jail-yetkili ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, y!jail-yetkili ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım sustur-kanal`)
  if (args[0] == 'ayarla') {
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 
  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(` Jail yetkilisi başarıyla sıfırlandı.`)
  }
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkili'],
 permLevel: 0
};

exports.help = {
 name: 'jail-yetkili',
 description: '',
 usage: ''
};