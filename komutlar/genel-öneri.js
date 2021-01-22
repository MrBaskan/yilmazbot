const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : b?öneri öneriniz')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('Öneriniz Başarıyla İletildi \nEn Yakın Zamanda İncelenecek.')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **önerisi;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `:white_small_square: Kullanıcı ID: ${message.author.id}\n:white_small_square: Kullanıcı Adı: ${message.author.username}\n:white_small_square: Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("**Gönderilen Öneri**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('791939069235167283').send(embed2); 
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  permLevel: 0
}
exports.help = {
    name: 'öneri',
    description: '',
    usage: ''
}