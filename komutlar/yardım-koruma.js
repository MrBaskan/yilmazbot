const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Koruma`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!rol-koruma <#kanal> : **Rol Koruma Sistemini Açar.
<a:ok:791600953606012939> **y!rol-koruma kapat : **Rol Koruma Sistemi Kapatır.
<a:ok:791600953606012939> **y!kanal-koruma <#kanal> : **Kanal Koruma Sistemini Açar.
<a:ok:791600953606012939> **y!kanal-koruma kapat : **Kanal Koruma Sistemi Kapatır.
<a:ok:791600953606012939> **y!emoji-koruma <#kanal> : **Emoji Koruma Sistemini Açar.
<a:ok:791600953606012939> **y!emoji-koruma kapat : **Emoji Koruma Sistemini Kapatır.
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koru"],
  permLevel: 0,
};
exports.help = {
  name: 'koruma',
  description: '',
  usage: ''
};