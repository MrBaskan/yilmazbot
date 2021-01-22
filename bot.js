const Discord = require("discord.js"); 
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader.js")(client);
const path = require("path");
const snekfetch = require("snekfetch");

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Bot Aktif Komutlar Yüklendi");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);

//----------// KOMUTLAR //----------//
//----------// ÇEKİLİŞ //----------//
client.on("ready", async () => {
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }

    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function cekme(message, array) {
    var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || [];
    var cekilenkisi = array[Math.floor(Math.random() * array.length)];
    if (!client.users.cache.get(cekilenkisi.id)) {
      return cekme(message, array);
    }
    while (eskikazananlar.includes(cekilenkisi.id)) {
      return cekme(message, array);
    }
    if (!eskikazananlar.includes(cekilenkisi.id)) {
      if (db.has(`cekilis_${message.id}.kazananlar`)) {
        db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id);
      } else {
        db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id]);
      }
    }
  }

  let dasall = db.all().filter(i => i.ID.startsWith("cekilis_"));
  for (const ii of dasall) {
    const channel = client.channels.cache.get(db.fetch(`${ii.ID}.mesaj.kanal`));
    const mesaj = db.fetch(`${ii.ID}.mesaj.id`);
    const bitecegizamanms = db.fetch(`${ii.ID}.bitecek`);
    const kazanacak = db.fetch(`${ii.ID}.kazanacak`);
    const verilecek = db.fetch(`${ii.ID}.verilecek`);
    const cekilisid = db.fetch(`${ii.ID}.cekilisid`);
    let embed = new Discord.MessageEmbed()
      .setAuthor("🎉 Çekiliş 🎉")
      .setTitle("**" + verilecek + "**")
      .setDescription(
        `Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`
      )
      .setFooter(`${kazanacak} kazanan | ID: ${cekilisid} | Bitecek:`)
      .setTimestamp(bitecegizamanms)
      .setColor("#2F3136");
    if (channel) {
      channel.messages.fetch(mesaj).then(async msg => {
        msg.edit(embed);
        const reaction = msg.reactions.cache.first();
        const intervaley = setInterval(async function() {
          if (!db.has(ii.ID)) return clearInterval(intervaley);
          const kalanzaman = bitecegizamanms - Date.now();
          if (kalanzaman <= 0) {
            embed.setDescription(`Çekiliyor...`);
            msg.edit(embed);
            clearInterval(intervaley);
            reaction.users.fetch().then(async kasiler => {
              const gercekkisisayisi = kasiler.size - 1;
              if (gercekkisisayisi < kazanacak) {
                let embed = new Discord.MessageEmbed()
                  .setAuthor("🎉 Çekiliş Bitti 🎉")
                  .setTitle("**" + verilecek + "**")
                  .setDescription(
                    `Yeterli katılım olmadığından kazanan seçilemedi.`
                  )
                  .setFooter(
                    `${kazanacak} kazanan | Çekiliş Başlatıldı | Çekiliş ID: ${cekilisid} | Bitti:`
                  )
                  .setTimestamp(bitecegizamanms)
                  .setColor("#2F3136");
                msg.edit(embed);
                msg.reactions.removeAll();
                db.delete(`cekilis_${msg.id}`);
                let thall = db.all().filter(i => i.ID.includes(msg.id));
                for (const uu of thall) {
                  db.delete(uu.ID);
                }
              } else {
                var array = reaction.users.cache.array();
                var ukuk;
                for (ukuk = 0; ukuk < kazanacak; ukuk++) {
                  cekme(msg, array);
                }
                await sleep(50);
                let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`);
                let embed = new Discord.MessageEmbed()
                  .setAuthor("🎉 Çekiliş Bitti 🎉")
                  .setTitle("**" + verilecek + "**")
                  .setDescription(
                    `**Kazananlar:** <@${kazananherkes.join(">, <@")}>`
                  )
                  .setFooter(
                    `${kazanacak} kazanan | Çekiliş Başlatıldı |Çekiliş ID: ${cekilisid} | Bitti:`
                  )
                  .setTimestamp(bitecegizamanms)
                  .setColor("#2F3136");
                msg.edit(embed);
                msg.channel.send(
                  `**Tebrikler** <@${kazananherkes.join(
                    ">, <@"
                  )}>! **\`${verilecek}\` çekilişini kazandınız!**`
                );
                db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes);
                db.delete(`cekilis_${msg.id}`);
                let theall = db.all().filter(i => i.ID.includes(msg.id));
                for (const ua of theall) {
                  db.delete(ua.ID);
                }
              }
            });
          } else {
            const kalanzamanyazi = destructMS(kalanzaman);
            embed.setDescription(
              `Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** ${kalanzamanyazi}`
            );
            msg.edit(embed);
          }
        }, 5000);
      });
    }
  }
});
//----------// ÇEKİLİŞ //----------//
//----------// SA-AS //----------//
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin**");
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "hi") {
      msg.reply("**Hi welcome**");
    }
  }
});
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sea") {
      msg.reply("**Aleyküm Selam Hoşgeldin**");
    }
  }
});
//----------// SA-AS //----------//
//----------// OTOROL //----------//
client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`judgekanal_${member.guild.id}`)   
 let rol = db.fetch(`judgerol_${member.guild.id}`)
 let mesaj = db.fetch(`judgemesaj_${member.guild.id}`)
  
