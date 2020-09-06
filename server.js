const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 

 //كود للتجربة 

//btrolie




//الحمايه



let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));//btrolie
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if(!message.channel.guild) return;
    let user = anti[message.guild.id+message.author.id]
    let num = message.content.split(" ").slice(1).join(" ");
    if(!anti[message.guild.id+message.author.id]) anti[message.guild.id+message.author.id] = {
        actions: 0
    }//btrolie
    if(!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,//btrolie
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
if(message.content.startsWith(prefix + "limit")) {//btrolie

 
    if(!message.member.hasPermission('MANAGE_GUILD')) return;
    if(message.content.startsWith(prefix + "limitbans")) {
        if(!num) return message.channel.send("**→ | Supply a number !");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");//btrolie
        config[message.guild.id].banLimit = num;
        message.channel.send(`**→ | Changed bans limit to : ${config[message.guild.id].banLimit}.**`)//btrolie
    }
    if(message.content.startsWith(prefix + "limitkicks")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");//btrolie 
        config[message.guild.id].kickLimits = num;
        message.channel.send(`**→ | Changed kicks limit to : ${config[message.guild.id].kickLimits}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleDelLimit = num;
        message.channel.send(`**→ | Changed Role Deleting limit to : ${config[message.guild.id].roleDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleCreate")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");//btrolie
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleCrLimits = num;
        message.channel.send(`**→ | Changed Role Creation limit to : ${config[message.guild.id].roleCrLimits}.**`)
    }//Zine , Mohamed Tarek , Kbosh
    if(message.content.startsWith(prefix + "limitchannelDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].chaDelLimit = num;
        message.channel.send(`**→ | Changed Channel Deleting limit to : ${config[message.guild.id].chaDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limittime")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].time = num;//btrolie//btrolie
        message.channel.send(`**→ | Changed Times limit to : ${config[message.guild.id].time}.**`)
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
        if(e) throw e;
    });//btrolie
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
        if(e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor//btrolie
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3//btrolie
    }
    if (!anti[channel.guild.id + entry.id]) {//btrolie
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }//Zine , Mohamed Tarek , Kbosh
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)//btrolie
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)//btrolie
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Channles__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {//btrolie
                if (e) throw e;
            });//btrolie
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }//btrolie
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});//btrolie

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,//btrolie
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {//btrolie
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Roles__!**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }//btrolie

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,//btrolie
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");//btrolie
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , is creating many __Rooms__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
//btrolie


//رينبو


//btrolie
client.on('ready', () => {// افنت التشغيل //btrolie
  setInterval(function(){
      client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                  var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 30000);// //btrolieوقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
})



//btrolie

//مسح الشات



  
  client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});
//btrolie


//كود مسح الشات بعدد



client.on('message', message => {
    if (message.content.startsWith(prefix + 'cle')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));//btrolie
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  //btrolie
  });





client.on('ready', () => {
       client.user.setActivity("*help",{type: 'WATCHING'});
  });
  //btrolie


//btrolie





client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ***admin** ' ,' **اوامر اداريه** ')
.addField('     ***pro**  ' ,' **اوامر الحمايه** ')
.addField('     ***general**  ' ,' **اوامر عامه** ')
.addField('     ***games**  ' ,' **اوامر الالعاب** ')
.addField('     ***rainbow**  ' ,' **كيفيه تشغيل الرينبو** ')


.setColor('RANDOM')
message.channel.sendEmbed(embed);
}//btrolie
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ***allbots** ' ,' **لعرض جميع البوتات الي بالسيرفر** ')
.addField('     ***server** ' ,' **يعرض لك معلومات عن السيرفر** ')
.addField('     ***bot** ' ,' **يعرض لك كل معلومات البوت** ')
.addField('     ***roles** ' ,' **يعرض لك كل الرانكات بالسيرفر بشكل جميل** ')
.addField('     ***emojilist** ' ,' **يعرض لك كل الايموجيات الي بالسيرفر** ')
.addField('     ***say** ' ,' **يكرر الكلام الي تكتبو** ')
.addField('     ***id** ' ,' **معلومات عنك** ')
.addField('     ***avatar** ' ,' **صورتك او صورة الي تمنشنو** ')
.addField('     ***support** ' ,' **سيرفر الدعم** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "admin")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ***move @user** ' ,' ** لسحب الشخص الى روومك** ')
.addField('     ***role @user <rank>** ' ,' **لأعطاء رتبة لعضو معين** ')
.addField('     ***roleremove @user <rank>** ' ,' **لازالة الرتبة من شخص معين** ')
.addField('     ***give all <rank>** ' ,' **لأعطاء رتبة للجميع** ')
.addField('     ***give humans <rank>** ' ,' **لأعطاء رتبة للاشخاص فقط ** ')
.addField('     ***give bots <rank>** ' ,' **لأعطاء رتبة لجميع البوتات** ')
.addField('     ***cle <numbr>** ' ,' **مسح الشات بعدد** ')
.addField('     ***clear** ' ,' **مسح الشات** ')
.addField('     ***mute @user <time>** ' ,' **اعطاء العضو ميوت ** ')
.addField('     ***unmute @user** ' ,' **لفك الميوت عن الشخص ** ')
.addField('     ***kick @user <reason>** ' ,' **طرد الشخص من السيرفر** ')
.addField('     ***ban @user <reason>** ' ,' **حضر الشخص من السيرفر** ')
.addField('     ***mutechannel** ' ,' **تقفيل الشات** ')
.addField('     ***unmutechannel** ' ,' **فتح الشات** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "rainbow")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('**انشاء رتبه بأسم **``Rainbow``**** ')
.addField(' **وضعها تحت رتبه البوت** ')
.addField('**تم عمل الرينبو سرعه الرينو 60 ثانيه ** ')
.addField(' **سرعه البوت هاكذا لأمان سيريفرك وبوتنا ** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', msg => {
    if (msg.content === '*rainbow') {
      msg.reply('**Rainbow**');
    }
  });

client.on('message', msg => {
    if (msg.content === '*rainbow') {
      msg.reply('***انسخ مباشرتا 👆**');
    }
  });


client.on('message', message => {
    if (message.content.startsWith(prefix + "pro")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ***limitbans ** ' ,' **الاشخاص الي يتم تبنيدهم بعدها ينحضر الشخص الي يبي يخرب** ')
.addField('     ***limitkicks** ' ,' **الاشخاص الي ينطردون بعدها يتبند الشخص** ')
.addField('     **limitroleDelete** ' ,' **الرتب الي تنحذف بعدها يتبند الشخص** ')
.addField('     **limitchannelDelete** ' ,' **الرومات التنحذف بعدها يتبند الشخص** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "games")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **كت تويت** ' ,' **لعرض جميع البوتات الي السيرفر** ')
.addField('     **نكت ** ' ,' **يعرض لك معلومات عن السيرفر** ')
.addField('     **لو خيروك** ' ,' **تخيير اشياء عن حياتك** ')
.addField('     **فورت نايت** ' ,' ** اسالة عن فورت نايت** ')
.addField('     **قرعة** ' ,' **رقم معين يتم السحب عليه ** ')
.addField('     **قرعة** ' ,' **رقم معين يتم السحب عليه ** ')
.addField('     **عن قريب هاذه الالعاب** ')

.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "tickets")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **£new** ' ,' **لفتح تكت** ')
.addField('     **£close** ' ,' **لغلق تكت** ')
.addField('     **£mtickets enable/disable** ' ,' **لتعطيل وتفعيل تكت** ')
.addField('     **£cleartickets** ' ,' **لمسح جميع تكتات** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});






client.on('message', message => {
    if (message.content === "*server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type`*roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});





client.on('message', message => {
    if (message.content === "*bot") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField("**اسم السيرفر**", message.guild.name)
 .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
 .addField("**المستخدمين:**", client.users.size)
 .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
   }
});







client.on('message', message => {
    if (message.content.startsWith(prefix + "id")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(": النك نيم",`${h.nickname}`, true) .addField(": #",heg.discriminator, true)
.addField(`: البلينق`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}       });



client.on('message', async message => {
if(message.content.startsWith(prefix + "owner")) {
  let i = client.users.size;
  if(message.author.id !== 'ايديك') return message.channel.send('❎ » انت لست صاحب البوت');
  message.channel.send("**انت صاحب البوت تم الاثبات✅**")
}
})









client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('*ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});



var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content.startsWith(prefix + "roles")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});




client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
    if(message.content.startsWith(prefix + 'say')) {
        let FireKing1 = new Discord.RichEmbed()
        .setTitle("**اختار كيف تريد الساي**")
       .setDescription(`**
       📬 | اذا تريد البوت يرسلك ساي بي امبد
       📇 | اذا تريد البوت يرسلك ساي بدون امبد
       **`)
        message.channel.send(FireKing1).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction2Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === message.author.id;//btrolie
let reaction1Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === message.author.id;//btrolie
//btrolie
let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });//btrolie
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });///btrolie
reaction2.on("collect", r => {//btrolie
    message.channel.send(''+x).then(a => {//btrolie
        a.delete(5000)//btrolie
    })//btrolie
    })//btrolie
    reaction1.on("collect", r => {
        let FireKing2 = new Discord.RichEmbed()
    .setDescription(''+x)
    .setFooter(`بترولي`)//حقوق //btrolie
    message.channel.send(FireKing2).then(a => {
    a.delete(5000)
    
    })
    })
        })
    }
});








