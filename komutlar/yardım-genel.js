const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Genel`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!avatar <@kullanıcı> : **Belirttiğiniz Kullanıcının Avatarını Gösterir.
<a:ok:791600953606012939> **y!davet : **Botun Davet Linkini Atar.
<a:ok:791600953606012939> **y!istatistik : **Botun İstatistiklerini Gösterir.
<a:ok:791600953606012939> **y!ping : **Botun Pingini Gösterir. 
<a:ok:791600953606012939> **y!komutsay : **Botta Bulunan Komut Sayısını Gösterir. 
<a:ok:791600953606012939> **y!rolbilgi <@rol> : **Belirttiğiniz Rol Hakkında Bilgiler Verir. 
<a:ok:791600953606012939> **y!yapımcım : **Bot Yapımcısını Gösterir. 
<a:ok:791600953606012939> **y!öneri : **Bot Hakkındaki Önerilerinizi Bize Gönderir. 
<a:ok:791600953606012939> **y!emojiler : **Sunucuda Bulunan Emojileri Listeler.
<a:ok:791600953606012939> **y!oyverdim : **Destek Sunucumda Destekçi Rolü Alabilirsiniz.
<a:ok:791600953606012939> **y!yetkiler : **Sunucudaki Bazı Yetkilerinizin Olup Olmadığını Gösterir.
<a:ok:791600953606012939> **y!taç : **Sunucu Tacının Kimde Olduğunu Gösterir.
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gen"],
  permLevel: 0,
};
exports.help = {
  name: 'genel',
  description: '',
  usage: ''
};