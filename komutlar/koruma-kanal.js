const Discord = require('discord.js');
const codare = require('quick.db');

exports.run = async(client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('Kanal koruma log kanalını belirtmelisin')
      codare.set(`kanalk_${message.guild.id}`, kanal.id)
      message.channel.send('Kanal koruma sistemi aktif edildi, log kanalı <#'+kanal+'> Olarak ayarlandı.')

      if(args[0] === 'kapat') {
        if(!codare.fetch(`kanalk_${message.guild.id}`)) message.channel.send('Kanal koruma sistemi aktif edilmemiş.')
        codare.delete(`kanalk_${message.guild.id}`)
        message.channel.send('Kanal koruma sistemi kapatıldı, log kanalı sıfırlandı')
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['kanalkoruma'],
  permlevel: 0
};

exports.help = {
  name: "kanal-koruma",
  description: '',
  usage: ''
}