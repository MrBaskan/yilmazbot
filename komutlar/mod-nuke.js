const dc = require("discord.js")
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let kerim = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let baskan = z.guild.channels.cache.find(c => c.name === z.name)
    baskan.setParent(
    baskan.guild.channels.cache.find(channel => channel.id === kerim))
    const başkan = new dc.MessageEmbed()
    .setTitle("Kanal Nukelendı!")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/779937117300195338/779937292528910347/unnamed.gif")
    z.send(başkan)
    })
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }