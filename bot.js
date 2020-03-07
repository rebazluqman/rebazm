const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://3rb-evets.glitch.me/`);
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
 client.user.setGame("t!help", "online");
});



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






client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} !`);
  client.user.setActivity("#help ", { type: "WATCHING" });
});



//////////////////////////////////
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



/////////////////


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
