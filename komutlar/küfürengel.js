const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Sistem Başarılı Şekilde Açıldı.')
  return
}
if (args[0] === 'kapat') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Sistem Başarılı Şekilde Kapatıldı.')
return
}
  message.channel.send('Lüten `Aç` yada `Kapat` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel', 'küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: '',
 usage: ''
};