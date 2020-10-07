const { Command } = require('discord.js-commando')

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            description: 'Health check',
            examples: ['$test'],
            group: 'test',
            memberName: 'test',
        })
    }

    run(msg) {
        msg.say('I am still working!');
    }
}