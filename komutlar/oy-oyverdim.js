const Discord = require("discord.js"); 
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDQzNDE4NjYxMzU1NTIyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1NzI1MjkyfQ.wUnzJ2OQPTSy9UYZho7tSaDlTBIayGETrrQolmZsyTk', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new Discord.MessageEmbed()
.setTitle("UYARI")
.setColor("RANDOM")
.setFooter(client.user.username)
.setThumbnail(client.user.avatarURL)
.setDescription("Bu Komutu Kullana Bilmek için Bana Oy Vermelisin!")
.addField("Oy Vermek için:", `[Bana Tıkla!](https://top.gg/bot/${client.user.id}/vote)`)
)

        } else {
            message.channel.send("Rolün Başarıyla Verildi! Destek Verdiğin İçin Teşekkürler!");
            message.member.roles.cache.add("791954360958713895")  
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oyverdim"],
  permLevel: 0,
   
};

exports.help = {
  name: 'oyverdim',
};