client.on("message",message => {
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar")){
const mention = message.mentions.users.first()

if(!mention) return console.log("") 
let embed = new Discord.RichEmbed()
.setColor("BLACK")
.setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
.setTitle("Avatar Link")
.setURL(`${mention.avatarURL}`)
.setImage(`${mention.avatarURL}`)
.setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
    message.channel.send(embed)
}
})

client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})






client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});






client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});






client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});











client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "اسحب [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("?")
 }}});







client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });

    client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleremove") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });

    client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'give')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});





client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "*mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });




client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "*unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });





const cuttweet = [     'كت تويت ‏| تخيل اك مش عارف ترسم وتقلد صاحبك الي جنبك؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الصمت علامه لـ . ؟',     'كت تويت | قناة الانمي المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Galaxy bot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});





client.on('message', message => {
    if (message.content == "*سرعه") {
        var x = ["LioN_Dz",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"كانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['LioNDz',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "كانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})









client.on ("message",async Message => {
    if (Message.content.startsWith (prefix + "check")){
    if (Message.guild) return Message.reply("**Please use this command on my dm because the token can be stealed by other members.**");
        var token = Message.content.split(" ").slice(1).join(" ");
        if(!token)return Message.channel.send("**Specify a token.**");
        var tocheck = new Discord.Client ();
        try{
            await tocheck.login(token);
            var embed = new Discord.RichEmbed()
                .setColor ("RANDOM")
                .setTitle ("Tokens Checker")
                .addField ("Tag: ", tocheck.user.tag, false)
                .addField ("ID: ", tocheck.user.id, false)
                .addField ("nitro ? ", tocheck.user.premium ? "yes" : "no", false)
                .addField ("Email verified: " , tocheck.user.verified ? "yes" : "no", false)
                .addField ("Email: ", tocheck.user.email, false)
                .addField ("Guilds Size: ", tocheck.guilds.size, false)
            await Message.channel.send(embed)
        }catch(error){
            Message.channel.send(error.message);
        }
    }
})