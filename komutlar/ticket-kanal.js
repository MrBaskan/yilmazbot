const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        `Ticketi göndereceğim kanal zaten ayarlı: y!ticket-kanal sıfırla`
      );
    let kanal = message.mentions.channels.first();
    if (!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`);
    if (!kanal)
      return message.channel.send(`Etiketlediğin kanalı bulamıyorum.`);
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          `Ticket kanalı başarıyla ayarlandı: y!ticket gönder`
        )
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        `Mesajı göndereceğim kanal zaten ayarlı değil: y!ticket-kanal sıfırla`
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          `Mesajın kanalı başarıyla sıfırlandı: y!ticket-kanal ayarla #channel`
        )
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ticketkanal"],
  permLevel: 0
};

exports.help = {
  name: "ticket-kanal"
};