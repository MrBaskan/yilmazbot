const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Ticket Tool`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!ticket-kanal ayarla <#kanal> : **Ticket Kanalını Ayarlarsınız.
<a:ok:791600953606012939> **y!ticket-kanal sıfırla : **Ticket Kanalını Sıfırlarsınız.
<a:ok:791600953606012939> **y!ticket gönder : **Ayarladığınız Ticket Kanalına Ticket Atar.
<a:ok:791600953606012939> **y!ticket-kapat : **Bulunduğunuz Ticket Kanalını Kapatır. 
<a:ok:791600953606012939> **y!ticket-aç : **Bulunduğunuz Kapalı Ticketi Açar. 
<a:ok:791600953606012939> **y!ticket-sil : **Bulunduğunuz Ticketi Silersiniz.
<a:ok:791600953606012939> **y!ticket-ekle <@rol/@kullanıcı> : **Belirttiğiniz Kullanıcı Veya Rolü Tickete Ekler. 
<a:ok:791600953606012939> **y!ticket-çıkar <@rol/@kullanıcı> : **Belirttiğiniz Kullanıcı Veya Rolü Ticketten Çıkarır. 
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ticketsistemi"],
  permLevel: 0,
};
exports.help = {
  name: 'ticket-sistemi',
  description: '',
  usage: ''
};