const mongoose = require('mongoose');
const { connectionString } = require('../config.json');

const {
    logClearID,
    numOfLogsID,
    pruneID,
    snipeID,
    publicRole,
    guildId
} = require('../config.json')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        mongoose.connect(connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Connected to the database');
        }).catch((err) => {
            console.log(err);
        })
        const fullPermissions = [
            {
                id: logClearID,
                permissions: [{
                    id: publicRole,
                    type: 'ROLE',
                    permission: false,
                }],
            },
            {
                id: numOfLogsID,
                permissions: [{
                    id: publicRole,
                    type: 'ROLE',
                    permission: false,
                }],
            },
            {
                id: pruneID,
                permissions: [{
                    id: publicRole,
                    type: 'ROLE',
                    permission: false,
                }],
            },
            {
                id: snipeID,
                permissions: [
                    {
                        id: publicRole,
                        type: 'ROLE',
                        permission: true,
                    }
                ],
            },
        ];
        await client.guilds.cache.get(guildId)?.commands.permissions.set({ fullPermissions });
    },
};