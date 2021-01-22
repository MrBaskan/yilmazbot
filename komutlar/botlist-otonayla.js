const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {
  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
  if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanabilmek İçin Botlist Yetkilisi Olmalısın.')
    let botisim = args[0]
  let sahip = args[1]
  
    let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!basvuru) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!kanal) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  const onay = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<@${sahip}> İsimli Kişinin <@${botisim}> İsimli Botu Onaylandı.\nOnaylayan Yetkili : ${message.author}`)
    
    if (!botisim) return message.channel.send(`:no_entry: Onaylanacak Botun Id'sini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
  message.delete()
  if (!sahip) return message.channel.send(`:no_entry: Onaylanacak Bot Sahibinin Id'sini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''} ))
        client.channels.cache.get(log).send(onay)      
  message.channel.send(`Botu Onayladınız.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 3
};

exports.help = {
  name: 'botonayla', 
  description: "",
  usage: ''
};