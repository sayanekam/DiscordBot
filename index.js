const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

	/*message.embeds.forEach((embed) => {
		if(message.author.id == config.karuta && embed.title == "Clan Contribution") {
			message.react('⏩');
		}
		console.log(message.reactions);
		console.log(embed.owner);
	 });*/

	if(!message.content.startsWith(config.prefix)) return;
		
	const args = message.content.slice(config.prefix.length).trim().split(' ');
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if(!command) return;
	
	if(message.author != config.owner && !config.admin.includes(message.author.id) && !config.whitelisted.includes(message.author.id)) {
		message.reply('you do not have access to that command');
		return;
	} 	

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error running that comamnd');
	}
});

client.login(config.token);