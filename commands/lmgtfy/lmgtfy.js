const { Command } = require('discord.js-commando')
const axios = require('axios')

module.exports = class LmgtfyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'lmgtfy',
			description: 'Gets the lmgtfy link',
            examples: ['$lmgtfy your dumb question here',],
            group: 'lmgtfy',
            memberName: 'lmgtfy',
			args: [
				{
					key: 'text',
					prompt: 'Enter your dumb question here',
					type: 'string'
				}
			]
		})
	}

	run(msg, { text }) {
        var msgToTranslate = text.split(' ').join('+')
        msg.say(`https://lmgtfy.app/?q=${msgToTranslate}`)
	}
}