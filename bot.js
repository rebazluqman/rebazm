
 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"
 
 

client.on("message", async message => {
  if (message.content.startsWith(prefix + "timeon")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.reply("❌ ****");
    if (
      !message.guild
        .member(client.user)
        .hasPermission(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ ****");
    message.channel.send("✅| **Done successfully**");
    message.guild.createChannel("🕐 - 𝐓𝐢𝐦𝐞 00", "voice").then(c => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        var currentTime = new Date(),
          hours = currentTime.getHours() + 3,
          minutes = currentTime.getMinutes(),
          seconds = currentTime.getSeconds(),
          years = currentTime.getFullYear(),
          month = currentTime.getMonth(),
          day = currentTime.getDate(),
          week = currentTime.getDay();

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
        }
        if (hours == 0) {
          hours = 12;
        }

        c.setName(
          "🕐┊𝐓𝐢𝐦𝐞𝐫   ↱" + hours + ":" + minutes + " " + suffix + "↰"
        );
      }, 1000);
    });
  }
});










client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle(
        "**کلیک لێرە بکە بۆ ڕاکێشانی بۆتەکە بۆ سێرڤەرەکەت :sparkling_heart:**"
      )
      .setURL(
        `https://discordapp.com/api/oauth2/authorize?client_id=661029382953107457&permissions=8&scope=bot`
      );
    message.channel.sendEmbed(invite);
  }
});






client.on("message", message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").addField(
      `**__𝐭𝐢𝐦𝐞𝐫 𝐛𝐨𝐭__**`,
      `
**#timeon**
**#invite**
	  `
    );

    message.channel.send({ embed });
  }
});



client.on("message", async message => {
  if (message.content.startsWith(prefix + "timeon")) {
    var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌ **ليس لديك الصلاحيات الكافية**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ **ليس معي الصلاحيات الكافية**");
    message.channel.send("✅| **Done successfully**");
    message.guild
      .createChannel(
        "📅 - Date " + "「" + day + "-" + month + "-" + years + "」",
        "voice"
      )
      .then(c => {
        console.log(`Date channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(
            "📅┊𝐃𝐚𝐭𝐞 " + "↱" + day + "-" + month + "-" + years + "↰"
          );
        }, 1000);
      });
  }
});


client.login(process.env.BOT_TOKEN);
