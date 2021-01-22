const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Seviye`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!seviye : **Seviyenizi Ve Rankınızı Öğrenebilirsiniz.
<a:ok:791600953606012939> **y!seviye-ayarlar : **Seviye Komutlarının Ayarlı Olup Olmadıklarının Bilgisini Verir.
<a:ok:791600953606012939> **y!seviye-log <#kanal> : **Seviye Logunu Ayarlarsınız.
<a:ok:791600953606012939> **y!seviye-log sıfırla : **Seviye Logunu Sıfırlarsınız. 
<a:ok:791600953606012939> **y!seviye-xp <1-20> : **Mesaj Başı Verilecek Xp'yi Ayarlar. 
<a:ok:791600953606012939> **y!seviye-xp sıfırla : **Mesaj Başı Verilecek Xp'yi Sıfırlar. 
<a:ok:791600953606012939> **y!seviye-sınır <1-250> : **Kaç Xp'de Seviye Atlanacağını Ayarlarsınız. 
<a:ok:791600953606012939> **y!seviye-sınır sıfırla : **Kaç Xp'de Seviye Atlanacağını Sıfırlarsınız. 
<a:ok:791600953606012939> **y!seviye-top : **Seviye Sıralamasına Bakarsınız.
<a:ok:791600953606012939> **y!seviye-rol <@rol seviye> : **Belirttiğiniz Seviyede Seçtiğiniz Rolü Verir. 
<a:ok:791600953606012939> **y!seviye-rol sıfırla : **Seviye Rollerinin Hepsini Sıfırlar. 
<a:ok:791600953606012939> **y!rütbeler : **Belirlediğiniz Seviyeye Verilecek Rolleri Listeler. 
<a:ok:791600953606012939> **y!seviye-sıfırla : **Seviye Sistemini Sıfırlarsınız.
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seviyesistemi", "ss"],
  permLevel: 0,
};
exports.help = {
  name: 'seviye-sistemi',
  description: '',
  usage: ''
};