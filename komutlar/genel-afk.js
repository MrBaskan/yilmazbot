const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   let sebep = args.slice(0).join(' ')
   let user = message.author
   if(!sebep) return message.channel.send('AFK olma sebebini belirtmelisin')
   else {
       db.set(`afk_${user.id}`, sebep)
       db.set(`afksüre_${user.id}`, Date.now())

       message.channel.send('Başarıyla AFK moduna giriş yaptın seni etiketleyenlere **'+ sebep + '** sebebiyle afk olduğunu söyleyeceğim')
   }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:[],
    permlevel: 0
};

exports.help = {
    name: "afk"
}