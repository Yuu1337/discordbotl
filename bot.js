const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./tokens.json');

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("NAJLEPSZY DISCORD W POLSCE Z KONTAMI! #BOT1", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === 'gotospam') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE!`)
  }

  if (msg.content === 'wyslijzaproszenie') {
	  msg.channel.send(`LANOWCY.STORE NAJLEPSZY SKLEP Z KONTAMI W POLSCE! https://discord.gg/sZt564u`)
  }
  if (msg.content === 'dzik') {
	  msg.channel.send(`http://www.drapiezniki.pl/Photos/dzik.jpg `)
  }
  if (msg.content === 'Bicek') {
	  msg.channel.send(`https://imgur.com/a/s18597H `)
  }
  if (msg.content === '!') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '!play') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '!stop') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '!pause') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === '!play link') {
	  msg.channel.send(`Wpisales zla komende! Wpisz help aby zobaczec komendy! `)
  }
  if (msg.content === 'rokos') {
	  msg.channel.send(`https://imgur.com/a/RzgSUyD `)
  }
  if (msg.content === 'Bicekgif') {
	  msg.channel.send(`https://imgur.com/a/i523cLX `)
  }
  if (msg.content === 'cat') {
	  msg.channel.send(`https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 `)
  }
  if (msg.content === 'dog') {
	  msg.channel.send(`https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg `)
  }
  if (msg.content === 'komendy') {
	  msg.channel.send(`1.gotospam - spam tekstem!,
 2.wyslijzaproszenie - wysyla zaproszenie do servera Lanowcy.store
 3. autor - Pokazuje autora bota!
 4.chat-clear - czysci chat!
 5.wyslijtekstdoeveryone - wysyla reklame servera do wszystkich osob na discord!
 6.mojeIQ - pokazuje ile masz IQ
 7.wygenerujALT - otrzymasz wygenerowane konto alt!
 8.stronawww - nasza strona www
 9.fajnyavatar - wyswietla bardzo ladny avatar!
 10.smiesznygif - wyswietla smieszny gif!
 11.swastyka - wyswietla swastyke!
 12.MaleDzieci - bekowy tekst!
 13.dzik - wyswietla dzika
 14.Bicek - wyswietla bicka`)
  }
  if (msg.content === 'autor') {
	  msg.channel.send(`Autorem bota jest Yuu  `)
  }
  if (msg.content === 'mojeIQ') {
	  msg.channel.send(`Twoje IQ wynosi 99999iq `)
  }
  if (msg.content === 'fajnyavatar') {
	  msg.channel.send(`https://imgur.com/a/CbbH16x `)
  }
  if (msg.content === 'smiesznygif') {
	  msg.channel.send(`https://imgur.com/a/XXFlBwN `)
  }
  if (msg.content === 'swastyka') {
	  msg.channel.send(`https://imgur.com/a/C3hwrWd `)
  }
  if (msg.content === 'MaleDzieci') {
	  msg.channel.send(`MaleDzieci lubia Dzieci! :D <3 `)
  }
  if (msg.content === '!stronawww') {
	  msg.channel.send(`Talk-speak.pl - nasza strona www `)
  }
  if (msg.content === 'wygenerujALT') {
	  msg.channel.send(`LANOWCY.STORE - NAJLEPSZY SKLEP Z KONTAMI W POLSCE!



OTO TWOJ MINECRAFT ALT:
nicholas.garrell3@gmail.com:M1n3craftR0CK5 `)
  }
  if (msg.content === 'wyslijtekstdoeveryone') {
	  msg.channel.send(`@everyone Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta!  `)
  }
  if (msg.content === '@everyone Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta!') {
	  msg.channel.send(`@everyone Na naszym serverze discord jest mozliwosc wygenerowania minecraft alta!  `)
  }
  if (msg.content === 'chat-clear') {
	  msg.channel.send(`






.











.










.






.









                                                         ---CHAT CLEAR----  `)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`Nie wczytano komendy!  
Wpisz "komendy" - Wyswietli dostepne komedy bota!`)
}
});

client.login(tokens.token);