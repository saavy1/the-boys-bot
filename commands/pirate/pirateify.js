
const { Command } = require('discord.js-commando')
const axios = require('axios')

module.exports = class PirateifyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pirate',
			description: 'Pirate-ifys your message',
            examples: ['$pirate hello there',],
            group: 'pirate',
            memberName: 'pirateify',
			args: [
				{
					key: 'text',
					prompt: 'Enter what you\'d like to pirate-ify',
					type: 'string'
				}
			]
		})
	}

	run(msg, { text }) {
        var msgToTranslate = text.split(' ').join('%20')
        axios.get(`http://pirate.monkeyness.com/cgi-bin/translator.pl?english=${msgToTranslate}`)
        .then(response => {
            msg.say(response.data)
        })
	}
}