if(!kanal) return
member.roles.add(rol)
  client.channels.cache.get(kanal).send('Otomatik Rol Verildi Hoşgeldin! **`'+member.user.username+'`**')

});
//----------// OTOROL //----------//
//----------// SAYAÇ //----------//
client.on("guildMemberAdd", async member => {
  let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`);
  let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`);
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;
  client.channels.cache
    .get(kanal)
    .send(
      `${member}, Aramıza katıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`
    );
  return;
});
client.on("guildMemberRemove", async member => {
  let sayı = await db.fetch(`SayaçSayı_${member.guild.id}`);
  let kanal = await db.fetch(`SayaçKanal_${member.guild.id}`);
  if (!sayı || !kanal) return;
  let sonuç = sayı - member.guild.memberCount;

  client.channels.cache
    .get(kanal)
    .send(
      `\`${member}\`, Aramızdan ayrıldı! **${sayı}** kişiye ulaşmak için **${sonuç}** kişi kaldı Şuan **${member.guild.memberCount}** Kişiyiz`
    );
  return;
});
//----------// SAYAÇ //----------//
//----------// MODLOG //----------//
client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal oluşturuldu`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`Kanal silindi`, ` İsmi: \`${channel.name}\`\n Türü: **${channel.type}**\n��� ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)

    c.send(embed)
});

   client.on('channelNameUpdate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`codeminglog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`Kanal İsmi değiştirildi`, ` Yeni İsmi: \`${channel.name}\`\n► ID: ${channel.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL)
    c.send(embed)
});

client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji oluşturuldu`, ` İsmi: \`${emoji.name}\`\n GIF?: **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`codeminglog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji silindi`, ` İsmi: \`${emoji.name}\`\n GIF? : **${emoji.animated}**\n► ID: ${emoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL)

    c.send(embed)
    });
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
  const c = newEmoji.guild.channels.cache.get(db.fetch(`codeminglog_${newEmoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`Emoji güncellendi`, ` Eski ismi: \`${oldEmoji.name}\`\n Yeni ismi: \`${newEmoji.name}\`\n► ID: ${oldEmoji.id}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${newEmoji.client.user.username}#${newEmoji.client.user.discriminator}`, newEmoji.client.user.avatarURL)

    c.send(embed)
    });

client.on('guildBanAdd', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcı banlandı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Sebep: **${entry.reason || 'Belirtmedi'}**\n Banlayan: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});

