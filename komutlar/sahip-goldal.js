const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
    if(message.author.id !== "746343245034029096") return message.channel.send("Bu Komut Sahibime Özeldir");

  const Hayir = client.emojis.cache.get("");
  const Evet = client.emojis.cache.get("");
  let GoldPlayer = args[0];
  if (!GoldPlayer) return message.channel.send(" Bir ID Girmelisin");
  db.delete(`Gold_${GoldPlayer}`);
  message.channel.send(
      ` **\`\`${GoldPlayer}\`\`** ID'sine Sahip <@${GoldPlayer}> Artık Gold Üye Değil!`
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "gold-al",
  description: "",
  usage: ""
};