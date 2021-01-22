const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async function(bot, message, args) {
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('⛔ Bu komutu kullanmak için `SUNUCUYU_YÖNET` yetkisine sahip olmalısınız!')
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Lütfen bir kanal etiketle! `y!duyuru-kanal #kanal`')
  db.set(`duyuru-kanal_${message.guild.id}`, kanal.id)
    message.channel.send(`Duyuru kanalı başarıyla ${kanal} olarak ayarlandı`)
  }

    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["duyurukanal"],
    permLevel: 0
}

exports.help = {
    name: 'duyuru-kanal',
    description: '',
    usage: ''
}