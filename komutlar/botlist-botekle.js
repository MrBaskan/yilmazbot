const Discord = require('discord.js');
const db = require('quick.db');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
	let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
	if(!log) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!basvuru) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if(!kanal) return message.channel.send("Botlist Ayarları Ayarlanmamış. Ayarlamak İçin : y!botlist-sistemi.")
  if (message.channel.id !== kanal) return message.channel.send(`Bot Ekleme Sadece <#${kanal}> Kanlında Eklenebilir.`).then(msg => msg.delete({timeout: 5000, reason: ''}))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`:no_entry: Ekleyeceğin Bot Id'sini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
  if (!prefix) return message.channel.send(`:no_entry: Ekleyeceğin Botun Prefixini Yazmalısın.`).then(msg => msg.delete({timeout: 3000, reason: ''}))
  if (!onaylımı) return message.channel.send(`:no_entry: Ekleyeceğin Botun Dbl Onaylı Olup Olmadığını Yazmalısın.`).then(msg => msg.delete({timeout: 3000,reason: ''}))
  message.delete()
  const basvuruuu = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`${message.author} İsimli Kullanıcının <@${botid}> İsimli Botu Sıraya Eklendi. Bot Onaylanmayı / Reddedilmeyi Bekliyor.`)
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(basvuruuu)
  message.channel.send(`Botunuz Sisteme Eklendi.`).then(msg => msg.delete({timeout: 1000, reason: ''}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle', 'ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "",
  usage: ''
};