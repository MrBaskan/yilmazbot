const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let user = message.mentions.members.first()

  if(!user) user = message.member
  
let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (user.hasPermission("ADMINISTRATOR")) x = "<:tik1:798522936746311681>"
    if (!user.hasPermission("ADMINISTRATOR")) x = "<:carpi1:798523019160584214>"
    
    //Denetim kaydı
    if (user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:carpi1:798523019160584214>"
    
    //Sunucuyu yönet
    if (user.hasPermission("MANAGE_GUILD")) x3 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_GUILD")) x3 = "<:carpi1:798523019160584214>"
    
    //Rolleri yönet
    if (user.hasPermission("MANAGE_ROLES")) x4 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_ROLES")) x4 = "<:carpi1:798523019160584214>"
    
    //Kanalları yönet
    if (user.hasPermission("MANAGE_CHANNELS")) x5 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_CHANNELS")) x5 = "<:carpi1:798523019160584214>"
    
    //üyeleri at
    if (user.hasPermission("KICK_MEMBERS")) x6 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("KICK_MEMBERS")) x6 = "<:carpi1:798523019160584214>"
    
    //üyeleri yasakla
    if (user.hasPermission("BAN_MEMBERS")) x7 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("BAN_MEMBERS")) x7 = "<:carpi1:798523019160584214>"
    
    //mesajları yönet
    if (user.hasPermission("MANAGE_MESSAGES")) x8 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_MESSAGES")) x8 = "<:carpi1:798523019160584214>"
    
    //kullanıcı adlarını yönet
    if (user.hasPermission("MANAGE_NICKNAMES")) x9 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_NICKNAMES")) x9 = "<:carpi1:798523019160584214>"
    
    //emojileri yönet
    if (user.hasPermission("MANAGE_EMOJIS")) x10 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_EMOJIS")) x10 = "<:carpi1:798523019160584214>"
  if (user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:tik1:798522936746311681>"
    if (!user.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:carpi1:798523019160584214>"
      let embed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(`${user.user.tag}'ın Yetkileri:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    return message.channel.send(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinler','yetkilerim'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkiler',
  description: '',
  usage: ''
};