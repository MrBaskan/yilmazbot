const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Yardım`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!yardım : **Yardım Komutlarını Gösterir.
<a:ok:791600953606012939> **y!moderasyon : **Moderasyon Komutlarını Gösterir.
<a:ok:791600953606012939> **y!eğlence : **Eğlence Komutlarını Gösterir.
<a:ok:791600953606012939> **y!kayıt-sistemi : **Kayıt Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!seviye-sistemi : **Seviye Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!çekiliş-sistemi : **Çekiliş Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!genel : **Genel Komutlarını Listeler. 
<a:ok:791600953606012939> **y!koruma : **Sunucu Koruma Komutlarını Gösterir.
<a:ok:791600953606012939> **y!logo-sistemi : **Logo Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!yenilikler : **Yeni Eklenen Komutları Gösterir.
<a:ok:791600953606012939> **y!profil-sistemi : **Profil Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!v11tov12 : **Yazdığınız V11 Kodu V12'ye Çevirerek Geri Atar.
<a:ok:791600953606012939> **y!abone-sistemi : **Abone Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!ticket-sistemi : **Ticket Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!botlist-sistemi : **Botlist Sistemi Komutlarını Gösterir.

       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};
exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};
