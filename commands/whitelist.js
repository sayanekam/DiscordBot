const fs = require('fs');

module.exports = {
    name: 'whitelist',
    aliases: 'wt',
	description: 'add user to whitelisted users',
	execute(message, args) {
        if(args.length == 0) {
            message.reply('please specify a user to whitelist');
        }
        else {
            //if(config.whitelisted.incldues(args[0])) return;
            //config.whitelisted.push(args[0]);
            message.channel.send(`${args[0]} has been added to whitelisted users.`);
        }
              
	},
};