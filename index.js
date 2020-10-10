const { CommandoClient } = require('discord.js-commando')
const path = require('path')
require('dotenv').config()

const client = new CommandoClient({
	commandPrefix: '$',
	owner: '239808286742806528',
	disableEveryone: true
})

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['translate', 'transalte your message'],
		['lmgtfy', 'lmgtfy command'],
		['test', 'test commands']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
	console.log('Online')
	client.user.setPresence({
		activity: {name: 'Hunting treasures | $help'}, status: 'active'
	})
})

client.on('error', console.error)

client.login(process.env.TOKEN)