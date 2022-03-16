const { SlashCommandBuilder } = require('@discordjs/builders');
const logSchema = require('../schema/messageLogSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clearlog')
        .setDescription('Clears amount of logs based on input')
        .addIntegerOption(option => option.setName('amount').setDescription('Number of logs to clear').setRequired(true)),
    async execute(interaction) {
        console.log('logClear id is' + interaction.commandId); // [Interaction commandID]

        // Store input in "amount" constant
        const amount = interaction.options.getInteger('amount');

        // Clamping Value to 1-10
        if (amount <= 1 || amount > 10) {
            return interaction.reply({ content: 'You need to input a number between 1 and 10.', ephemeral: true });
        } else {

            // Define logs in array, and Count array
            const logs = await logSchema.find({});
            const logNum = logs.length;

            // Display number of logs [Test] [Deprecated]
            // console.log(logNum);

            // For Loop that deletes based on input
            if (logNum < 15) {
                interaction.reply(`There are currently ${logNum} logs in the database. Deleting more is ill-advised.`)
            }
            else if (logNum >= 15) {
                // Loop delete one function until i = amount constant
                for (let i = 0; i < amount; i++) {
                    const logsToDelete = await logSchema.find({}).sort({ createdTimestamp: 1 });
                    const oneLog = logsToDelete[0].createdTimestamp;
                    const query = { createdTimestamp: `${oneLog}` };
                    const deleteLog = await logSchema.deleteOne({ query });

                    // deleteOne method tests [Deprecated]
                    // if (deleteLog.deletedCount === 1) {console.log("Successfully deleted 1");} else {console.log("Shi, probably failed lmfao");}
                }
                // Provide output to end-user
                interaction.reply(`${amount} logs have been deleted from the database.`)
            }
        }
    }
}
