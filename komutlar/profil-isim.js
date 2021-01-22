const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send("**Lütfen İsmini yaz.**");
  message.channel.send("**İsmin Başarıyla ``" + isim + "`` olarak ayarlandı!**");
  db.set(`pisim_${message.author.id}`, isim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isimayarla"],
  permLevel: 0
};
 
exports.help = {
  name: "isim-ayarla",
  description: "",
  usage: ""
};