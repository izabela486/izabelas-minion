const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client()
const {rando_reply_8_ball} = require('./eightball.js');
const {insults} = require('./insultlist.js');
const {lenny} = require('./lennyfaces.js');
const {quote_list} = require('./quotes.js');
const {kill_list} = require('./kill.js');

client.on("message", (message) => {
	if (message.author.bot) return;
	var date = new Date();
	if (message.content.toLowerCase().startsWith(".help")) {{
	  const helpEmbed = {
	color: 0x0099ff,
	title: 'Commands',
	description: `.help = this command
	.avatar = an enlarged picture of your avatar.
			(posting avatars of other users is currently in development)
	.8ball = follow this by a question and the bot will work its magic!
	.time = current time is shown
	.insult = an insult
	.lenny = a lenny face
	.ping = replies with the current ping time
	.quote = a quote to brighten your day :>
	.kill = M U R D E R 
	.example = an example of an embed`,
	footer: {
		text: `${message.author.tag}`,
	},
}
	  console.log(`${message.author.tag} used .help at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	 message.channel.send({ embed: helpEmbed })
  }
	}
 
    else if (message.content.toLowerCase().startsWith('.avatar')) {
		console.log(`${message.author.tag} used .avatar ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
		const avatarembed = new Discord.RichEmbed()
	avatarembed.setImage(`${message.author.avatarURL}`)
	avatarembed.setColor('#fffa7c')
	avatarembed.setTimestamp()
	avatarembed.setFooter(`${message.author.tag}`)
	    message.channel.send(avatarembed);
  }
  
	if (message.content.toLowerCase().includes("hello there")) {
	  console.log(`${message.author.tag} used hello there at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    message.channel.send('General Kenobi');
  }

    else if (message.content.toLowerCase().startsWith('.8ball ')) {
		console.log(`${message.author.tag} used .8ball at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	const ballEmbed = new Discord.RichEmbed().setTitle(":8ball: " + rando_reply_8_ball[Math.floor(Math.random() * rando_reply_8_ball.length)])
    message.channel.send({embed :ballEmbed});
  }  
  
  else if (message.content.toLowerCase() == ".8ball") {
	  console.log(`${message.author.tag} used .8ball incorrectly at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
	  const incorrectballEmbed = new Discord.RichEmbed().setTitle(":no_entry_sign: Hey there! You have to ask me a question.")
	.setColor('#e21512')
	  message.channel.send({embed :incorrectballEmbed})
  }
   
  else if (message.content.toLowerCase().startsWith('.insult')) {
		console.log(`${message.author.tag} used .insult at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	const insultEmbed = new Discord.RichEmbed().setTitle(":rage: " + insults[Math.floor(Math.random() * insults.length)])
	.setColor('#e21512')
    message.channel.send({embed :insultEmbed});
  }  
  
  else if (message.content.toLowerCase().startsWith('.time')) {
	  console.log(`${message.author.tag} used .time at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	  var date = new Date()
	  const timeEmbed = new Discord.RichEmbed().setTitle(":clock10: the time is...").setDescription(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
	  message.channel.send(timeEmbed)
  }	
  
  else if (message.content.toLowerCase().startsWith('.lenny')) {
	  console.log(`${message.author.tag} used .lenny at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);	
const lennyEmbed = new Discord.RichEmbed().setTitle(lenny[Math.floor(Math.random() * lenny.length)] + " ")
	.setColor('#e21512')
    message.channel.send({embed :lennyEmbed});	 
  }	
  
  else if (message.content.toLowerCase().startsWith('.ping')) {
	  console.log(`${message.author.tag} used .ping at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	  const pingEmbed = new Discord.RichEmbed().setTitle('Your ping is ' + Math.round(client.ping) + ' ms')
	  message.channel.send({embed :pingEmbed})
  }
  
 	else if (message.content.toLowerCase() === 'f') {
		console.log(`${message.author.tag} used F at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Big F to them`);
		message.channel.send("A big F in the chat")
		message.react('🇫')
	}
	
	else if(message.content.toLowerCase().startsWith('.quote')) {
		console.log(`${message.author.tag} used .quote at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
		const quoteEmbed = new Discord.RichEmbed().setTitle(':pen_fountain: ' + quote_list[Math.floor(Math.random() * quote_list.length)])
		.setColor('#82868c')
		message.channel.send({embed :quoteEmbed});
	}
	
	else if(message.content.toLowerCase().includes('potato')) {
		console.log(`${message.author.tag} said potato at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
		message.react('🥔')
	}

	else if(message.content.toLowerCase().startsWith('.kill')) {
		console.log(`${message.author.tag} used .kill at  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
		const killEmbed = new Discord.RichEmbed().setTitle(':knife: ' + kill_list[Math.floor(Math.random() * kill_list.length)])
		message.channel.send({embed :killEmbed})
	}		
	
	else if(message.content.toLowerCase().startsWith('.example')) {
	console.log(`${message.author.tag} used .example at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
	const exampleEmbed = {
		color: 0x0099ff,
		title: 'TITLE',
		author: {
			name: 'Some name',
		},
		description: 'DESCRIPTION',
		fields: [
			{
				name: 'FIELD #1',
				value: 'FIELD #1 TEXT HERE',
			},
			{
				name: '\u200b',
				value: '\u200b',
			},
			{
				name: 'FIELD #2',
				value: 'FIELD #2 TEXT HERE',
				inline: true,
			},
			{
				name: 'FIELD #3',
				value: 'FIELD #3 TEXT HERE',
				inline: true,
			},
			{
				name: 'FIELD #4',
				value: 'FIELD #4 TEXT HERE',
				inline: true,
			},
		],
		timestamp: new Date(),
		footer: {
			text: 'FOOTER TEXT HERE',
		}
	}
		message.channel.send({embed :exampleEmbed})
		message.channel.send(`Images may also be added to embeds but are not included in this example. Ping izabela to see examples of embeds with images. In addition, the colour strip is based off the hex system (eg; a shade of blue is #4286f)node i!`)
	}
	});

client.on("ready", () => {
	var date = new Date();
console.log(`the bot has risen at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    client.user.setActivity("with Pink Phallic Objects", { type: "Playing"});
});
