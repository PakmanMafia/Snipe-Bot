// Declarations
const { SlashCommandBuilder } = require('@discordjs/builders');
const delSchema = require('../schema/messageLogSchema');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Snipes a recently deleted message!'),
    async execute(interaction) {
        // console.log('snipe id is ' + interaction.commandId) [Interaction commandId]
        // Return the latest deleted message based on timestamp property
        const results = await delSchema.find({}).sort({ createdTimestamp: -1 }).limit(1)

        // If Object 0 in results array is NOT undefined, then run the code
        if (typeof results[0] !== 'undefined') {
            // Important Vars
            const memberId = results[0].authorId;
            const guild = interaction.guild;
            const snipedMessage = results[0].content;

            // Cutting Length of Date
            const snipedMessageTime = results[0].createdAt;
            const snipedMessageTimeLength = 21;
            const snipedMessageTimeTrim = snipedMessageTime.substring(0, snipedMessageTimeLength);

            // avatarUrl declaration
            let avatarUrl;
            async function avatarUrlFind() {
                try {
                    const guildMember = await guild.members.fetch(memberId);
                    avatarUrl = guildMember.displayAvatarURL({ dynamic: true });
                    console.log(avatarUrl);
                } catch {
                    avatarUrl = `https://cdn.discordapp.com/embed/avatars/3.png`;
                }
            }
            await avatarUrlFind();

            // Creating Embed
            const nessEmbed = new MessageEmbed()
                .setAuthor({
                    name: results[0].author,
                    iconURL: avatarUrl

                })
                .setDescription(`${snipedMessage}`)
                .setFooter({ text: `${snipedMessageTimeTrim}` })
            interaction.reply({ embeds: [nessEmbed] })
        } else {
            interaction.reply("There is nothing to snipe")
        }
    }
}