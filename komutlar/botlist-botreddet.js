const Discord = require('discord.js');
const db = require('quick.db');
exports.run = function(client, message, args) {
  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanabilmek İçin Botlist Yetkilisi Olmalısın.')    
  let botisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(2).join(" ");
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!basvuru) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!kanal) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<@${sahip}> İsimli Kişinin <@${botisim}> İsimli Botu Reddedildi.\nSebep : ${sebep}\nReddeden Yetkili : ${message.author}`)
    if (!botisim) return message.channel.send(`:no_entry: Reddedilecek Botun Id'sini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
  if (!sahip) return message.channel.send(`:no_entry: Reddedilecek Botun Sahip Id'sini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
    if (!sebep) return message.channel.send(`:no_entry: Reddedilecek Botun Red Sebebini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`Botu Reddettiniz.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};
exports.help = {
  name: 'botreddet', 
  description: "",
  usage: ''
};