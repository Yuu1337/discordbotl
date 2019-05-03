const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("by Yuu.", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'lanowcy.storewyslijwiadomosc') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE:https://discord.gg/sZt564u`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE:https://discord.gg/sZt564u`)
  }
});

client.login(tokens.token);