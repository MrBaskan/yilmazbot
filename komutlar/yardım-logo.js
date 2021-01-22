const Discord = require("discord.js")
exports.run = async(client, message) => {
const baskan = new Discord.MessageEmbed()
       .setAuthor(`YılmazBOT - Logo`)
       .setTitle(`<a:dia:791601411397648434> **Botta Toplam ${client.commands.size} Komut Bulunuyor**`)
       .setDescription(`
<a:ok:791600953606012939> **y!arrow <yazı> : **Arrow Logo Üretir.
<a:ok:791600953606012939> **y!blue <yazı> : **Blue Logo Üretir.
<a:ok:791600953606012939> **y!booking <yazı> : **Booking Logo Üretir.
<a:ok:791600953606012939> **y!bubble <yazı> : **Bubble Logo Üretir.
<a:ok:791600953606012939> **y!bubble2 <yazı> : **Bubble 2 Logo Üretir.
<a:ok:791600953606012939> **y!bubble3 <yazı> : **Bubble 3 Logo Üretir.
<a:ok:791600953606012939> **y!comic <yazı> : **Comic Logo Üretir.
<a:ok:791600953606012939> **y!cool <yazı> : **Cool Logo Üretir.
<a:ok:791600953606012939> **y!discord <yazı> : **Discord Logo Üretir.
<a:ok:791600953606012939> **y!fire <yazı> : **Fire Logo Üretir.
<a:ok:791600953606012939> **y!gold <yazı> : **Gold Logo Üretir.
<a:ok:791600953606012939> **y!gold2 <yazı> : **Gold 2 Logo Üretir.
<a:ok:791600953606012939> **y!green <yazı> : **Green Logo Üretir.
<a:ok:791600953606012939> **y!müzik <yazı> : **Müzik Logo Üretir.
<a:ok:791600953606012939> **y!skull <yazı> : **Skull Logo Üretir.
       `)
       .addField("» Linkler", ` \n[Davet Et](https://discord.com/oauth2/authorize?client_id=764434186613555222&permissions=8&scope=bot)\n[Destek Sunucusu](https://discord.gg/nRGF3myE3k)\n[Oy Ver](https://top.gg/bot/764434186613555222/vote)\n[Web Site](https://yilmazbotu.glitch.me)`)
       .setImage("https://cdn.glitch.com/2917bd15-c57a-41da-a2d1-b8313d136997%2Fstandard%20(1).gif?v=1608997935059")
       .setFooter(`YılmazBOT : Güvenilir Sistem, 7/24 Hizmet, Tamamen Türkçe, Gelişmiş Komutlar`)
    message.channel.send(baskan)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logosistemi", "ls"],
  permLevel: 0,
};
exports.help = {
  name: 'logo-sistemi',
  description: '',
  usage: ''
};