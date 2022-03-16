//Requirements
const { ltVC, vcChatRole } = require("../config.json");

// Code
module.exports = {
    name: 'voiceChannelLeave',
    execute(member, channel) {
        if (channel == ltVC) {
            member.roles.remove(vcChatRole);
        }
    }
}