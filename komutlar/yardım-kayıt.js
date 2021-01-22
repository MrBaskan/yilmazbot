const Discord = require("discord.js");
exports.run = async (client, message) => {
  const baskan = new Discord.MessageEmbed()
    .setAuthor(`YılmazBOT - Kayıt`)
    .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
    .setDescription(`
<a:ok:791600953606012939> **y!kayıt-kanal <#kanal> : **Kayıt Kanalını Ayarlar.
<a:ok:791600953606012939> **y!kayıt-kanal sıfırla : **Kayıt Kanalını Sıfırlar.
<a:ok:791600953606012939> **y!alınacak-rol <@rol> : **Kayıt Olandan Alınacak Rolü Ayarlar. 
<a:ok:791600953606012939> **y!alınacak-rol sıfırla : **Kayıt Olandan Alınacak Rolü Sıfırlar. 
<a:ok:791600953606012939> **y!kayıt-görevli <@rol> : **Kayıt Görevlisini Ayarlar. 
<a:ok:791600953606012939> **y!kayıt-görevli sıfırla : **Kayıt Görevlisini Sıfırlar. 
<a:ok:791600953606012939> **y!erkek-rol <@rol> : **Erkek Kayıt Rolünü Ayarlar. 
<a:ok:791600953606012939> **y!erkek-rol sıfırla : **Erkek Kayıt Rolünü Sıfırlar. 
<a:ok:791600953606012939> **y!kız-rol <@rol> : **Kız Kayıt Rolünü Ayarlar.
<a:ok:791600953606012939> **y!kız-rol sıfırla : **Kız Kayıt Rolünü Sıfırlar. 
<a:ok:791600953606012939> **y!erkek <@kullanıcı isim yaş> : **Belirttiğiniz Kullanıcıyı İsim | Yaş Şeklinde Değiştirerek Erkek Kaydı Yapar. 
<a:ok:791600953606012939> **y!kız <@kullanıcı isim yaş>: **Belirttiğiniz Kullanıcıyı İsim | Yaş Şeklinde Değiştirerek Kız Kaydı Yapar.
       `)
    .addField("» Linkler",` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
    .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
    .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`);
  message.channel.send(baskan);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtsistemi", "ks"],
  permLevel: 0
};
exports.help = {
  name: "kayıt-sistemi",
  description: "",
  usage: ""
};
