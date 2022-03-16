// Declarations
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

// Code
module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Replies with the GitHub Repository'),
    async execute(interaction) {
        console.log('gh commandid ' + interaction.commandId)
        const sourceEmbed = new MessageEmbed()
            .setColor('#054669')
            .setTitle('Wiki')
            .setURL('https://github.com/Soucouyant/Snipe-Bot/wiki')
            .setAuthor(
                'Duran',
                'https://cdn.discordapp.com/avatars/234824711622623232/babd5181a2b20563f793ed5dbfa8aced.png?size=4096',
                'https://github.com/Soucouyant'
            )
            .setDescription('Simple Discord bot using DiscordJS Library!')
            .setThumbnail('https://cdn.discordapp.com/attachments/923089843314114582/933163257496215602/unknown.png')
            .addFields(
                { name: 'Uses', value: 'Snipe Command(s) (WIP) and Permission Handling' },
                { name: 'Source Code', value: 'https://github.com/Soucouyant/Snipe-Bot' },
                { name: '\u200B', value: '\u200B' },
                { name: 'master branch', value: 'Used as storage for the Legacy version of the bot', inline: true },
                { name: 'Revamped branch', value: 'The newest build of the bot safe to use (probably)', inline: true }
            )
            .setImage('https://cdn.discordapp.com/attachments/923089843314114582/933164823678697522/29EA012E-4599-4C47-8FC8-457998A78BFA.jpg')
            .setTimestamp()
            .setFooter('Have any questions? View the wiki, @/DM me or create an issue on the Repo!')
        await interaction.reply({ embeds: [sourceEmbed] });
        console.log(interaction.commandId);
    }
}