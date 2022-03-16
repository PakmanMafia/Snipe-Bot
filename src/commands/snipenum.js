// Declarations
const { SlashCommandBuilder } = require('@discordjs/builders');
const delSchema = require('../schema/messageLogSchema');
const { MessageEmbed } = require('discord.js');

// Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipenum')
        .setDescription('Snipes a message up to 5 deletes back!')
        .addIntegerOption(option => option.setName('input').setDescription('How many message ago do you want to snipe?').setMinValue(1).setMaxValue(5).setRequired(true)),
    async execute(interaction) {
        console.log('snipenum id is ' + interaction.commandId)
        const array = await delSchema.find({}).sort({ createdTimestamp: -1 }).limit(6)
        let input = interaction.options.getInteger('input');
        let messagesAgo = input - 1;

        // Important Vars
        const memberId = array[messagesAgo].authorId;
        const guild = interaction.guild;
        const snipedMessage = array[messagesAgo].content;

        // Cutting Length of Date
        const snipedMessageTime = array[messagesAgo].createdAt;
        const snipedMessageTimeLength = 21;
        const snipedMessageTimeTrim = snipedMessageTime.substring(0, snipedMessageTimeLength);

        // Functions for Avatar Declaration
        let avatarUrl;
        async function avatarUrlFind() {
            const guildMember = await guild.members.fetch(memberId);
            avatarUrl = guildMember.displayAvatarURL({ dynamic: true });
        }
        await avatarUrlFind();
        const snipeEmbed = new MessageEmbed()
            .setAuthor({
                name: array[messagesAgo].author,
                iconURL: `${avatarUrl}`
            })
            .setDescription(`${snipedMessage}`)
            .setFooter({ text: `${snipedMessageTimeTrim}` })
        interaction.reply({ embeds: [snipeEmbed] });

        // console.log(array[messagesAgo].content); [Test, Deprecated]
    }
}