const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['commands'],
    usage: '[command name]',
	description: 'List all command or info about a specific command',
	execute(message, args) {
        const data  = [];
        const { commands } = message.client;
        if(!args.length) {
            const embed = new Discord.MessageEmbed()
                .setTitle('PluffyBot Commands')
                .setDescription(`Type \`phelp command\` to see more details about a particular command`)
                .addFields(

                );

            message.author.send(embed);  
            message.reply('please check your DM for the list of commands.');      
            message.channel.send('+:fast_forward');    
        }
        else {
            
        }
	},
};