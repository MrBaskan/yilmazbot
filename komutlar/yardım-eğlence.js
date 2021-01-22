const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Eğlence`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!düello <@kullanıcı> : **Belirttiğiniz Kullanıcıyla Düello Atarsınız.
<a:ok:791600953606012939> **y!balıktut : **Balık Tutarsınız.
<a:ok:791600953606012939> **y!banner <yazı> : **Yazdığınız Yazıyı Banner Şeklinde Yazar. 
<a:ok:791600953606012939> **y!bilek-güreşi <@kullanıcı> : **Belirttiğiniz Kullanıcıyla Bilek Güreşi Yaparsınız.
<a:ok:791600953606012939> **y!elyazısı <yazı> : **Belirttiğiniz Yazıyı Elyazısı Şeklinde Yazar. 
<a:ok:791600953606012939> **y!aşkölçer <@kullanıcı> : **Belirttiğiniz Kullanıcıyla Aşkınızı Ölçer. 
<a:ok:791600953606012939> **y!espri : **Bot İğrenç Espri Yapar. 
<a:ok:791600953606012939> **y!fbi : **Fbi Evinizi Basar. 
<a:ok:791600953606012939> **y!kralol : **Kral Olursunuz. 
<a:ok:791600953606012939> **y!sarıl <@kullanıcı> : **Belirttiğiniz Kullanıcıya Sarılırsınız. 
<a:ok:791600953606012939> **y!tersyazı <yazı> : **Yazdığınız Yazıyı Ters Şekilde Yazar.
<a:ok:791600953606012939> **y!tkm <taş-kağıt-makas> : **Taş Kağıt Makas Oynarsınız. 
<a:ok:791600953606012939> **y!yumrukat <@kullanıcı> : **Belirttiğiniz Kullanıcıya Yumruk Atarsınız. 
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlen"],
  permLevel: 0,
};
exports.help = {
  name: 'eğlence',
  description: '',
  usage: ''
};