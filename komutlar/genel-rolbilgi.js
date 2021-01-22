const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(client, message, args) => {
    var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
    
    let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.id === args[0]);
  
    if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`**Lütfen Rol Belirt**`).setAuthor(`Hata !`, message.author.avatarURL({dynamic: true})))
  
    var embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`
          __**Rol İsmi:**__ ${args[0]}
          __**Bu Role Sahip Kullanıcılar**__ ${rol.members.size}
          __**Rolün Rengi**__ ${rol.hexColor}
          __**Oluşturulma Tarihi**__ ${moment(rol.createdAt).format('DD')} ${aylar[moment(rol.createdAt).format('MM')]} ${moment(rol.createdAt).format('YYYY HH:mm:ss')}
          __**Rolün ID**__ ${rol.id}
        `)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolbilgi"],
  permLevel: 0,
}

exports.help = {
  name: 'rol-bilgi',
  description: '',
  usage: '' 
};