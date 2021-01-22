const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Jail Sistemi`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!jail-log ayarla <#kanal> : **Jail Log Kanalını Ayarlarsınız.
<a:ok:791600953606012939> **y!jail-log sıfırla : **Jail Log Kanalını Sıfırlarsınız. 
<a:ok:791600953606012939> **y!jail-yetkili ayarla <@rol> : **Jail Yetkilisini Ayarlarsınız.
<a:ok:791600953606012939> **y!jail-yetkili sıfırla : **Jail Yetkilisini Sıfırlarsınız.
<a:ok:791600953606012939> **y!jail-rol ayarla <@rol> : **Jaile Atılana Verilecek Rolü Ayarlarsınız. 
<a:ok:791600953606012939> **y!jail-rol sıfırla : **Jaile Atılana Verilecek Rolü Sıfırlarsınız. 
<a:ok:791600953606012939> **y!jail <@kullanıcı süre sebep> : **Belirttiğiniz Kullanıcıyı Hapse Atar. 
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jailsistemi"],
  permLevel: 0,
};
exports.help = {
  name: 'jail-sistemi',
  description: '',
  usage: ''
};