// Requirements
const { ltVC, vcChatRole } = require("../config.json");

// Code
module.exports = {
    name: 'voiceChannelJoin',
    execute(member, channel) {
        console.log(member+' has joined a channel' + channel);
        if (channel == ltVC) {
            if (member.roles.cache.some(role => role.name === 'vc chat')) {
                console.log("User already has role");
            } else {
                member.roles.add(vcChatRole);
            }
        } else if (channel !== ltVC) {
            console.log('User did not join'+ channel)
        }
    }
}