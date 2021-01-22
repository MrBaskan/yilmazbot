const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Ban Sistemi`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!ban-log <#kanal> : **Ban Log Kanalını Ayarlarsınız.
<a:ok:791600953606012939> **y!ban-yetkili <@rol> : **Ban Yetkilisini Ayarlarsınız.
<a:ok:791600953606012939> **y!ban <@kullanıcı sebep> : **Belirttiğiniz Kullanıcıyı Banlarsını.
<a:ok:791600953606012939> **y!unban <Kullanıcı ID sebep> : **ID'sini Girdiğiniz Kullanıcının Banını Kaldırırsınız. 
<a:ok:791600953606012939> **y!banlist : **Sunucudaki Ban Sayısını Göstetir. 
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bansistemi"],
  permLevel: 0,
};
exports.help = {
  name: 'ban-sistemi',
  description: '',
  usage: ''
};