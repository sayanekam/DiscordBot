const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'prune',
    aliases: 'pr',
	description: 'Find users that have 0 clan contribution',
	execute(message, args) {
        if(args.length == 0) {
            
            message.channel.send(`k!cc ${message.author.username}`);
        }
        else {
            message.channel.send(`k!cc ${args[0]}`);
        }

        const collector  = new Discord.MessageCollector(message.channel, m => m.author.id === config.karuta, {time: 10000});
        collector.on('collect', collectedMessage => {
            collectedMessage.embeds.forEach((embed) => {
                if(embed.title == "Clan Contribution") {  
                        setTimeout(() => {  collectedMessage.react('⏩'); }, 2000);
                        //setTimeout(() => {  collectedMessage.react('➡️'); }, 2000);
                    }
                }
            );
        })
	},
};