client.on('guildBanRemove', async (guild, user) => {    
    const channel = guild.channels.cache.get(db.fetch(`codeminglog_${guild.id}`));
  if (!channel) return;
  
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, user.avatarURL)
                    .addField(`Kullanıcının banı açıldı`, ` İsmi: \`${user.username}\`\n ID: **${user.id}**\n Banı Kaldıran: **${entry.executor.username}#${entry.executor.discriminator}**`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${entry.executor.username}#${entry.executor.discriminator} tarafından`, entry.executor.avatarURL)

    channel.send(embed)
});
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.cache.get(db.fetch(`codeminglog_${message.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                    .setTitle("Mesaj silindi")                
                    .addField(`Silinen mesaj : ${message.content}`,`Kanal: ${message.channel.name}`)
                    .addField(`Kanal:`,`${message.channel.name}`)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter(`${message.client.user.username}#${message.client.user.discriminator}`, message.client.user.avatarURL)

    channel.send(embed)
});

client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.cache.get(db.fetch(`codeminglog_${oldMessage.guild.id}`));
    if(!channel) return;

    let embed = new Discord.MessageEmbed()
    .setTitle("Mesaj güncellendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel.name}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${oldMessage.client.user.username}#${oldMessage.client.user.discriminator}`,`${oldMessage.client.user.avatarURL}`)

    channel.send(embed)
});

client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol oluşturuldu`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
.addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`codeminglog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`Rol silindi`, ` ismi: \`${role.name}\`\n ID: ${role.id}`)                    
.setTimestamp()
.setColor("RANDOM")
    .addField("Rol renk kodu : ",`${role.hexColor}`)
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL)

    channel.send(embed)
})
//----------// MODLOG //----------//
//----------// YAVAŞMOD //----------//

