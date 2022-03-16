// Requirements
const { SlashCommandBuilder } = require('@discordjs/builders');
const messageLogSchema = require("../schema/messageLogSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logsnum')
        .setDescription('Replies with the total number of logs in the database'),
    async execute(interaction) {

        console.log('numOfLogs id is ' + interaction.commandId); // [Interaction commandID]

        const logs = await messageLogSchema.find({}) // Returns all logs as objects in an array

        // Counts number of objects in logs constant using .length method
        const numLogs = logs.length;

        // Provides number of logs to end-user
        interaction.reply(`There are currently ${numLogs} logs in the database.`)
    }
}
