const { Command } = require('discord.js-commando')
const axios = require('axios')

module.exports = class UwuifyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uwu',
            description: 'Uwu-ifys your message',
            examples: ['$uwu hello there',],
            group: 'translate',
            memberName: 'uwuify',
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
        text = text.replace(/(?:r|l)/g, "w");
        text = text.replace(/(?:R|L)/g, "W");
        text = text.replace(/n([aeiou])/g, 'ny$1');
        text = text.replace(/N([aeiou])/g, 'Ny$1');
        text = text.replace(/N([AEIOU])/g, 'Ny$1');
        text = text.replace(/ove/g, "uv");
        msg.say(text)
    }
}