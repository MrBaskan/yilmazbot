const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `-`
  let onlycode = args.slice(0).join(' ');
  
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın.`)
  if(!db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Başvuru Kanalı Ayarlı Değil.Ayarlamak İçin : y!başvuru-kanalı-ayarla #kanal.")
   db.delete(`bot-ekle_${message.guild.id}`)
  message.channel.send("Başvuru Kanalı Sıfırlandı.")

}
 else {
  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || `-`
  let onlycode = args.slice(0).join(' ');
  
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`You must have **Administrator** privilege to use this command.`)
    if(db.has(`bot-ekle_${message.guild.id}`)) return message.channel.send("Application channel reset, to set: -application-channel-set")
    let botekle = message.mentions.channels.first();
    if(!botekle) return message.channel.send("Specify a channel.")
    db.set(`bot-ekle_${message.guild.id}`, botekle.id)
    message.channel.send("Application channel is reset.")

   }} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["application-channel-reset"],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-kanalı-sıfırla', 
  description: "",
  usage: ''
};
