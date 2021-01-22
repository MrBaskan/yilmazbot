const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Botlist`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!başvuru-kanalı-ayarla #kanal : **Başvuru Kanalını Ayarlar.
<a:ok:791600953606012939> **y!başvuru-kanalı-sıfırla : **Başvuru Kanalını Sıfırlar.
<a:ok:791600953606012939> **y!botlist-log-ayarla #kanal : **Log Kanalını Ayarlar.
<a:ok:791600953606012939> **y!botlist-log-sıfırla : **Log Kanalını Sıfırlar. 
<a:ok:791600953606012939> **y!botlist-yetkili-log-ayarla #kanal : **Yetkili Log Kanalını Ayarlar. 
<a:ok:791600953606012939> **y!botlist-yetkili-log-sıfırla : **Yetkili Log Kanalını Sıfırlar.
<a:ok:791600953606012939> **y!botlist-yetkili-ayarla @rol : **Botlist Yetkilisini Ayarlar. 
<a:ok:791600953606012939> **y!botlist-yetkili-sıfırla : **Botlist Yetkilisini Sıfırlar.
<a:ok:791600953606012939> **y!botlist-sistemi-sıfırla : **Botlist Ayarlarının Hepsini Sıfırlar. 
<a:ok:791600953606012939> **y!botekle <botıd><prefix><dbl onay> : **Sisteme Bot Eklersiniz.
<a:ok:791600953606012939> **y!botonayla <botıd><sahipıd> : **Beklemedeki Botu Onaylarsınız. 
<a:ok:791600953606012939> **y!botreddet <botıd><sahipıd><sebep> : **Beklemedeki Botu Reddedersiniz.
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlistsistemi", "bs"],
  permLevel: 0,
};
exports.help = {
  name: 'botlist-sistemi',
  description: '',
  usage: ''
};