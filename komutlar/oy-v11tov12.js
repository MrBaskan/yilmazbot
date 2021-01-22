const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDQzNDE4NjYxMzU1NTIyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1NzI1MjkyfQ.wUnzJ2OQPTSy9UYZho7tSaDlTBIayGETrrQolmZsyTk', client);
exports.run = (client, message, args) => {
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu Komutu Kullanabilmek İçin Bota 12 Saatte Bir Dbl Üzerinden Oy Vermen Gerekiyor. Eğer Oy Verdiysen 1-2 Dakika Beklemen Gerekmektedir. Oy Ver: https://top.gg/bot/${client.user.id}/vote`) 
   } else {



const db = require("quick.db");
const hast = require("hastebin-gen");
module.exports.run = async (client, message, args) => {
  let v11Kod = args.slice(0).join(" ");
  if (!v11Kod) {
    return message.channel.send(
      "Kodunu V12 Geçirmem İçin Bir Kod Yazmalısın."
    );
  }
  if (v11Kod.length > 1800) {
    return message.channel.send(
      "Kodun 1800 Karakterden Fazla Bölerek Yazarmısın ?"
    );
  }
  let v12kod = v11Kod
    .split("get")
    .join("cache.get")
    .split("addRole")
    .join("roles.add")
    .split("removeRole")
    .join("roles.remove")
    .split("users.exists")
    .join("users.cache.some")
    .split("channels.exists")
    .join("channels.cache.some")
    .split("find")
    .join("cache.find")
    .split("RichEmbed")
    .join("MessageEmbed")
    .split("fetchUser")
    .join("users.fetch")
    .split("fetchMember")
    .join("users.members")
    .split("fetchMessage")
    .join("users.messages")
    .split("fetchPinnedMessages")
    .join("messages.fetchPinned")
    .split("sendMessage")
    .join("send")
    .split("sendEmbed")
    .join("send")
    .split("sendCode")
    .join("send")
    .split("sendFile")
    .join("send")
    .split("sendFiles")
    .join("send")
    .split("setRoles")
    .join("roles.set")
    .split("colorRole")
    .join("roles.color")
    .split("highestRole")
    .join("roles.highest")
    .split("hoistRole")
    .join("roles.hoist")
    .split("ban")
    .join("members.ban")
    .split("unban")
    .join("members.unban")
    .split("avatarURL")
    .join("avatarURL()")
    .split("displayAvatarURL")
    .join("displayAvatarURL()")
    .split("iconURL")
    .join("iconURL()")
    .split("splashURL")
    .join("splashURL()")
    .split("playFile")
    .join("play")
    .split("playStream")
    .join("play")
    .split("playArbitraryInput")
    .join("play")
    .split("playBroadcast")
    .join("play")
    .split("playOpusStream")
    .join("play")
    .split("playConvertedStream")
    .join("play")
    .split("dispatcher.end()")
    .join("dispatcher.destroy()")
    .split("createVoiceBroadcast")
    .join("voice.createBroadcast")
    .split("broadcast.dispatchers")
    .join("broadcast.subscribers")
    .split("forEach")
    .join("cache.forEach")
   .split("client.ping")
    .join("client.ws.ping")

  if (v11Kod == v12kod) {
    return message.channel.send("Bu Kod V12 İle Uyumlu Veya Böyle Bir Kod Bulunmuyor.");
  }

    
    const embed = new Discord.MessageEmbed()
    .addField(
      `:outbox_tray: V12 Kod:`,
      `   \`\`\`
${v12kod}\`\`\` `
    )


  message.channel.send(embed);
  message.author.send(   ``,
      `   \`\`\`
${v12kod}\`\`\` `)
  db.add(`çevrilenkod`, 1);
  
};
     
     }})};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "v11tov12",
  description: "",
  usage: ""
};