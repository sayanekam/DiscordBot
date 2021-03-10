module.exports = {
    name: 'update',
    aliases: 'u',
	description: 'Update clan contribution info',
	execute(message, args) {
        if(args.length == 0) {
            message.channel.send(`kcc ${message.author.username}`);
        }

        else {
            message.channel.send(`kcc ${args[0]}`);
        }

        
	},
};