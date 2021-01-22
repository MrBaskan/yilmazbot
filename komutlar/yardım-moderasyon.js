const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Moderasyon`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!ban-sistemi : **Ban Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!jail-sistemi : **Jail Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!kick-sistemi : **Kick Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!istek-sistemi : **İstek Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!duyuru-sistemi : **Duyuru Sistemi Komutlarını Gösterir.
<a:ok:791600953606012939> **y!oylama-sistemi : **Oylama Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!saas-sistemi : **Saas Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!sayaç-sistemi : **Sayaç Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!otorol-sistemi : **Otorol Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!modlog-sistemi : **Modlog Sistemi Komutlarını Gösterir. 
<a:ok:791600953606012939> **y!yavaşmod <0-100> : **Bulunduğunuz Kanal İçin Yavaşmod Ayarlarsınız. 
<a:ok:791600953606012939> **y!nuke : **Bulunduğunuz Kanala Nuke Atar.
<a:ok:791600953606012939> **y!afk <sebep> : **Afk Moduna Girersiniz. 
<a:ok:791600953606012939> **y!temizle <1-100> : **Belirttiğiniz Miktar Mesajı Temizler.
<a:ok:791600953606012939> **y!emoji-ekle <emojilinki emojiismi> : **Belirttiğiniz Emojiyi Sunucuya Ekler.
<a:ok:791600953606012939> **y!rol-ver <@kullanıcı @rol> : **Belirttiğiniz Kullanıcıya İstediğiniz Rolü Verir.
<a:ok:791600953606012939> **y!rol-al <@kullanıcı @rol> : **Belirttiğiniz Kullanıcıdan İstediğiniz Rolü Alır. 
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod"],
  permLevel: 0,
};
exports.help = {
  name: 'moderasyon',
  description: '',
  usage: ''
};