const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "746343245034029096") return message.channel.send("Bu Komut Sahibime Özeldir");
    const krm = client.emojis.cache.get("")
    const dk = client.emojis.cache.get("")
  
  let GoldPlayer = args[0]
  if (!GoldPlayer) return message.channel.send(" Bir ID Girmelisin")
  db.set(`Gold_${GoldPlayer}`, 'Gold')
  message.channel.send(` **\`\`${GoldPlayer}\`\`** ID'sine Sahip <@${GoldPlayer}> Artık Gold Üye!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};
exports.help = {
  name: 'gold-ver',
  description: '',
  usage: ''
};