//----------// YAVAŞMOD //----------//
//----------// AFK //----------//
client.on("message", async message => {
  const ms = require("parse-ms");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    var user = message.mentions.users.first();
    let zamans = await db.fetch(`afksüre_${message.author.id}`);
    let timeObj = ms(Date.now() - zamans);
    message.reply(
      `Artık AFK değilsin, **${timeObj.hours}** Saat **${timeObj.minutes}** Dakika **${timeObj.seconds}** Saniyedir AFKydın`
    );
    db.delete(`afk_${message.author.id}`);
    db.delete(`afksüre_${message.author.id}`);
  }

  var user = message.mentions.users.first();
  if (!user) return;
  var REASON = await db.fetch(`afk_${user.id}`);

  if (REASON) {
    let zamant = await db.fetch(`afksüre_${user.id}`);
    let timeObj = ms(Date.now() - zamant);
    const yilmaz = new Discord.MessageEmbed()
      .setDescription(`<@${user.id}> kullanıcısı AFK `)
      .setColor("2F3136")
      .addField(`Saat :`, `${timeObj.hours}`, true)
      .addField(`Dakika :`, `${timeObj.minutes}`, true)
      .addField(`Saniye :`, `${timeObj.seconds}`, true)
      .setThumbnail(user.avatarURL());
    message.channel.send(yilmaz);
  }
});
//---------// AFK //----------//
//----------// REKLAM //----------//
client.on("message", msg => {
  if (!db.has(`reklam_${msg.guild.id}`)) return;
  const reklam = [
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    "net",
    ".rf.gd",
    ".az",
    ".party",
    "discord.gg",
    ".COM",
    ".NET",
    ".XYZ",
    ".TK",
    ".PW",
    ".İO",
    ".ME",
    ".GG",
    "WWW.",
    "HTTPS",
    "HTTP",
    ".GL",
    ".ORG",
    ".COM.TR",
    ".BİZ",
    "NET",
    ".RF.GD",
    ".AZ",
    ".PARTY",
    "DİSCORD.GG",
    "DİSCORD.gg",
    "discord.GG",
    ".COM.tr",
    ".com.TR"
  ];
  if (reklam.some(word => msg.content.includes(word))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();
        return msg
          .reply(
            "**Bu Sunucuda** `Reklam Engel`** Aktif Reklam Yapmana İzin Veremem!**"
          )
          .then(msg => msg.delete(3000));

        msg.delete(3000);
      }
    } catch (err) {
      console.log(err);
    }
  }
});
//----------// REKLAM //----------//
//----------// KÜFÜR //----------//
client.on("message", async msg => {
  const i = await db.fetch(`kufur_${msg.guild.id}`);
  if (i == "acik") {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg.reply(
            "Bu Sunucuda Küfür Filtresi Aktiftir Küfür Edemessin."
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = db.fetch(`${oldMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
          oldMessage.delete();

          return oldMessage.reply(
            "Bu Sunucuda Küfür Filtresi Aktiftir Mesajını Düzenleyerekte Küfür Edemessin."
          );
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
//----------// KÜFÜR //----------//
//----------// SEVİYE //----------//
client.on("message", async msg => {
  if (msg.content.startsWith(prefix)) return;
  const db = require("quick.db");
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  let seviyexp = await db.fetch(`seviyexp${msg.guild.id}`);
  const skanal = await db.fetch(`seviyekanal${msg.guild.id}`);
  let kanal = msg.guild.channels.cache.get(skanal);
  if (msg.author.bot === true) return;
  let seviyeEmbed = new Discord.MessageEmbed();
  seviyeEmbed.setDescription(
    `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl +
      1}** seviye oldun!`
  );
  seviyeEmbed.setFooter(`${client.user.username} | Seviye Sistemi`);
  seviyeEmbed.setColor("RANDOM");
  if (!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    db.set(`top_${id}`, 1);
  }
  let veri1 = [];
  if (seviyexp) veri1 = seviyexp;
  if (!seviyexp) veri1 = 5;
  if (msg.content.length > 7) {
    db.add(`xp_${id}_${gid}`, veri1);
  }
  let seviyesınır = await db.fetch(`seviyesınır${msg.guild.id}`);
  let veri2 = [];
  if (seviyesınır) veri2 = seviyesınır;
  if (!seviyesınır) veri2 = 250;
  if ((await db.fetch(`xp_${id}_${gid}`)) > veri2) {
    if (skanal) {
      kanal.send(
        new Discord.MessageEmbed()
          .setDescription(
            `Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl +
              1}** seviye oldun:tada:`
          )
          .setFooter(`${client.user.username} | Seviye Sistemi`)
          .setColor("RANDOM")
      );
    }
    db.add(`lvl_${id}_${gid}`, 1);
    db.delete(`xp_${id}_${gid}`);
  }
  db.set(`top_${id}`, Math.floor(lvl + 1));
});
//----------// SEVİYE //----------//
//----------// SEVİYE-ROL //----------//
client.on("message", async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let rrol = await db.fetch(`rrol.${message.guild.id}`);
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if (rrol) {
    rrol.forEach(async rols => {
      var rrol2 = await db.fetch(`rrol2.${message.guild.id}.${rols}`);
      if (Math.floor(rrol2) <= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.add(rols);
      } else if (Math.floor(rrol2) >= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.remove(rols);
      }
    });
  }
  if (message.content == "b?buneolmgereksiz") {
    if (!rrol) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `${client.user.username} Seviye-Rol Sistemi!`,
            client.user.avatarURL
          )
          .setDescription(`Herhangi bir rol oluşturulmadı.`)
      );
      return;
    }
    const { MessageEmbed } = require("discord.js");
    let d = rrol
      .map(
        x =>
          "<@&" +
          message.guild.roles.cache.get(x).id +
          ">" +
          " **" +
          db.get(`rrol3.${message.guild.id}.${x}`) +
          " Seviye**"
      )
      .join("\n");
    message.channel.send(
      new MessageEmbed()
        .setColor("RANDOM")
        .setFooter(
          `${client.user.username} Seviye-Rol Sistemi!`,
          client.user.avatarURL
        )
        .setDescription(`${d}`)
    );
  }
});
client.on("message", async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let srol = await db.fetch(`srol.${message.guild.id}`);
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if (srol) {
    srol.forEach(async rols => {
      var srol2 = await db.fetch(`srol2.${message.guild.id}.${rols}`);
      if (Math.floor(srol2) <= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.add(rols);
      } else if (Math.floor(srol2) >= Math.floor(level)) {
        let author = message.guild.member(message.author);
        author.roles.remove(rols);
      }
    });
  }
  if (
    message.content == "b?seviye-rolleri" ||
    message.content == "y!rütbeler"
  ) {
    if (!srol) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setFooter(
            `${client.user.username} Seviye-Rol Sistemi!`,
            client.user.avatarURL
          )
          .setDescription(`Herhangi bir rol oluşturulmadı.`)
      );
      return;
    }
    const { MessageEmbed } = require("discord.js");
    let d = srol
      .map(
        x =>
          "<@&" +
          message.guild.roles.cache.get(x).id +
          ">" +
          " **" +
          db.get(`srol3.${message.guild.id}.${x}`) +
          " Seviye**"
      )
      .join("\n");
    message.channel.send(
      new MessageEmbed()
        .setColor("RANDOM")

        .setFooter(
          `${client.user.username} Seviye-Rol Sistemi!`,
          client.user.avatarURL
        )
        .setDescription(`${d}`)
    );
  }
});
//----------// SEVİYE-ROL //----------//
//----------// ROL-KORUMA //----------//
client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  if(!entry.executor.hasPermission('ROLE_DELETE')) {
      role.guild.roles.create({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions
  });
   let emran = new Discord.MessageEmbed()
   .setColor('0x36393E')
   .setTitle(`Bir rol silindi !`)
   .setDescription(`Silinen rol adı ${role.name}, Rol koruma sistemi açık olduğu için rol geri oluşturuldu!`)
   client.channels.cache.get(kanal).send(emran)
  }
});
//----------// ROL-KORUMA //----------//
//----------// EMEOJİ-KORUMA //----------//
client.on("emojiDelete", async (emoji, message) => {
  
  let kanal = await db.fetch(`emotek_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;
  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
    
   let embbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Bir Emoji Silindi`)
   .setDescription(`Silinen Emoji: ${emoji.name}, Emoji Koruma Sistemi Açık Olduğundan Tekrar Eklendi!`)
   message.client.channels.cache.get(kanal).send(embbed)
  
  }

});
//----------// EMOJİ-KORUMA //----------//
//----------// KANAL-KORUMA //----------//
client.on("channelDelete", async kanals => {
  let kanal = await db.fetch(`kanalk_${kanals.guild.id}`);
  if (!kanal) return;
  const entry = await kanals.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == kanals.guild.owner.id) return;
  if(!entry.executor.hasPermission('CHANNEL_DELETE')) {
      kanals.guild.channels.create({
    name: kanals.name,
    color: kanals.hexColor,
    permissions: kanals.permissions
  });
   let emran = new Discord.MessageEmbed()
   .setColor('0x36393E')
   .setTitle(`Bir kanal silindi !`)
   .setDescription(`Silinen kanal adı ${kanals.name}, Kanal koruma sistemi açık olduğu için kanal geri oluşturuldu!`)
   client.channels.cache.get(kanal).send(emran)
  }
});
//----------// KANAL-KORUMA //----------//
//----------// GOLD //----------//
client.on("message", async message => {
  let Gold = client.emojis.cache.get("");
  let TimeOut = 1800000;
  let LastSee = await db.fetch(`GoldS_${message.author.id}`);
  let R = await db.fetch(`Gold_${message.author.id}`);
  if (R == "Gold") {
    if (LastSee !== null && TimeOut - (Date.now() - LastSee) > 0) {
      let Time = (TimeOut - (Date.now() - LastSee));
    } else {
      if (message.author.bot) return;
      if (message.content.length > 1) {
        db.set(`GoldS_${message.author.id}`, Date.now());
        const RevengeNYKS = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(
              "Bir Gold Üye Geldi,Hoşgeldin <@" + message.author.id + ">",
              "Gold Üye Geliyo Kaçın <@" + message.author.id + ">"
          )
          .setColor("RANDOM");
        message.channel
          .send(RevengeNYKS)
          .then(message => message.delete({timeout:10000,reason:''}));
      }
    }
  } else if (R == undefined) {
  }
  if (!R) return;
});
//----------// GOLD //----------//
//----------// KOMUTLAR //----------//