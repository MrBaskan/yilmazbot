const Discord = require('discord.js')
exports.run = function(client, message, args) {

const embed = new Discord.MessageEmbed()
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["komutlar"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'komutsay'
  };