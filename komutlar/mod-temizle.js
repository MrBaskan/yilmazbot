const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
if(message.member.hasPermission("MANAGE_MESSAGES")) {
if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry:  Mesajları Yönet yetkiniz bulunmamaktadır.!")
  let messagecount = parseInt(args[0]);

  if(isNaN(messagecount)) return message.channel.send(":x: | Kaç mesaj silmek istediğinizi belirtin?");

  if(messagecount > 100){
    message.channel.send(":x: | Maximum `100` mesaj silebilirsiniz.")
  }else if(messagecount < 2 ) {
    
  } else {

  }{
    await message.delete()
    message.channel.bulkDelete(messagecount, true).then(deleted => {
      if (deleted.size <= 0) {
        return message.channel.send(
`Discord API'nin izinleri çizgisinde 2 haftadan önceki mesajları silemem.`)
      }
    message.channel.send(`\`${deleted.size}\` mesaj silindi.`).then(msg => msg.delete({timeout:2500, reason:''}))
    })
  }
} else {
  return message.reply(":x: | Bu komutu kullanabilmek için yeterli yetkin yok.")
}
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil",],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: '',
  usage: ''
};